import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MangaPage from "./pages/MangaPage";
import MangaDetail from "./components/MangaDetail";
import MangaList from "./components/MangaList";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // es: {username: 'admin', role: 'ADMIN'}
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={handleLogout}/>
      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/list" element={<MangaList />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/manga/:id" element={<MangaDetail />}/>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
