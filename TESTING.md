# Testing Guide - MindVault AI

## Phase 2: Firebase Authentication Testing

### Prerequisites
- ✅ Dev server is running (`npm run dev`)
- ✅ `.env` file is created with Firebase config
- ✅ Firebase project has Email/Password authentication enabled

---

## Step-by-Step Testing

### Test 1: Homepage & Navigation

1. **Open the app** in your browser (usually `http://localhost:3000`)
2. **Check the homepage**:
   - ✅ Should see "Welcome to MindVault AI" heading
   - ✅ Should see three feature cards
   - ✅ Should see "How It Works" section
3. **Check navigation bar**:
   - ✅ Should see "MindVault AI" logo on the left
   - ✅ Should see "Login" and "Sign Up" buttons on the right (since you're not logged in)

---

### Test 2: Sign Up (Create Account)

1. **Click "Sign Up" button** (top right or homepage button)
2. **Fill in the signup form**:
   - Email: `test@example.com` (use a real email format)
   - Password: `test123456` (at least 6 characters)
   - Confirm Password: `test123456` (must match)
3. **Click "Create account"**
4. **Expected results**:
   - ✅ Should see loading state ("Creating account...")
   - ✅ Should automatically redirect to `/notes` page
   - ✅ Navigation bar should now show "My Notes" and "Logout" buttons
   - ✅ Should NOT see "Login" or "Sign Up" buttons anymore

---

### Test 3: Protected Route (Notes Page)

1. **You should already be on `/notes` page** after signup
2. **Check the page**:
   - ✅ Should see "My Notes" heading
   - ✅ Should see "Ask AI" and "+ New Note" buttons
   - ✅ Should see "No notes yet" message (since no notes created yet)
3. **Try accessing directly**:
   - ✅ Type `http://localhost:3000/notes` in address bar
   - ✅ Should stay on notes page (you're authenticated)

---

### Test 4: Logout

1. **Click "Logout" button** (top right)
2. **Expected results**:
   - ✅ Should redirect to `/login` page
   - ✅ Navigation bar should show "Login" and "Sign Up" buttons again
   - ✅ Should NOT see "My Notes" or "Logout" buttons

---

### Test 5: Login (Existing Account)

1. **You should be on `/login` page** after logout
2. **Fill in the login form**:
   - Email: `test@example.com` (same email you used for signup)
   - Password: `test123456` (same password)
3. **Click "Sign in"**
4. **Expected results**:
   - ✅ Should see loading state ("Signing in...")
   - ✅ Should redirect to `/notes` page
   - ✅ Navigation bar should show authenticated state again

---

### Test 6: Authentication State Persistence

1. **While logged in**, refresh the page (F5 or Ctrl+R)
2. **Expected results**:
   - ✅ Should stay logged in
   - ✅ Should remain on `/notes` page (or wherever you were)
   - ✅ Should NOT redirect to login page
   - ✅ This tests that Firebase Auth persists across page refreshes

---

### Test 7: Access Protected Route While Logged Out

1. **Logout** if you're logged in
2. **Try to access protected route**:
   - Type `http://localhost:3000/notes` in address bar
   - Or click a link that goes to `/notes`
3. **Expected results**:
   - ✅ Should automatically redirect to `/login` page
   - ✅ Should NOT be able to access `/notes` without authentication

---

### Test 8: Error Handling - Signup

#### Test 8a: Passwords Don't Match
1. Go to `/signup`
2. Enter:
   - Email: `test2@example.com`
   - Password: `password123`
   - Confirm Password: `different123`
3. Click "Create account"
4. **Expected**: ✅ Should show error "Passwords do not match"

#### Test 8b: Weak Password
1. On signup page, enter:
   - Email: `test3@example.com`
   - Password: `12345` (less than 6 characters)
   - Confirm Password: `12345`
2. Click "Create account"
3. **Expected**: ✅ Should show error "Password must be at least 6 characters"

#### Test 8c: Email Already Exists
1. Try to sign up with the same email you used in Test 2
2. Enter:
   - Email: `test@example.com` (already exists)
   - Password: `test123456`
   - Confirm Password: `test123456`
3. Click "Create account"
4. **Expected**: ✅ Should show error "An account with this email already exists"

---

### Test 9: Error Handling - Login

#### Test 9a: Wrong Password
1. Go to `/login`
2. Enter:
   - Email: `test@example.com`
   - Password: `wrongpassword`
3. Click "Sign in"
4. **Expected**: ✅ Should show error "Incorrect password. Please try again."

#### Test 9b: Non-existent Email
1. On login page, enter:
   - Email: `nonexistent@example.com`
   - Password: `anypassword`
2. Click "Sign in"
3. **Expected**: ✅ Should show error "No account found with this email address."

#### Test 9c: Invalid Email Format
1. On login page, enter:
   - Email: `notanemail` (invalid format)
   - Password: `anypassword`
2. Click "Sign in"
3. **Expected**: ✅ Should show error "Invalid email address." (or browser validation)

---

### Test 10: Navigation Flow

1. **While logged out**:
   - ✅ Click "Login" → Should go to `/login`
   - ✅ Click "Sign Up" → Should go to `/signup`
   - ✅ Click logo → Should go to `/` (homepage)

2. **While logged in**:
   - ✅ Click "My Notes" → Should go to `/notes`
   - ✅ Click "Logout" → Should log out and go to `/login`
   - ✅ Click logo → Should go to `/` (homepage)

---

### Test 11: Multiple Browser Tabs

1. **Open two browser tabs** with the app
2. **Login in Tab 1**
3. **Check Tab 2**:
   - ✅ Should also show logged-in state (Firebase syncs across tabs)
4. **Logout in Tab 1**
5. **Check Tab 2**:
   - ✅ Should also show logged-out state

---

## ✅ Success Criteria

If all tests pass, Phase 2 is working correctly:
- ✅ Users can create accounts
- ✅ Users can log in
- ✅ Users can log out
- ✅ Protected routes work correctly
- ✅ Authentication state persists
- ✅ Error handling works for invalid inputs
- ✅ Navigation works correctly

---

## 🐛 Troubleshooting

### If signup/login doesn't work:
1. Check browser console (F12) for errors
2. Verify `.env` file exists and has correct values
3. Verify Firebase Authentication is enabled in Firebase Console
4. Restart dev server after creating `.env` file

### If you see Firebase errors:
- Check that Email/Password provider is enabled in Firebase Console
- Verify your Firebase config values in `.env` are correct
- Check browser console for specific error messages

---

## Next Steps

After confirming all tests pass, you're ready for **Phase 3: Firestore Database Setup**!
