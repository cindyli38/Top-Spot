import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';


function App() {

  const CLIENT_ID = "cd72f1d5c3274e96b4881e12b4c4f01d"
  const REDIRECT_URI = "http://localhost:3000/dashboard"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read,playlist-modify-public,playlist-modify-private`


  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element=
            {<div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                  Create a Playlist Using Your Top Artist's Tracks
                </h1>
                <button className="login-btn">
                  <a href={`${URL}`}>
                    Login to Spotify
                  </a>
                </button>
              </header>
            </div>}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
