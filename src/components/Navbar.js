import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap' ;
export default class NavbarComponent extends Component {
    handleClick(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="bg-nav">
                <Navbar bg="" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Q & A</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Questions</Nav.Link>
                            <Nav.Link href="/add">Add Question</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
