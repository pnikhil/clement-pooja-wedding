import React from "react"
import SectionTitle from "../SectionTitle"
import bride from "../../images/couple/pooja.jpg"
import brideFunny from "../../images/couple/pooja-funny.jpg"
import groom from "../../images/couple/clement.jpg"
import groomFunny from "../../images/couple/clement-funny.jpg"
import "./style.css"

const Us = () => {
    return (
        <div id="us" className="about-wrap">
            <div className="couple-area section-padding">
                <SectionTitle section={"About Us"} />
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img
                                            src={bride}
                                            alt="Bride Pooja Vincia"
                                            onMouseOver={e =>
                                                (e.currentTarget.src = brideFunny)
                                            }
                                            onMouseOut={e =>
                                                (e.currentTarget.src = bride)
                                            }
                                        />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Pooja Vincia D'Souza</h3>
                                            <p>She is a social scientist by profession and completed her Masters in Urban Policy and Governance from the Tata Institute of Social Sciences, Mumbai in 2017. She currently works for the United Nations Development Programme and is engaged in implementing projects that aim at restoring livelihoods affected by COVID-19 in India. Her favorite thing to do is to take strolls in the bustling streets of small towns in India and explore local food.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img
                                            src={groom}
                                            alt="Groom Clement Almeida"
                                            onMouseOver={e =>
                                                (e.currentTarget.src = groomFunny)
                                            }
                                            onMouseOut={e =>
                                                (e.currentTarget.src = groom)
                                            }
                                        />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Clement Almeida</h3>
                                            <p>
                                                He completed his BE in Information Science in the year 2015, with a First Class‐Distinction and subsequently joined the armed forces. He was commissioned as a Lieutenant in Sept. 2016 and is currently serving his tenure in Kashmir. An avid sports enthusiast, basketball is his favorite sport. He is also a prolific speaker and orator, and loves traveling.
                                            </p>
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

export default Us
