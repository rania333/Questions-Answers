import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'

export default function Answer(props) {
    // onClick={props.handleDeleteAnswer(props.answerId)}
    let {id} =useParams(); //get param value
    console.log(props.answers);
        return (
            <div>
                <Row className="answers">
                        <Col xs lg="10">
                            {props.answer}
                        </Col>
                        <Col xs lg="2" className="symbols">
                            <a href="#"><i className="fas fa-heart"></i> </a>
                            <NavLink to={"/q/"+id} onClick={() => props.handleDeleteAnswer(props.answerId)}>
                                <i className="fas fa-trash-alt"></i> </NavLink>
                            <a href="#"><i className="far fa-edit"></i> </a>
                        </Col>
                    </Row>
            </div>
        )
    }
