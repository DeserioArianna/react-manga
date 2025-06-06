import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MangaDetail() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [manga, setManga] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/${id}`).then(res => setManga(res.data)).catch(err => console.error(err));
    }, [id]);

    if (error) return <p>{error}</p>
    if (!manga) return <p>Caricamento...</p>

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
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MangaDetail;