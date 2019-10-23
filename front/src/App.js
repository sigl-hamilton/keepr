import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ObjectsList from "./Pages/ObjectsList.jsx";
import ObjectAdd from "./Pages/ObjectAdd.jsx";

import logo from "./images/logo-line.png";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/">
                            <img src={logo} width="126" height="30" alt="/" />
                        </a>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">All the objects</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/add" className="nav-link">Add an object</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={ObjectsList} />
                    <Route path="/add" component={ObjectAdd} />
                </div>
            </Router>
        );
    }
}

export default App;