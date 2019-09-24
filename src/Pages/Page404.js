import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="aa-error">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="aa-error-area">
                                    <h2>404</h2>
                                    <span>Sorry! Page Not Found</span>
                                    <p>Sorry this content has been moved Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, amet perferendis, nemo facere excepturi quis.</p>
                                    <Link to={{ pathname: '/' }}> Go to Homepage</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Page404;