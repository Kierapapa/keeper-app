import React from 'react'

const Note = ({id, title, content}) => {
    return (
        <div className="note">
            <h1 value={id}>{title}</h1>
            <p>{content}</p>
        </div>
    )
}
export default Note;