import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class Delete extends Component {
    render() {
        return (
            <div>
                <Button variant="danger"> {this.props.children} </Button>
            </div>
        )
    }
}
