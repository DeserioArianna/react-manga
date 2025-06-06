import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MangaList() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [manga, setManga] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}`).then(res => setManga(res.data)).catch(err => console.error("Errore:", err));
    }, []);

    return (
        <div>
            <h1>Manga</h1>
            <ul>
                {manga.map(m => (
                    <li key={m.id}>
                        <Link to={`/manga/${m.id}`}>{m.titolo}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MangaList;