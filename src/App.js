import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/index"
import Footer from "./components/Footer/index"
import Scrollbar from "./components/Scrollbar"
import "./App.css"

const App = () => {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </Switch>
          <Footer />
          <Scrollbar />
        </Router>
      </div>
  )
}

export default App