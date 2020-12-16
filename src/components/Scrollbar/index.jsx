import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

const ScrollBar = () => {
    return (
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smooth-scroll">
                    <li>
                        <AnchorLink href="#home">
                            {/*<i className="fa fa-arrow-up"></i>*/}
                            <FontAwesomeIcon icon={faArrowUp} />
                        </AnchorLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ScrollBar
