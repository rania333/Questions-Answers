import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div className="not-found">
                <Container>
                    <Row>
                        <h3>404</h3>
                    </Row>
                    <Row>
                        <h2> Oops! Page Not Found </h2>
                    </Row>
                    <Row>
                        <p>Sorry, but the page you're looking for is not found. please, make sure you have
                            typed the current URL!
                        </p>
                    </Row>
                    <Row>
                        <Link to="/"> Back to home </Link>
                    </Row>
                </Container>
            </div>
        )
    }
}
