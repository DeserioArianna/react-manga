import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MangaVerse</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Link a sinistra */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/manga">Manga</Link>
                        </li>
                        {user?.role === "ADMIN" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/manga/create">Aggiungi Manga</Link>
                            </li>
                        )}
                    </ul>

                    {/* Link a destra */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">👤 {user.username}</span>
                                </li>
                                <li className="nav-item">
                                    <button onClick={onLogout} className="btn btn-outline-danger">
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="btn btn-outline-primary" to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;