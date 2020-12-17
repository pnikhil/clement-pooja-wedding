import React from "react"
import {HashRouter, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/index"
import Footer from "./components/Footer/index"
import Scrollbar from "./components/Scrollbar"
import "./App.css"

const App = () => {
  return (
      <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
        <Router>
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
