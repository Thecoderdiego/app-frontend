import './App.css'
import {useEffect, useState} from 'react'
import { Note } from './components/Note'
import { getNotes } from './services/getNotes'

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true,
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false,
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true,
//   },
// ]

function App() {
  const [allNotes, setAllNotes] = useState([])
  const [note, setNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const handleChangeNote = (e) => {
    setNote(e.target.value)
  }

  const handleSubmitAddNote = (e) => {
    e.preventDefault()
    const newNote = {
      id: allNotes.length + 1,
      content: note,
      date: new Date().toISOString,
      important: true
    }

    setAllNotes([...allNotes, newNote])
    setNote('')
  }

  const notesToShow = showAll ? allNotes : allNotes.filter(note => note.important === true)

  useEffect(() => {
    setTimeout(() => {
      getNotes().then(data => setAllNotes(data))
    }, 3000);
  },[])


  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <form onSubmit={handleSubmitAddNote}>
        <input type="text" placeholder='your new note...' value={note} onChange={handleChangeNote}/>
        <button>Save</button>
      </form>


      <ul>
        {
          notesToShow.map(note => (
            <Note key={note.id} content={note.content}/>
          ))
        }
      </ul>
    </div>
  )
}

export default App
