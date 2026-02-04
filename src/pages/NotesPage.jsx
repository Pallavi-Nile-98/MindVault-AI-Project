import { useState } from 'react'
import NoteList from '../components/NoteList'
import NoteForm from '../components/NoteForm'
import AIChat from '../components/AIChat'

function NotesPage() {
  const [selectedNote, setSelectedNote] = useState(null)
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [showAIChat, setShowAIChat] = useState(false)

  // TODO: Replace with actual notes from Firestore
  const [notes, setNotes] = useState([])

  const handleCreateNote = () => {
    setSelectedNote(null)
    setShowNoteForm(true)
  }

  const handleEditNote = (note) => {
    setSelectedNote(note)
    setShowNoteForm(true)
  }

  const handleDeleteNote = async (noteId) => {
    // TODO: Implement Firebase delete
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== noteId))
    }
  }

  const handleSaveNote = async (noteData) => {
    // TODO: Implement Firebase save
    if (selectedNote) {
      // Update existing note
      setNotes(notes.map(note => 
        note.id === selectedNote.id ? { ...note, ...noteData } : note
      ))
    } else {
      // Create new note
      const newNote = {
        id: Date.now().toString(),
        ...noteData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setNotes([...notes, newNote])
    }
    setShowNoteForm(false)
    setSelectedNote(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
          <p className="text-gray-600 mt-1">Manage your notes and ask questions with AI</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowAIChat(!showAIChat)}
            className="btn-secondary"
          >
            {showAIChat ? 'Hide AI' : 'Ask AI'}
          </button>
          <button
            onClick={handleCreateNote}
            className="btn-primary"
          >
            + New Note
          </button>
        </div>
      </div>

      {/* AI Chat Panel */}
      {showAIChat && (
        <div className="mb-6">
          <AIChat />
        </div>
      )}

      {/* Note Form Modal */}
      {showNoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <NoteForm
              note={selectedNote}
              onSave={handleSaveNote}
              onCancel={() => {
                setShowNoteForm(false)
                setSelectedNote(null)
              }}
            />
          </div>
        </div>
      )}

      {/* Notes Grid */}
      <NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </div>
  )
}

export default NotesPage
