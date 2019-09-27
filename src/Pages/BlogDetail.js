import React, { Component } from 'react';

class BlogDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentBlog : props.location.state.blog
        }
    }

    filterByCategory = (categoryName) => {
        console.log(categoryName.trim());
    }

    filterByTag = (tagName) => {
        console.log(tagName.trim());
    }

    openBlogDetail = (blog) => {
        console.log(blog);
        this.setState = {
            currentBlog : blog
        }
    }

    render() {

        const { tagsCollection, recentblogs, categories } = this.props.location.state
        
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
                                                    <h2><a href="#">{this.state.currentBlog.title}</a></h2>
                                                    <div className="aa-article-bottom">
                                                        <div className="aa-post-author">
                                                            Posted By <a href="javascript:void(0)">{this.state.currentBlog.postedBy}</a>
                                                        </div>
                                                        <div className="aa-post-date">
                                                            {new Date(this.state.currentBlog.createDate).toLocaleString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
                                                        </div>
                                                    </div>
                                                    <figure className="aa-blog-img">
                                                        <a href="#"><img src={"content/img/fashion/1.jpg"} alt="fashion img" /></a>
                                                    </figure>
                                                    <p>{this.state.currentBlog.decription}</p>
                                                    <div className="blog-single-bottom">
                                                        <div className="row">
                                                            <div className="col-md-8 col-sm-6 col-xs-12">
                                                                <div className="blog-single-tag">
                                                                    <span>Tags:</span>
                                                                    <a href="#">{this.state.currentBlog.tags}</a>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6 col-xs-12">
                                                                <div className="blog-single-social">
                                                                    <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                                                    <a href="https://twitter.com/login"><i className="fa fa-twitter"></i></a>
                                                                    <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                                                                    <a href="https://www.gmail.com"><i className="fa fa-google-plus"></i></a>
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
                                                    <li onClick={() => this.filterByCategory('All')} key={0}><a href="javascript:void(0)">All Category</a></li>
                                                        {[...new Set(categories)].map((item, index) => <li onClick={() => this.filterByCategory(item)} key={index + 1}><a href="javascript:void(0)">{item}</a></li>)}
                                                    </ul>
                                                </div>
                                                <div className="aa-sidebar-widget">
                                                    <h3>Tags</h3>
                                                    <div className="tag-cloud">
                                                        <a onClick={() => this.filterByTag('All')} href="javascript:void(0)">All</a>
                                                        {[...new Set(tagsCollection)].map((item, index) => <a onClick={() => this.filterByTag(item)} key={index + 1} href="javascript:void(0)">{item}</a>)}
                                                    </div>
                                                </div>
                                                <div className="aa-sidebar-widget">
                                                    <h3>Recent Post</h3>
                                                    <div className="aa-recently-views">
                                                        <ul>
                                                            {recentblogs.map((data, index) => {
                                                                return (
                                                                    <li key={index} onClick={() => this.openBlogDetail(data)}>
                                                                        <a className="aa-cartbox-img" href="javascript:void(0)"><img src={"content/img/" + data.imageName} alt="img" /></a>
                                                                        <div className="aa-cartbox-info">
                                                                            <h4><a href="javascript:void(0)">{data.title}</a></h4>
                                                                            <p>{new Date(data.createDate).toLocaleString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                                                                        </div>
                                                                    </li>)
                                                            })}
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