import React, { Component } from 'react';
import {Navbar, Container} from 'react-bootstrap' ;
import { NavLink } from 'react-router-dom';
export default class NavbarComponent extends Component {
    render() {
        return (
            <div className="bg-nav">
                <Navbar bg="" variant="dark">
                    <Container className="me-auto container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="navbar-brand disabled" aria-current="page" to="/">
                                    Q & A</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Questions</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add">Add Question</NavLink>
                            </li>
                        </ul>
                    </Container>
                </Navbar> 
            </div>
        )
    }
}
