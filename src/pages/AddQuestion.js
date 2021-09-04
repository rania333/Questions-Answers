import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Add from '../components/Add';

export default class AddQuestion extends Component {
    render() {
        const {handleChange, handleSubmit, item } = this.props;
        return (
            <div>
                <Navbar />
                <Container className="container">
                    <Add handleChange={handleChange} handleSubmit={handleSubmit} item={item}
                    > Add Question </Add>
                </Container>
            </div>
        )
    }
}
