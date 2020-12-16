import React, {Component} from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {NAME_SHORT} from "../../constants/headings"
import "./style.css"

class MobileMenu extends Component {
    state = {
        isMenuShow: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow,
        })
    }

    render() {
        const {isMenuShow} = this.state

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
                    <div className="logo2">
                        <h2>
                            <AnchorLink href="#home" onClick={this.menuHandler}>
                                {NAME_SHORT}
                            </AnchorLink>
                        </h2>
                    </div>
                    <ul className="responsive-menu">
                        <li>
                            <AnchorLink href="#home" onClick={this.menuHandler}>
                                Home
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#us" onClick={this.menuHandler}>
                                Us
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#story"
                                onClick={this.menuHandler}
                            >
                                Our Story
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#wedding-party"
                                onClick={this.menuHandler}
                            >
                                Wedding Party
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#events"
                                onClick={this.menuHandler}
                            >
                                Events
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#gallery"
                                onClick={this.menuHandler}
                            >
                                Gallery
                            </AnchorLink>
                        </li>
                    </ul>
                </div>

                <div className="show-menu" onClick={this.menuHandler}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default MobileMenu
