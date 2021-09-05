import React, {useState, useEffect} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import { Col, Container, Form, Navbar, Row, Button } from 'react-bootstrap';
import Add from '../components/Add';
import Delete from '../components/Delete';
import Image from '../images/default.png';
import AnswersList from '../components/AnswersList';
export default function PostDetails (props){
    let {questions, handleDelete} = props;
    let {id} =useParams(); //get param value
    let getOneQuestion = (id) => {
        let question = questions.filter(q => q.id == id);
        return question;
    }
    let question = getOneQuestion(id);
    //answers
    let [answers, setAnswers] = useState(
        [{
            id:1,
            postID: 1,
            answer: "ella",
            }, {
            id:2,
            postID: 1,
            answer: "rahma",
            }, {
            id:3,
            postID: 2,
            answer: "red"
            }, {
            id:4,
            postID: 2,
            answer: "blue"
            }, {
            id:5,
            postID: 2,
            answer: "pink"    
            }, {
            id:6,
            postID: 2,
            answer: "black"
            }, {
            id:7,
            postID: 3,
            answer: "reading"
            }, {
            id:8,
            postID: 3,
            answer: "swimming"
            }, {
            id:9,
            postID: 3,
            answer: "playing"
            }]
    );
    let [item , setItem] = useState("");
    let handleChangeAnswer = (e) => {
        setItem(e.target.value);
    }
    let handleSubmitAnswer = (e) => {
        e.preventDefault();
        let newItem = {
            id: answers.length + 1,
            postID: id ,
            answer: item,
        }
        let updatedItem = [...answers, newItem];
        setAnswers([...updatedItem]);
        setItem("");
        console.log("hi",answers);
    }
    let getAnswersForPost = (postId) => {
        let answerr = answers.filter((answer) => answer.postID == postId);
        return answerr;
    }
    let NumOfAnswers = getAnswersForPost(id).length;//
    let handleDeleteAnswer = (id) => {
        const filteredAnswers = answers.filter(a => a.id != id);
        setAnswers(filteredAnswers)
        return (<Redirect to="/"/>)
    }
    let DeleteAllAnswer = (postId, e) => {
        e.preventDefault()
        let deletedAnswer = answers.filter((a) => a.postID != postId);
        setAnswers(deletedAnswer);
    }
        return (
            <div>
                <Navbar/>
                <Container>
                    <Row>
                        <Col xs lg="3">
                            <img src={Image} alt="default" height="150" width="150" />
                            <h3>{(!question[0]) ? <Redirect to="/"/>:  question[0].name }</h3>
                        </Col>
                        <Col xs lg="9" className="post-content">
                            <p>{(!question[0]) ? <Redirect to="/"/>:  question[0].title }</p>
                            <br/>
                            <p className="answer-num">Answers: <span>{NumOfAnswers}</span></p>
                            <hr/>
                        </Col>
                    </Row>
                    <Row className="delete">
                        <Col> <Delete handleDelete={handleDelete}>Delete Question</Delete> </Col>
                        <Col> 
                        <Button variant="danger" onClick={(e) => DeleteAllAnswer(id, e)}> 
                            Delete All Answers </Button>
                        </Col>
                    </Row>
                    <AnswersList answerss={getAnswersForPost(id)} 
                    handleSubmitAnswer={handleSubmitAnswer} handleChangeAnswer={handleChangeAnswer}
                    item={item} handleDeleteAnswer={handleDeleteAnswer}/>
                </Container>
                
            </div>
        )
    }
