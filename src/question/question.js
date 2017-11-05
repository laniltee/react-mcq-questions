import React from 'react'

function Question(props) {
    return (
        <div className="question">
            <div className="questionHeader">
                <h3>{props.text}</h3>
            </div>
            <div className="questionContainer">
                {props.answers}
            </div>
        </div>
    )
}

export default Question