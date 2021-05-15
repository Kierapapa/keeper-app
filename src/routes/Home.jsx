import React from 'react'
import Note from '../components/Note'
import notes from '../notes'

const Home = () => {
    return (
        <div>
            {notes.map(
                note => <Note 
                key={note.key}
                id={note.key}
                title={note.title}
                content={note.content}
                />
            )}
        </div>
    )
}

export default Home
