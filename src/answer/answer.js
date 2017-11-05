import React from 'react'

function Answer(props) {
    return (
        <div className="answer">
            <button onClick={props.onSelect}>{props.text}</button>
        </div>
    )
}

export default Answer