import React, { Component } from 'react'
import Question from './Question'

export default class QuestionsList extends Component {
    render() {
        const {questions} = this.props;
        return (
            <div>
                <h1> Questions </h1>
                <Question questions={questions}/>
            </div>
        )
    }
}
