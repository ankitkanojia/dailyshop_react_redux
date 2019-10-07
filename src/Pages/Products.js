import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMenu , fetchProducts } from './../Redux/Actions/StaticItems';
import { reducerProducts } from './../Redux/Actions/Product';
import { UPDATE_PRODUCTWISHLISTFLAG } from './../Redux/ActionTypes';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import ModalPopup from "./../Components/ModalPopup";
import { addToCart, addToWishList, removeFromWishList } from './../Redux/Actions/CartProducts';
import Filter from "./../Containers/Filter";
import { withRouter } from 'react-router';

class Products extends Component {

    static propTypes = {
        menuItems: PropTypes.array.isRequired,
        fetchMenu: PropTypes.func.isRequired,
        reducerProducts: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        addToCart: PropTypes.func.isRequired,
        addToWishList: PropTypes.func.isRequired,
        wishListProducts: PropTypes.array.isRequired,
        removeFromWishList: PropTypes.func.isRequired,
        sortOption: PropTypes.string,
        sort: PropTypes.string
    }

    state = {
        subMenuItems: [],
        productDetails: {
            category: "",
            sizes: "",
            description: "",
            productImages: "",
            imgurl: "",
            discountedprice: "",
            currency: "",
            status: ""
        },
        visible: false,
        totalPiece: 1,
        currentPage: 1,
        todosPerPage: 9,
        isPreviousAvail: false,
        isNextAvail: true
    };

    onChangePage(event) {
        this.setState({
            currentPage: Number(event.target.id),
            isPreviousAvail: !(event.target.id === 1)
        });
    }

    onChangeNextPrevious(event) {
        let newPage = (event.target.type === "next") ? Number(event.target.id) + 1 : Number(event.target.id) - 1;
        this.setState({
            currentPage: newPage,
            isPreviousAvail: !(newPage === 1)
        });
    }

    componentDidMount() {
        let productCategoryId = this.props.location.state.productid;
        this.props.fetchMenu();
        window.priceSlider(20, 70);
        this.getCategory(productCategoryId);
        this.props.reducerProducts(productCategoryId);
    }

    getCategory(newid) {
        let subLinks = this.props.menuItems.filter(m => m.id === newid);
        this.setState({
            subMenuItems: subLinks
        });
    }

    openModal(product) {
        this.setState({
            productDetails: product,
            totalPiece: 1
        }, () => {
            window.test();
        });
        this.state.visible = true;
    }

    closeModal() {
        this.setState({
            visible: false,
            totalPiece: 1
        });
    }

