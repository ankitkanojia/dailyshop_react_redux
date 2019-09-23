import React from 'react';
import PropTypes from 'prop-types';

const ModalPopup = (props) => (<div id="quick-view-modal">
    <div className="modal-content">
        <div className="modal-body">
            <button onClick={props.closeModal} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="aa-product-view-slider">
                        <div className="simpleLens-gallery-container" id="demo-1">
                            <div className="simpleLens-container">
                                <div className="simpleLens-big-image-container">
                                    <a className="simpleLens-lens-image" data-lens-image={"Content/img/" + props.productDetails.imgurl}>
                                        <img width="250" height="300" src={"Content/img/" + props.productDetails.imgurl} className="simpleLens-big-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="simpleLens-thumbnails-container">
                                <a key={props.productDetails.imgurl} href="javascript:void(0)" className="simpleLens-thumbnail-wrapper"
                                    data-lens-image={"Content/img/" + props.productDetails.imgurl}
                                    data-big-image={"Content/img/" + props.productDetails.imgurl}>
                                    <img width="45" height="55" src={"Content/img/" + props.productDetails.imgurl} />
                                </a>
                                {props.productDetails.productImages ? (
                                    props.productDetails.productImages.map(p => {
                                        return (
                                            <a key={p} href="javascript:void(0)" className="simpleLens-thumbnail-wrapper"
                                                data-lens-image={"Content/img/" + p}
                                                data-big-image={"Content/img/" + p}>
                                                <img width="45" height="55" src={"Content/img/" + p} />
                                            </a>)
                                    })
                                ) : (<a></a>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="aa-product-view-content">
                        <h3>{props.productDetails.title}</h3>
                        <div className="aa-price-block">
                            <span className="aa-product-view-price">{props.productDetails.currency}{props.productDetails.discountedprice}</span>
                            <p className="aa-product-avilability">Avilability: <span>{props.productDetails.status}</span></p>
                        </div>
                        <p>{props.productDetails.description}</p>
                        <h4>Size</h4>
                        <div className="aa-prod-view-size">
                            {props.productDetails.sizes ? (
                                props.productDetails.sizes.map(p => {
                                    return <a href="javascript:void(0)" key={p}>{p}</a>
                                })
                            ) : (<a></a>)
                            }
                        </div>
                        <div className="aa-prod-quantity">
                            <form action="">
                                <select onChange={props.handleChange}>
                                    <option value="1" defaultValue="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </form>
                            <p className="aa-prod-category">
                                Category: <a href="javascript:void(0)">{props.productDetails.category}</a>
                            </p>
                        </div>
                        <div className="aa-prod-view-bottom">
                            <a onClick={props.addToCart} href="javascript:void(0)" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                            <a href="javascript:void(0)" className="aa-add-to-cart-btn">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);

ModalPopup.propTypes = {
    productDetails: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default ModalPopup;  