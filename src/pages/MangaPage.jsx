import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MangaPage() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [mangaList, setMangaList] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredManga, setFilteredManga] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}`).then(res => {setMangaList(res.data); setFilteredManga(res.data);}).catch(err => console.error(err));
    }, []);

    const handleSearch = () => {
        const filtered = mangaList.filter(m => m.titolo.toLowerCase().includes(search.toLowerCase()));
        setFilteredManga(filtered);
    }
    

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Lista Manga</h2>

            <input
                type="text"
                placeholder="Cerca per titolo..."
                className="form-control mb-3"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <button className="btn btn-ptimary" onClick={handleSearch}>Cerca</button>

            <div className="row">
                {filteredManga.map(m => (
                    <div key={m.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={m.copertinaUrl} className="card-img-top" alt={m.titolo} />
                            <div className="card-body">
                                <h5 className="card-title">{m.titolo}</h5>
                                <p className="card-text">{m.descrizione.slice(0, 100)}...</p>
                                <Link to={`/manga/${m.id}`} className="btn btn-outline-primary">Dettagli</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MangaPage;