    handleAddToCart(product) {
        product.count = this.state.totalPiece;
        let productAlreadyInCart = false;
        this.props.cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            this.state.visible = false;
            this.props.addToCart(product);
            this.props.removeFromWishList(product);
        }
    }

    handleAddToWishList(product, isWishListed) {
        if (isWishListed) {
            this.props.removeFromWishList(product);
            product.isWhishList = false;
            return dispatch => {
                return dispatch({
                    type: UPDATE_PRODUCTWISHLISTFLAG,
                    payload: product
                });
            }
        } else {
            let productAlreadyInCart = false;
            this.props.wishListProducts.forEach(cp => {
                if (cp.id === product.id) {
                    productAlreadyInCart = true;
                }
            });

            if (!productAlreadyInCart) {
                this.props.addToWishList(product);
            }

            product.isWhishList = true;
            return dispatch => {
                return dispatch({
                    type: UPDATE_PRODUCTWISHLISTFLAG,
                    payload: product
                });
            }
        }
    }

    handleChange(e) {
        this.setState({ totalPiece: e.target.value });
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.location.state.productid !== this.props.location.state.productid) {
            let productCategoryId = nextProps.location.state.productid;
            this.getCategory(productCategoryId);
            this.props.reducerProducts(productCategoryId, '', '', '');
        }

        if (nextProps.sortOption !== this.props.sortOption) {
            let productCategoryId = nextProps.location.state.productid;
            this.props.reducerProducts(productCategoryId, nextProps.sortOption, '', '');
        }
    }

    componentDidUpdate() {
        window.initializeView();
    }

    handlePageSizeChange(value) {
        this.setState({
            todosPerPage: value
        });
    }

    doPriceFilter() {
        let lowerPrice = parseInt(this.refs.lowerprice.textContent);
        let upperPrice = parseInt(this.refs.upperprice.textContent);
        this.props.reducerProducts(this.props.location.state.productid, this.props.sortOption, lowerPrice, upperPrice);
    }

    render() {

        const { currentPage, todosPerPage, isPreviousAvail } = this.state;
        let { isNextAvail } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const productList = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo);

        const pageNumbers = [];

        let totalcountingofItemsPerPage = Math.ceil(this.props.products.length / todosPerPage);
        for (let i = 1; i <= totalcountingofItemsPerPage; i++) {
            pageNumbers.push(i);
        }

        if (pageNumbers.length > 1) {
            isNextAvail = !(currentPage === totalcountingofItemsPerPage)
        }

        return (
            <React.Fragment>
                <section id="aa-catg-head-banner">
                    <img src="Content/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                    <div className="aa-catg-head-banner-area">
                        <div className="container">
                            <div className="aa-catg-head-banner-content">
                                <h2>Fashion</h2>
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Women</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-product-category" style={{marginBottom:20}}>
                    <div className="container">
                        <div className="row">

                            {productList && !!productList.length &&
                                <React.Fragment>
                                    <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
                                        <div className="aa-product-catg-content">
                                            <div className="aa-product-catg-head">
                                                <Filter handlePageSizeChange={this.handlePageSizeChange.bind(this)} />
                                                <div className="aa-product-catg-head-right">
                                                    <a id="grid-catg" href="javascript:void(0)"><span className="fa fa-th"></span></a>
                                                    <a id="list-catg" href="javascript:void(0)"><span className="fa fa-list"></span></a>
                                                </div>
                                            </div>
                                            <div className="aa-product-catg-body">
                                                <ul className="aa-product-catg">
                                                    {productList.map(p => {
                                                        return (<li key={p.id}>
                                                            <figure>
                                                                <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                <figcaption>
                                                                    <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                    <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                    <p className="aa-product-descrip">{p.description}</p>
                                                                </figcaption>
                                                            </figure>
                                                            <div className="aa-product-hvr-content">
                                                                <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                <Link to={{ pathname: '/productdetails', state: { product: p } }} title="Product Details"><span className="fa fa-list"></span></Link>
                                                            </div>
                                                            {p.tag.length > 0 &&
                                                                <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                            }
                                                        </li>)
                                                    })
                                                    }
                                                </ul>
                                            </div>
                                            <div className="aa-product-catg-pagination">
                                                <nav>
                                                    <ul className="pagination">
                                                        {isPreviousAvail && (
                                                            <li key={0}>
                                                                <a type="prev" id={currentPage} onClick={this.onChangeNextPrevious.bind(this)} href="javascript:void(0)" aria-label="Previous">
                                                                    <span aria-hidden="true">&laquo;</span>
                                                                </a>
                                                            </li>
                                                        )}

                                                        {pageNumbers.map(number => {
                                                            return (
                                                                <li key={number}><a key={number} id={number} onClick={this.onChangePage.bind(this)} href="javascript:void(0)">{number}</a></li>
                                                            )
                                                        })
                                                        }

                                                        {isNextAvail && (
                                                            <li key={totalcountingofItemsPerPage + 1}>
                                                                <a type="next" id={currentPage} onClick={this.onChangeNextPrevious.bind(this)}  href="javascript:void(0)" aria-label="Next">
                                                                    <span aria-hidden="true">&raquo;</span>
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }

                            {productList && !productList.length &&
                                <React.Fragment>
                                    <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
                                        <div className="aa-product-catg-content">
                                            <h4 className="text-center text-danger" style={{fontSize:40}}>No Product(s) Found....</h4>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }

                            <div className="col-lg-3 col-md-3 col-sm-4 col-md-pull-9">
                                <aside className="aa-sidebar">
                                    {this.state.subMenuItems && !!this.state.subMenuItems.length &&
                                        <div className="aa-sidebar-widget">
                                            <h3>Category</h3>
                                            <ul className="aa-catg-nav">
                                                {
                                                    this.state.subMenuItems.map(p => {
                                                        return <li key={p.id}><a href="javascript:void(0)">{p.title}</a></li>;
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    }

                                    <div className="aa-sidebar-widget">
                                        <h3>Shop By Price</h3>
                                        <div className="aa-sidebar-price-range">
                                            <form action="">
                                                <div id="skipstep" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                                                </div>
                                                <span ref='lowerprice' id="skip-value-lower" className="example-val">30.00</span>
                                                <span ref='upperprice' id="skip-value-upper" className="example-val">100.00</span>
                                                <button onClick={this.doPriceFilter.bind(this)} className="aa-filter-btn" type="button">Filter</button>
                                            </form>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <ModalPopup productDetails={this.state.productDetails} handleChange={this.handleChange.bind(this)} closeModal={() => this.closeModal()} addToCart={() => this.handleAddToCart(this.state.productDetails)} />
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    menuItems: state.staticitems.menu,
    products: state.staticitems.products,
    wishListProducts: state.cart.wishListProducts,
    cartProducts: state.cart.cartProducts,
    sortOption: state.filter.sortOption
});

export default connect(mapStateToProps, { addToCart, addToWishList, removeFromWishList, fetchMenu, reducerProducts , fetchProducts})(withRouter(Products));
