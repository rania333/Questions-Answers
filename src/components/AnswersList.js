import React, { Component , useState} from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { Col, Container, Form, Navbar, Row, Button } from 'react-bootstrap';
import Answer from './Answer';
import Add from './Add';

export default function AnswersList (props){
    let {id} =useParams(); //get param value
    
    return (
        <div>
            {props.answerss.map((answer) => (
                <Answer key={answer.id} answer={answer.answer} 
                handleDeleteAnswer={props.handleDeleteAnswer} answerId={answer.id} 
                answers={props.answerss}/>
            ))}
            <Row className="add-answer">
                
                <Form onSubmit={props.handleSubmitAnswer}>
                    <Row className="align-items-center">
                        <Col xs lg="10">
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Answer"
                                onChange={props.handleChangeAnswer}
                                value={props.item}
                            />
                        </Col>
                        <Col xs lg="auto">
                            <Button type="submit" className="mb-2"> Submit </Button>
                        </Col>
                    </Row>
                </Form>
        </Row>
        </div>
    )
}
