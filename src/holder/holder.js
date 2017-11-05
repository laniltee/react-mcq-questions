import React from 'react'

import Question from '../question/question'
import Answer from '../answer/answer'
import Prompt from '../prompt/prompt'
import data from '../data/questions'

import '../index.css'

const INTIAL_STATE = {
    activeQuestion: 0,
    totalMarks: 0,
    completed: false
}

class Holder extends React.Component {
    constructor(props) {
        super(props)
        this.state = INTIAL_STATE

        this.selectAnswer = this.selectAnswer.bind(this)
        this.takeAgain = this.takeAgain.bind(this)
    }

    selectAnswer(answerIndex) {
        let activeQuestionIndex = this.state.activeQuestion
        let questionsCount = data.length
        if (answerIndex === data[activeQuestionIndex].correctAnswerIndex && !this.state.completed) {
            this.setState({ totalMarks: this.state.totalMarks + 1 })
        }
        if (activeQuestionIndex !== questionsCount - 1) {
            this.setState({ activeQuestion: this.state.activeQuestion + 1 })
        } else {
            this.setState({ completed: true })
        }
    }

    createAnswers(questionIndex) {
        const answers = data[questionIndex].answers
        var answerButtons = answers.map((text, index) => {
            return <Answer key={index} text={text} onSelect={() => this.selectAnswer(index)} />
        })
        return answerButtons
    }

    takeAgain() {
        this.setState(INTIAL_STATE)
    }

    getPreviousQuestion(){

    }

    render() {
        const activeQuestionText = data[this.state.activeQuestion].text
        const activeQuestionNumber = this.state.activeQuestion + 1
        const activeQuestionIndex = this.state.activeQuestion
        const questionsCount = data.length
        return (
            <div className="holder">
                <div className="holderHeader">
                    <h1>React Moodle</h1>
                    <h2>Question {activeQuestionNumber} of {questionsCount}</h2>
                    <h2>Marks <span className="messageH2">{this.state.totalMarks}</span> out of {questionsCount}</h2>
                    {
                        this.state.completed ?
                            <Prompt onClick={this.takeAgain} /> : null
                    }
                </div>
                <div className="holderContainer">
                    <Question text={activeQuestionText} answers={this.createAnswers(activeQuestionIndex)} />
                </div>
                <h3>Do you want to take previous answer again ? </h3>
                <button onClick={this.getPreviousQuestion}>Take Previous Question</button>
            </div>
        )
    }
}

export default Holder