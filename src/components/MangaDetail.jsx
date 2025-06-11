import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";


function MangaDetail() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [manga, setManga] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/${id}`).then(res => setManga(res.data)).catch(err => {console.error(err); setError(true)});
    }, [id]);

    if (error) return <NotFound />;
    if (!manga) return null;

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={manga.copertinaUrl}
                            alt={manga.titolo}
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>{manga.titolo}</h2>
                        <p><strong>Descrizione:</strong> {manga.descrizione}</p>
                        <p><strong>Anno di pubblicazione:</strong> {manga.annoPubblicazione}</p>
                        <p><strong>Autore:</strong> {manga.autore.nomeAutore}</p>
                        <p><strong>Generi:</strong> {manga.generi.map(g => g.nomeGenere).join(", ")}</p>
                        <Link to="/manga" className="btn btn-primary">Torna Indietro</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MangaDetail;