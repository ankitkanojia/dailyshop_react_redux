import React, { Component } from 'react';

class BlogDetail extends Component {
    render() {
        const { blog } = this.props.location.state

        return (
            <React.Fragment>
                <section id="aa-blog-archive">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-blog-archive-area">
                                    <div className="row">
                                        <div className="col-md-9">
                                            {/* <!-- Blog details --> */}
                                            <div className="aa-blog-content aa-blog-details">
                                                <article className="aa-blog-content-single">
                                                    <h2><a href="#">{blog.title}</a></h2>
                                                    <div className="aa-article-bottom">
                                                        <div className="aa-post-author">
                                                            Posted By <a href="#">Jackson</a>
                                                        </div>
                                                        <div className="aa-post-date">
                                                            March 26th 2016
                      </div>
                                                    </div>
                                                    <figure className="aa-blog-img">
                                                        <a href="#"><img src={"content/img/" + blog.imageName} alt="fashion img" /></a>
                                                    </figure>
                                                    <p>{blog.decription}</p>
                                                    <div className="blog-single-bottom">
                                                        <div className="row">
                                                            <div className="col-md-8 col-sm-6 col-xs-12">
                                                                <div className="blog-single-tag">
                                                                    <span>Tags:</span>
                                                                    <a href="#">Fashion,</a>
                                                                    <a href="#">Beauty,</a>
                                                                    <a href="#">Lifestyle</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6 col-xs-12">
                                                                <div className="blog-single-social">
                                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>

                                        {/* <!-- blog sidebar --> */}
                                        <div className="col-md-3">
                                            <aside className="aa-blog-sidebar">
                                                <div className="aa-sidebar-widget">
                                                    <h3>Category</h3>
                                                    <ul className="aa-catg-nav">
                                                        <li><a href="#">Men</a></li>
                                                        <li><a href="">Women</a></li>
                                                        <li><a href="">Kids</a></li>
                                                        <li><a href="">Electornics</a></li>
                                                        <li><a href="">Sports</a></li>
                                                    </ul>
                                                </div>
                                                <div className="aa-sidebar-widget">
                                                    <h3>Tags</h3>
                                                    <div className="tag-cloud">
                                                        <a href="#">Fashion</a>
                                                        <a href="#">Ecommerce</a>
                                                        <a href="#">Shop</a>
                                                        <a href="#">Hand Bag</a>
                                                        <a href="#">Laptop</a>
                                                        <a href="#">Head Phone</a>
                                                        <a href="#">Pen Drive</a>
                                                    </div>
                                                </div>
                                                <div className="aa-sidebar-widget">
                                                    <h3>Recent Post</h3>
                                                    <div className="aa-recently-views">
                                                        <ul>
                                                            <li>
                                                                <a className="aa-cartbox-img" href="#"><img src="content/img/woman-small-2.jpg" alt="img" /></a>
                                                                <div className="aa-cartbox-info">
                                                                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                                                                    <p>March 26th 2016</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a className="aa-cartbox-img" href="#"><img src="content/img/woman-small-1.jpg" alt="img" /></a>
                                                                <div className="aa-cartbox-info">
                                                                    <h4><a href="#">Lorem ipsum dolor.</a></h4>
                                                                    <p>March 26th 2016</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a className="aa-cartbox-img" href="#"><img src="content/img/woman-small-2.jpg" alt="img" /></a>
                                                                <div className="aa-cartbox-info">
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

export default BlogDetail;