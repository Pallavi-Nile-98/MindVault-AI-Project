import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NotesList from '../components/NotesList';
import NoteEditor from '../components/NoteEditor';
import AIChat from '../components/AIChat';

function Dashboard() {
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Project Ideas',
      content: 'Build a RAG-based notes app using OpenAI embeddings...',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Learning Goals',
      content: 'Master Firebase Cloud Functions and Firestore security rules...',
      createdAt: new Date('2024-01-14'),
      updatedAt: new Date('2024-01-14')
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleCreateNote = () => {
    setSelectedNote(null);
    setShowEditor(true);
    setShowAIChat(false);
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setShowEditor(true);
    setShowAIChat(false);
  };

  const handleSaveNote = (noteData) => {
    if (selectedNote) {
      setNotes(notes.map(note => 
        note.id === selectedNote.id 
          ? { ...note, ...noteData, updatedAt: new Date() }
          : note
      ));
    } else {
      const newNote = {
        id: Date.now().toString(),
        ...noteData,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setNotes([newNote, ...notes]);
    }
    setShowEditor(false);
    setSelectedNote(null);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setShowEditor(false);
      setSelectedNote(null);
    }
  };

  const handleOpenAIChat = () => {
    setShowAIChat(true);
    setShowEditor(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={handleLogout} onOpenAIChat={handleOpenAIChat} />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <NotesList
              notes={notes}
              selectedNote={selectedNote}
              onSelectNote={handleSelectNote}
              onCreateNote={handleCreateNote}
              onDeleteNote={handleDeleteNote}
            />
          </div>

          <div className="lg:col-span-2">
            {showAIChat ? (
              <AIChat notes={notes} />
            ) : showEditor ? (
              <NoteEditor
                note={selectedNote}
                onSave={handleSaveNote}
                onCancel={() => {
                  setShowEditor(false);
                  setSelectedNote(null);
                }}
              />
            ) : (
              <div className="card text-center py-20">
                <div className="text-gray-400 mb-4">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">No Note Selected</h3>
                <p className="text-gray-500">Select a note from the list or create a new one</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;