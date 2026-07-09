# Spotify Project

This repository contains a full-stack Spotify-like application with a Node.js/Express backend and a React + Vite frontend.

## Repository structure

- `backend/`
  - `server.js` - entry point for the backend server
  - `src/app.js` - Express app configuration and middleware
  - `src/db/db.js` - MongoDB connection
  - `src/controlller/` - authentication, music, and post controllers
  - `src/routes/` - API route definitions for auth and music
  - `src/middlewares/` - authentication and rate-limiting middleware
  - `src/model/` - Mongoose models for users, music, albums, and posts
  - `src/services/` - file upload and storage services
  - `.env` - environment variables required by the backend

- `spotiUI/`
  - React frontend created with Vite
  - `src/` contains pages, components, context providers, and styles
  - `src/services/api.js` is the frontend API service file placeholder

## Prerequisites

- Node.js installed
- npm installed
- MongoDB connection string
- ImageKit private key (optional if file upload is used)

## Backend setup

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create or update `backend/.env` with the required keys:
   ```env
   Mongo_URI=mongodb+srv://YOUR_DB_USER:YOUR_DB_PASSWORD@cluster0.example.mongodb.net/spotifyProject
   JWT_SECRET_KEY=your_jwt_secret_key
   JWT_REFRESH_SECRET_KEY=your_jwt_refresh_secret_key
   IMAGE_PRIVATE_KEY=your_imagekit_private_key
   ```

4. Start the backend server in development mode:
   ```bash
   npm run dev
   ```

   The backend listens on:
   - `http://localhost:7000`

## Frontend setup

1. Open another terminal and navigate to the frontend folder:
   ```bash
   cd spotiUI
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend app:
   ```bash
   npm run dev
   ```

   The frontend will run on:
   - `http://localhost:5173`

## How the frontend and backend connect

- The backend is configured to accept requests from `http://localhost:5173` using CORS.
- API routes are exposed under `/api`:
  - `/api/auth/register`
  - `/api/auth/login`
  - `/api/auth/refresh`
  - `/api/auth/logout`
  - `/api/music/upload`
  - `/api/music/album`
  - `/api/music/`
  - `/api/music/albums`
  - `/api/music/albums/:albumId`
  - `/api/music/artists`
  - `/api/music/artists/:artistId`

## Important notes

- Keep `.env` values secret and do not commit them to source control.
- The frontend API service file is located at `spotiUI/src/services/api.js`.
- If `IMAGE_PRIVATE_KEY` is not set, file upload functionality may not work.

## Useful commands

Backend:
```bash
cd backend
npm run dev
npm start
```

Frontend:
```bash
cd spotiUI
npm run dev
npm run build
npm run preview
```

## Summary

This README covers the full setup and startup process for both backend and frontend. Use the backend `.env` file to provide your MongoDB URI and JWT secrets, then run each part separately using `npm install` and `npm run dev`.
