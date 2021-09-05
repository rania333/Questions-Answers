import React, { Component } from 'react'
import Question from './Question'

export default class QuestionsList extends Component {
    render() {
        const {questions} = this.props;
        return (
            <div>
                <h1> Questions </h1>
                {/* <div className="add">
                    <Add handleChange={handleChange} handleSubmit={handleSubmit}
                    item={item} questions={questions} />
                </div> */}
                <Question questions={questions}/>
            </div>
        )
    }
}
