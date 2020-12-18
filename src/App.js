import React, {useEffect} from "react"
import {HashRouter, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/index"
import Footer from "./components/Footer/index"
import Scrollbar from "./components/Scrollbar"
import "./App.css"
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import SimpleSlider from "./components/SimpleSlider";
import CountdownWidget from "./components/CountdownWidget";
import Us from "./components/Us";
import Welcome from "./components/Welcome";
import Story from "./components/Story";
import MaidAndMen from "./components/MaidAndMen";
import Events from "./components/Events";
import {TITLE} from "./constants/headings"

const App = () => {



  return (
      <div className="App">
          <HashRouter>
              <Router>
                  <Home />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/home" component={Home} />
                      <Route component={() => (<div>404 Not found </div>)} />
                  </Switch>
                  <Footer />
                  <Scrollbar />
              </Router>
          </HashRouter>
      </div>
  )
}

export default App
