import React, {useEffect} from "react"
import Us from "../../components/Us"
import SimpleSlider from "../../components/SimpleSlider"
import Story from "../../components/Story"
import Welcome from "../../components/Welcome"
import MaidAndMen from "../../components/MaidAndMen"
import Events from "../../components/Events"
import Header from "../../components/Header"
import MobileMenu from "../../components/MobileMenu"
import CountdownWidget from "../../components/CountdownWidget"
import {TITLE} from "../../constants/headings";


const Home = () => {
    return (
        useEffect(() => {
            document.title = TITLE
        }, []),

            <div>
                <Header/>
                <MobileMenu/>
                <SimpleSlider/>
                <CountdownWidget/>
                <Us/>
                <Welcome/>
                <Story/>
                <MaidAndMen/>
                <Events/>
            </div>
    )
}

export default Home
