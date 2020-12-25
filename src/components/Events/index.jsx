import React from "react"
import SectionTitle from "../SectionTitle"
import {WEDDING_DATE_FULL, PARTY_DATE_FULL} from "../../constants/dates"
import event1 from "../../images/events/fatima.png"
import event2 from "../../images/events/ballroom.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle, faLocationArrow, faCalendar, faCalendarAlt, faChurch, faHotel} from '@fortawesome/free-solid-svg-icons'

import "./style.css"

const Events = () => {
    return (
        <div id="events" className="event-section section-padding">
            <SectionTitle section={"When & Where"}/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="event-tabs">
                                <div className="col-md-12 col-12">
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={event1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h2>Wedding Mass</h2>
                                                    <span>
                                                        <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> {WEDDING_DATE_FULL}
                                                    </span>
                                                    <span>
                                                        <FontAwesomeIcon icon={faChurch}></FontAwesomeIcon> <strong>Our Lady of Fatima Church</strong>
                                                        <br/>
                                                        Jalahalli, Bangalore
                                                    </span>
                                                    <span className="buttons">
                                                    <div className="btn">
                                                        <a
                                                            href="http://www.fatimachurchbengaluru.com/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Info <FontAwesomeIcon icon={faInfoCircle}/>
                                                        </a>
                                                    </div>
                                                    <div className="btn">
                                                        <a
                                                            href="https://goo.gl/maps/1NxBNUDLNFLwPcNLA"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Location <FontAwesomeIcon icon={faLocationArrow}/>
                                                        </a>
                                                    </div>
                                                   </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text event-text-2">
                                                    <h2>Reception</h2>
                                                    <span>
                                                       <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {PARTY_DATE_FULL}
                                                    </span>
                                                    <span>
                                                        <FontAwesomeIcon icon={faHotel}></FontAwesomeIcon> <strong>The Ballroom @ Gokulam Grand Hotel</strong>
                                                        <br/>
                                                        Mathikere, Bangalore
                                                    </span>
                                                    <span className="buttons">
                                                    <div className="btn">
                                                        <a
                                                            href="https://www.gokulamgrandblr.com/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Info <FontAwesomeIcon icon={faInfoCircle}/>
                                                        </a>
                                                    </div>
                                                    <div className="btn">
                                                        <a
                                                            href="https://goo.gl/maps/MdwNUaPv7XMopino9"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Location <FontAwesomeIcon icon={faLocationArrow}/>
                                                        </a>
                                                    </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={event2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
