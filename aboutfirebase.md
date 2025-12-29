# Firebase Configuration & Setup

## Project Overview
- **Project Name**: outpass-system-cit
- **Project ID**: outpass-system-cit
- **Project Number**: 225850430564
- **Environment**: Unspecified
- **Public-facing Name**: project-225850430564
- **Support Email**: spradeesh8233@gmail.com

## Web App Details
- **App Nickname**: outpass-system-cit
- **App ID**: `1:225850430564:web:56bb727cefef3e3236bb71`

## SDK Setup

### 1. Installation
If you are using NPM:
```bash
npm install firebase
```

### 2. Initialization
Import and initialize Firebase in your app:

```javascript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtLSLtokHlWNgCrAT6r3gXaolY9GRwfDs",
  authDomain: "outpass-system-cit.firebaseapp.com",
  projectId: "outpass-system-cit",
  storageBucket: "outpass-system-cit.firebasestorage.app",
  messagingSenderId: "225850430564",
  appId: "1:225850430564:web:56bb727cefef3e3236bb71",
  measurementId: "G-JG1T9410WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```
