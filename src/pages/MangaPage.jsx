import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

function MangaPage() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [mangaList, setMangaList] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredManga, setFilteredManga] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${apiUrl}`)
            .then(res => {
                setMangaList(res.data);
                setFilteredManga(res.data);
            })
            .catch(err => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    const handleSearch = () => {
        const filtered = mangaList.filter(m => m.titolo.toLowerCase().includes(search.toLowerCase()));
        setFilteredManga(filtered);
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return <NotFound />;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Lista Manga</h2>
            <div className="d-flex align-items-center gap-2 mb-3">
                <input
                    type="text"
                    placeholder="Cerca per titolo..."
                    className="form-control"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>Cerca</button>
            </div>
            {filteredManga.length > 0 ? (
                <div className="row">
                    {filteredManga.map(m => (
                        <div key={m.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img src={m.copertinaUrl} className="card-img-top" alt={m.titolo} />
                                <div className="card-body">
                                    <h5 className="card-title">{m.titolo}</h5>
                                    <p className="card-text">{m.descrizione.slice(0, 100)}...</p>
                                    <Link to={`/manga/${m.id}`} className="btn btn-outline-info">Dettagli</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning">Nessun manga trovato per la ricerca: <strong>{search}</strong></div>
            )}
        </div>
    );
}

export default MangaPage;