import React from "react"
import SectionTitle from "../SectionTitle"
import maidOfHonor from "../../images/people/bridesmaid.jpg"
import bestMan from "../../images/people/andrew.jpg"

import "./style.css"

const MaidAndMen = () => {
    return (
        <section id="bridesmaid-and-groomsman">
            <div className="maid-and-men-area section-padding">
                <SectionTitle section={"Bridesmaid & Groomsman"} />
                <div className="container">
                    <div className="maid-and-men-area-menu">
                        <div className="Groomsman-wrap">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="maid-and-men-wrap">
                                        <div className="maid-and-men-img">
                                            <img
                                                src={maidOfHonor}
                                                alt="Matron of Honor"
                                            />
                                        </div>
                                        <div className="maid-and-men-content">
                                            <h3>Andrea D'Souza</h3>
                                            <strong>
                                                Bridesmaid
                                            </strong>
                                            <p>
                                                She works at SAP Labs in Bangalore. She is a computer science engineer from MS Ramaiah College, Bangalore. She loves dancing and exploring new places.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6 grid mx-auto">
                                    <div className="maid-and-men-wrap maid-and-men-wrap-2 mx-auto">
                                        <div className="maid-and-men-img">
                                            <img
                                                src={bestMan}
                                                alt="Best Man"
                                            />
                                        </div>
                                        <div className="maid-and-men-content">
                                            <h3>Andrew Arthur Gonsalves</h3>
                                            <strong>Best Man</strong>
                                            <p>He is is studying his Engineering in Electronics and Communication from Alva's College, Mangalore. He is a budding rapper, loves music and has his own YouTube Channel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MaidAndMen
