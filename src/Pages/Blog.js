import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Blog extends Component {
    static propTypes = {
        blogs: PropTypes.array.isRequired
    }

    render() {
        const categories = this.props.blogs.map(obj => obj.Category);

        return (
            <React.Fragment>
                <section id="aa-catg-head-banner">
                    <img src="content/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                    <div class="aa-catg-head-banner-area">
                        <div class="container">
                            <div class="aa-catg-head-banner-content">
                                <h2>Blog Archive</h2>
                                <ol class="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">Blog Archive</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-blog-archive">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="aa-blog-archive-area aa-blog-archive-2">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div class="aa-blog-content">
                                                <div class="row">
                                                    {this.props.blogs.map(p => {
                                                         return (
                                                        <div class="col-md-4 col-sm-4" key={p.id}>
                                                            <article class="aa-latest-blog-single">
                                                                <figure class="aa-blog-img">
                                                                    <Link to={{ pathname: '/blogdetail' }}><img alt="img" src={"Content/img/" + p.imageName} /></Link>
                                                                    <figcaption class="aa-blog-img-caption">
                                                                        <span href="#"><i class="fa fa-clock-o"></i>{new Date(p.createDate).toLocaleString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                                    </figcaption>
                                                                </figure>
                                                                <div class="aa-blog-info">
                                                                    <h3 class="aa-blog-title"><Link to={{ pathname: '/blogdetail' }}>{p.title}</Link></h3>
                                                                    <p>{p.decription}</p>
                                                                    <a class="aa-read-mor-btn" href="#">Read more <span class="fa fa-long-arrow-right"></span></a>
                                                                </div>
                                                            </article>
                                                        </div>)
                                                    })}
                                                </div>
                                            </div>
                                            {/* <div class="aa-blog-archive-pagination">
                                                <nav>
                                                    <ul class="pagination">
                                                        <li>
                                                            <a aria-label="Previous" href="#">
                                                                <span aria-hidden="true">«</span>
                                                            </a>
                                                        </li>
                                                        <li class="active"><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">4</a></li>
                                                        <li><a href="#">5</a></li>
                                                        <li>
                                                            <a aria-label="Next" href="#">
                                                                <span aria-hidden="true">»</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div> */}
                                        </div>
                                        <div class="col-md-3">
                                            <aside class="aa-blog-sidebar">
                                                <div class="aa-sidebar-widget">
                                                    <h3>Category</h3>
                                                    <ul class="aa-catg-nav">
                                                        {[...new Set(categories)].map((item, index) => <li key={index}><a href="#">{item}</a></li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div class="aa-sidebar-widget">
                                                    <h3>Tags</h3>
                                                    <div class="tag-cloud">
                                                        <a href="#">Fashion</a>
                                                        <a href="#">Ecommerce</a>
                                                        <a href="#">Shop</a>
                                                        <a href="#">Hand Bag</a>
                                                        <a href="#">Laptop</a>
                                                        <a href="#">Head Phone</a>
                                                        <a href="#">Pen Drive</a>
                                                    </div>
                                                </div>
                                                <div class="aa-sidebar-widget">
                                                    <h3>Recent Post</h3>
                                                    <div class="aa-recently-views">
                                                        <ul>
                                                            <li>
                                                                <a class="aa-cartbox-img" href="#"><img src="content/img/woman-small-2.jpg" alt="img" /></a>
                                                                <div class="aa-cartbox-info">
                                                                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                                                                    <p>March 26th 2016</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a class="aa-cartbox-img" href="#"><img src="content/img/woman-small-1.jpg" alt="img" /></a>
                                                                <div class="aa-cartbox-info">
                                                                    <h4><a href="#">Lorem ipsum dolor.</a></h4>
                                                                    <p>March 26th 2016</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a class="aa-cartbox-img" href="#"><img src="content/img/woman-small-2.jpg" alt="img" /></a>
                                                                <div class="aa-cartbox-info">
                                                                    <h4><a href="#">Lorem ipsum dolor.</a></h4>
                                                                    <p>March 26th 2016</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    blogs: state.staticitems.blogs
});

export default connect(mapStateToProps, null)(Blog);