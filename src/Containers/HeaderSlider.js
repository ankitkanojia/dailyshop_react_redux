import React, { Component } from 'react';
import { fetchSliderDetails } from './../Redux/Actions/StaticItems';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderSlider extends Component {

    static propTypes = {
        fetchSliderDetails: PropTypes.func.isRequired,
        sliderdetails: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.fetchSliderDetails();
        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.async = true;
        script.src = "Content/js/sequence-theme.modern-slide-in.js";
        document.body.appendChild(script);
    }

    render() {
        return (<section id="aa-slider">
            <div className="aa-slider-area">
                <div id="sequence" className="seq">
                    <div className="seq-screen">
                        <ul className="seq-canvas">
                            {
                                this.props.sliderdetails.map(p => {
                                    return (<li key={p.id}>
                                        <div className="seq-model">
                                            <img data-seq src={p.imageUrl} alt="Men slide img" />
                                        </div>
                                        <div className="seq-title">
                                            <span data-seq>{p.offer}</span>
                                            <h2 data-seq>{p.type}</h2>
                                            <p data-seq>{p.decription}</p>
                                            <a data-seq href="javascript:void(0)" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
                                        </div>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                    <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
                        <a type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left"></span></a>
                        <a type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right"></span></a>
                    </fieldset>
                </div>
            </div>
        </section>
        )
    }
}

const mapStateToProps = state => ({
    sliderdetails: state.staticitems.sliderdetails,
});

export default connect(mapStateToProps, { fetchSliderDetails })(HeaderSlider);