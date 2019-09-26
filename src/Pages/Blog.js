import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Blog extends Component {
    static propTypes = {
        blogs: PropTypes.array.isRequired
    }

    state =  {
        blogs : this.props.blogs,
        allblogs : this.props.blogs,
        categories : [],
        tagsCollection : []
    }

    componentDidMount(){
        let tagsCollection = [] ;

        this.state.blogs.filter(obj => {
            const splitString = obj.tags.split(",");
            splitString.filter(innerObj => {
                 tagsCollection.push(innerObj);
            });
        });

        this.setState({
            categories :  this.state.blogs.map(obj => obj.Category),
            tagsCollection : tagsCollection
        });
    }

    filterByCategory = (categoryName) => {
        if (categoryName === "All") {
            this.setState({
                blogs: this.state.allblogs
            });
        } else {
            const filteredBlogs = this.state.allblogs.filter(m => m.Category.indexOf(categoryName) !== -1);
            this.setState({
                blogs: filteredBlogs
            });
        }
    }

    render() {
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
                                                    {this.state.blogs.map(p => {
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
                                                        <li onClick={() => this.filterByCategory('All')} key={0}><a href="javascript:void(0)">All Category</a></li>
                                                        {[...new Set(this.state.categories)].map((item, index) => <li onClick={() => this.filterByCategory(item)} key={index + 1}><a href="javascript:void(0)">{item}</a></li>)}
                                                    </ul>
                                                </div>
                                                <div class="aa-sidebar-widget">
                                                    <h3>Tags</h3>
                                                    <div class="tag-cloud">
                                                        {[...new Set(this.state.tagsCollection)].map((item, index) => <a key={index} href="#">{item}</a>)}
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