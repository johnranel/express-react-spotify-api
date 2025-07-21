# Express React Spotify API

This is a full-stack web application that integrates with the Spotify Web API, allowing users to authenticate with their Spotify account, explore music data, and interact with playlists. It is built using **Express.js** for the backend and **React** for the frontend.

## Features

- Spotify OAuth2 authentication
- View your Spotify profile and playlists
- Built with Express.js and React
- API communication with Axios

## Tech Stack

**Frontend:**
- React
- Axios
- React Router

**Backend:**
- Node.js
- Express
- dotenv
- Spotify Web API (via `spotify-web-api-node`)

## Getting Started

### Prerequisites

- Node.js (v18+)
- A registered Spotify Developer account
- A `.env` file with your credentials:


**Backend ENV**

    PORT=8080
    CLIENT_ID=your_spotify_client_id
    CLIENT_SECRET=your_spotify_client_secret
    BACKEND_URI=http://localhost:3000/api
    FRONTEND_URI=http://localhost:3000
    REDIRECT_URI=http://localhost:3000/api/callback

**Frontend ENV**

    REACT_APP_BACKEND_URI=http://localhost/api

### Installation

1. Clone the repo

    ```bash
    git clone https://github.com/johnranel/express-react-spotify-api.git
    cd express-react-spotify-api

2. Install dependencies

    ```
    # For backend
    cd server
    npm install

    # For frontend
    cd ../client
    npm install

3. Run the development server

    ```
    # Start backend
    cd ../server
    npm run dev

    # Start frontend
    cd ../client
    npm start
    Open http://localhost:3000 to view it in the browser.

## Project Structure
bash
Copy
Edit
express-react-spotify-api\
|── client/         # React frontend\
|   └── ...\
|── server/         # Express backend\
|   └── ...\
|── .env.example    # Sample environment variables\
|── README.md       # This file