import React/*, { useState }*/ from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ObjectsListPage from "./Pages/ObjectsListPage.jsx";
import ObjectAddPage from "./Pages/ObjectAddPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

import logo from "./images/logo-line.png";

export default function App(props){
    /*
    const [authenticatedUser, authenticateUser] = useState(null);
    let appProps = {
        authenticatedUser: authenticatedUser,
        authenticateUser: authenticateUser
    };
    */

    console.log("load");

    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
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
                <Route path="/" exact render={(props) => <ObjectsListPage {...props} appProps={"appProps"} />} />
                <Route path="/add" exact render={(props) => <ObjectAddPage {...props} appProps={"appProps"} />} />
                <Route path="/login" exact render={(props) => <LoginPage {...props} appProps={"appProps"} />} />
            </div>
        </Router>
    );
}