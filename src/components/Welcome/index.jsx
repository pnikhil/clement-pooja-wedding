import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Our Big Day</h2>
                            <p>
                                While the two of us are not really fans of big celebrations with large audiences, however this is a day worth cherishing and sharing our joy with our loved ones and close friends. The nervous jitters have started to befall us both, but at the outset we are ready to take our vows and become one in the sacrament of holy matrimony.
                            </p>
                            <div className="btn">
                                <AnchorLink href="#events"><FontAwesomeIcon icon={faCalendarAlt} /> Events</AnchorLink>
                            </div>
                            )
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
