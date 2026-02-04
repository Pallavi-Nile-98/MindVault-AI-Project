# Setup Guide - MindVault AI

## Phase 2: Firebase Authentication Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter project name (e.g., "mindvault-ai")
   - Enable/disable Google Analytics (optional)
   - Click "Create project"

### Step 3: Enable Authentication

1. In Firebase Console, go to **Authentication** > **Get started**
2. Click on **Sign-in method** tab
3. Enable **Email/Password** provider:
   - Click on "Email/Password"
   - Toggle "Enable" switch
   - Click "Save"

### Step 4: Get Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to **Your apps** section
4. Click the **Web** icon (`</>`) to add a web app
5. Register your app (give it a nickname like "MindVault Web")
6. Copy the Firebase configuration object

### Step 5: Create Environment Variables

1. Create a `.env` file in the root directory:

```bash
# .env file
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

2. Replace the placeholder values with your actual Firebase config values

**Important**: 
- Never commit `.env` file to git (it's already in `.gitignore`)
- For production deployment on Vercel, add these as environment variables in Vercel dashboard

### Step 6: Test the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test authentication:
   - Go to `/signup` and create a new account
   - Log out and log back in at `/login`
   - Verify that protected routes (like `/notes`) require authentication

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- Check that your `.env` file exists and has correct values
- Restart the dev server after creating/updating `.env`
- Ensure variable names start with `VITE_`

### "Firebase: Error (auth/email-already-in-use)"
- The email is already registered. Try logging in instead.

### Authentication not persisting
- Check browser console for errors
- Verify Firebase Auth is enabled in Firebase Console
- Check that environment variables are loaded correctly

## Next Steps

After completing Phase 2, proceed to Phase 3: Firestore Database Setup
