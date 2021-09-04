import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Add from '../components/Add';
import Delete from '../components/Delete';
import Image from '../images/default.png';
export default function PostDetails (props){
    let [answers, setAnswers] = useState([
        [{
            postID: 1,
            answer: "ella",
            }, {
            postID: 1,
            answer: "rahma",
            }, {
            postID: 2,
            answer: "red"
            }, {
            postID: 2,
            answer: "blue"
            }, {
            postID: 2,
            answer: "pink"    
            }, {
            postID: 2,
            answer: "black"
            }, {
            postID: 3,
            answer: "reading"
            }, {
            postID: 3,
            answer: "swimming"
            }, {
            postID: 3,
            answer: "playing"
            }
        ]
    ]
    );
        let {id} =useParams();
        console.log(id);
        console.log(answers);
        return (
            <div>
                <Navbar/>
                <Container>
                    <Row>
                        <Col xs lg="3">
                            <img src={Image} alt="default" height="150" width="150" />
                            <h3>Rania</h3>
                        </Col>
                        <Col xs lg="9" className="post-content">
                            <p>hfsfhhhghgfghfhjfkjgjhvhgcghdfsfgsfgsjgsfjjsesgfsdshshdfshh</p>
                            <br/>
                            <p className="answer-num">Answers: <span>5</span></p>
                            <hr/>
                        </Col>
                    </Row>
                    <Row className="delete">
                        <Col> <Delete>Delete post</Delete> </Col>
                        <Col> <Delete> Delete all answers</Delete> </Col>
                    </Row>
                    <Row className="answers">
                        <Col xs lg="10">
                            Answer1 cdcgjhdsgjhasckasgfvsabvm
                        </Col>
                        <Col xs lg="2" className="symbols">
                            <a href="#"><i className="fas fa-heart"></i> </a>
                            <a href="#"><i className="fas fa-trash-alt"></i> </a>
                            <a href="#"><i className="far fa-edit"></i> </a>
                        </Col>
                    </Row>
                    <Row className="answers">
                        <Col xs lg="10">
                            Answer1 cdcgjhdsgjhasckasgfvsabvm
                        </Col>
                        <Col xs lg="2" className="symbols">
                            <a href="#"><i className="fas fa-heart"></i> </a>
                            <a href="#"> <i className="fas fa-trash-alt"></i> </a>
                            <a href="#"> <i className="far fa-edit"></i> </a>
                        </Col>
                    </Row>
                    <Row className="answers">
                        <Col xs lg="10">
                            Answer1 cdcgjhdsgjhasckasgfvsabvm
                        </Col>
                        <Col xs lg="2" className="symbols">
                            <a href="#"><i className="fas fa-heart"></i> </a>
                            <a href="#"> <i className="fas fa-trash-alt"></i> </a>
                            <a href="#"> <i className="far fa-edit"></i> </a>
                        </Col>
                    </Row>
                    <Row className="add-answer">
                        <Add>Add Answer</Add>
                    </Row>
                </Container>
                
            </div>
        )
    }
