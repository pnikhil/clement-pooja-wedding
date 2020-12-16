import React, {Component} from "react"
import Slider from "react-slick"
import {Animated} from "react-animated-css"
import {WEDDING_DATE} from "../../constants/headings"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./style.css"

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true,
            arrows: false
        };
        return (
            <Slider {...settings}>
                <div id="home" className="item1">
                    <div className="container">
                        <div className="slide-content">
                            <div className="slide-title">
                                <h2>We're Getting Married!</h2>
                            </div>
                            <div className="slide-text">
                                <p>{WEDDING_DATE}</p>
                            </div>
                            <Animated>
                                <div className="animated-circle"></div>
                            </Animated>
                        </div>
                    </div>
                </div>
                <div className="item2">
                    <div className="container">
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>We're Getting Married!</h2>
                                </div>
                                <div className="slide-text">
                                    <p>{WEDDING_DATE}</p>
                                </div>
                                <Animated>
                                    <div className="animated-circle"></div>
                                </Animated>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default SimpleSlider
