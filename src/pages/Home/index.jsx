import React from "react"
import Us from "../../components/Us"
import SimpleSlider from "../../components/SimpleSlider"
import Story from "../../components/Story"
import Welcome from "../../components/Welcome"
import WeddingParty from "../../components/WeddingParty"
import Events from "../../components/Events"
import Gallery from "../../components/Gallery"
import Registry from "../../components/Registry"
import Header from "../../components/Header"
import MobileMenu from "../../components/MobileMenu"
import CountdownWidget from "../../components/CountdownWidget"
import SimpleReactLightbox from "simple-react-lightbox"

const Home = () => {
    return (
        <div>
            <Header />
            <MobileMenu />
            <SimpleSlider />
            <CountDownWidget />
            <Us />
            <Welcome />
            <Story />
            <WeddingParty />
            <Events />
            <SimpleReactLightbox>
                <Gallery />
            </SimpleReactLightbox>
            <Registry />
        </div>
    )
}

export default Home