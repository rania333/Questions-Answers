import React, { Component } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

export default class Add extends Component {
    render() {
        const {handleChange, handleSubmit, item } = this.props;
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs lg="10">
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder={this.props.children}
                                onChange={handleChange}
                                value={item}
                            />
                        </Col>
                        <Col xs lg="auto">
                            <Button type="submit" className="mb-2"> Submit </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
