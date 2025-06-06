import { Link } from "react-router-dom";

function Home() {
    const apiUrl = import.meta.env.VITE_API_URL;

    return (
        <div className="container text-center">
            <h1>Benvenuto nel MangaVerse 📚</h1>
            <p>Scopri i tuoi manga preferiti</p>
            <Link to="/manga" className="btn btn-primary mt-3">Vai ai Manga</Link>
        </div>
    )
}

export default Home;