import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
    const apiUrl = import.meta.env.VITE_API_URL
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // POST a /login: Spring Sicurity processa l'autenticazione
            await axios.post(`${ apiUrl }/current-user`, new URLSearchParams({ username, password }),
                {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    withCredentials: true,
                }
            );

            // Login avvenuto con successo 
            const resUser = await axios.get(`${ apiUrl }`, { withCredentials: true });
            console.log("RISPOSTA current-user:", resUser.data)
            onLogin(resUser.data);
            navigate("/manga");
        } catch (err) {
            setError("Credenziali non valide");
            console.error(err);
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Entra</button>
            </form>
        </div>
    )

}

export default LoginPage;