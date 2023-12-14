import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Chat from './comps/Chat';
import Login from "./comps/LogIn";
import Profile from "./comps/Profile";
import { Register } from "./comps/Register";
import Setup from "./comps/Setup";

function App() {
  return (
    <>
      <div>
        <div className="HeaderBox">
          <p className="BisonAdvisor"><a href="/chat" className="linkLogo">Bison Advisor</a></p>
          <div className="tabs">
            <a href="/chat" className="tab">Adivsor</a>
            <a href="/profile" className="tab">Profile</a>
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;


