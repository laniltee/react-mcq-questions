import React from 'react'

function Prompt(props) {
    return (
        <div className="prompt">
            <h2 className="messageH2">You have completed all the questions</h2>
            <button onClick={props.onClick}>Take Again</button>
        </div>
    )
}

export default Prompt