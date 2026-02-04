# MindVault AI

A production-grade personal AI-powered notes application where users can store notes and retrieve or ask questions about them using natural language. The AI uses only the user's stored notes to answer questions (RAG-based system).

## 🎯 Project Overview

MindVault AI is a full-stack web application that combines:
- **Secure note storage** with Firebase Firestore
- **AI-powered search and Q&A** using OpenAI embeddings and chat completions
- **User authentication** with Firebase Auth
- **Clean, modern UI** built with React and Tailwind CSS

## 🏗️ Architecture

```
Frontend (React + Vite on Vercel)
    ↓
Serverless API (Firebase Cloud Functions)
    ↓
Firestore Database
    ↓
OpenAI API (Embeddings + Chat Completions)
```

### Tech Stack

- **Frontend**: React 18 + Vite
- **Frontend Hosting**: Vercel
- **Backend**: Firebase Cloud Functions (Node.js)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (email/password)
- **AI**: OpenAI API (embeddings + chat completions)
- **Styling**: Tailwind CSS

## 📁 Project Structure

```
MindVault-AI-Project/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.jsx       # Main layout with navigation
│   │   ├── ProtectedRoute.jsx # Route protection component
│   │   ├── NoteList.jsx    # List of notes
│   │   ├── NoteCard.jsx    # Individual note card
│   │   ├── NoteForm.jsx    # Create/Edit note form
│   │   └── AIChat.jsx      # AI chat interface
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx    # Landing page
│   │   ├── LoginPage.jsx   # Login page
│   │   ├── SignupPage.jsx  # Signup page
│   │   └── NotesPage.jsx   # Main notes page
│   ├── contexts/            # React contexts
│   │   └── AuthContext.jsx # Authentication context
│   ├── config/              # Configuration files
│   │   └── firebase.js     # Firebase initialization
│   ├── hooks/              # Custom React hooks (to be added)
│   ├── utils/              # Utility functions (to be added)
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── functions/              # Firebase Cloud Functions (to be added)
├── public/                 # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
├── SETUP.md                # Detailed setup instructions
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account (for backend setup in next phase)
- OpenAI API key (for AI features in next phase)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MindVault-AI-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase** (See [SETUP.md](./SETUP.md) for detailed instructions)
   - Create a Firebase project
   - Enable Email/Password authentication
   - Create a `.env` file with your Firebase config

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to Vercel.

## 📋 Current Phase Status

### ✅ Phase 1: Frontend Scaffolding (COMPLETED)

- [x] React + Vite project setup
- [x] Tailwind CSS configuration
- [x] Basic UI components
- [x] Routing setup
- [x] Landing page
- [x] Authentication pages (UI only)
- [x] Notes management UI
- [x] AI chat interface (UI only)

### ✅ Phase 2: Firebase Authentication (COMPLETED)

- [x] Firebase SDK integration
- [x] Firebase configuration setup
- [x] AuthContext for state management
- [x] Login functionality
- [x] Signup functionality
- [x] Logout functionality
- [x] Protected routes
- [x] Authentication state persistence
- [x] Error handling for auth operations

### 🔄 Next Phases (To Be Implemented)

- **Phase 3**: Firestore database setup and CRUD operations
- **Phase 4**: Firebase Cloud Functions setup
- **Phase 5**: OpenAI embeddings generation and storage
- **Phase 6**: RAG implementation with similarity search
- **Phase 7**: AI chat completions integration
- **Phase 8**: Security rules and deployment

## 🎨 Features

### Implemented

- ✅ User signup/login with Firebase Auth
- ✅ Authentication state management
- ✅ Protected routes
- ✅ Notes list view (UI)
- ✅ Create/edit note form (UI)
- ✅ Delete note functionality (UI)
- ✅ AI chat interface (UI)
- ✅ Responsive design

### To Be Implemented

- 🔄 Firestore database operations
- 🔄 Note embeddings generation
- 🔄 AI-powered search and Q&A
- 🔄 Note summarization
- 🔄 Auto-tagging (optional)

## 🔒 Security Considerations

- OpenAI API key will be stored in Firebase Cloud Functions environment variables (never exposed to frontend)
- Firestore security rules will restrict data access per user
- All AI processing happens server-side

## 📝 Development Notes

- Firebase Authentication is fully integrated
- Notes are stored in local state (will be migrated to Firestore in Phase 3)
- AI chat responses are placeholders (will connect to Firebase Functions)
- OpenAI integrations are marked with `TODO` comments

## 🚢 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy

### Backend (Firebase)

*Instructions will be added in later phases*

## 📄 License

This project is private and proprietary.

---

**Status**: Phase 2 Complete - Firebase Authentication integrated. Ready to proceed to Phase 3 (Firestore Database Setup).
