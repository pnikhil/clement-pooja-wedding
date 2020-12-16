import React from "react"
import Us from "../../components/Us"
import SimpleSlider from "../../components/SimpleSlider"
import Story from "../../components/Story"
import Welcome from "../../components/Welcome"
import WeddingParty from "../../components/WeddingParty"
import Events from "../../components/Events"
import Header from "../../components/Header"
import MobileMenu from "../../components/MobileMenu"
import CountdownWidget from "../../components/CountdownWidget"

const Home = () => {
    return (
        <div>
            <Header />
            <MobileMenu />
            <SimpleSlider />
            <CountdownWidget />
            <Us />
            <Welcome />
            <Story />
            <WeddingParty />
            <Events />
        </div>
    )
}

export default Home
