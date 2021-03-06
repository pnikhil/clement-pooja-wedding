import React from "react"
import CountDown from "reactjs-countdown"
import {WEDDING_DATE_TIME} from "../../constants/dates"
import "./style.css"

const CountdownWidget = () => {
    return (
        <div className="saveday">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="count-down-wrap">
                            <CountDown deadline={WEDDING_DATE_TIME} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountdownWidget
