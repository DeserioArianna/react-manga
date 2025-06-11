import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MangaPage from "./pages/MangaPage";
import MangaDetail from "./components/MangaDetail";
import MangaList from "./components/MangaList";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/list" element={<MangaList />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/manga/:id" element={<MangaDetail />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
