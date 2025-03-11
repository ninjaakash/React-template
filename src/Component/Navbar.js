﻿import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const location = useLocation(); // Get current route

    const handleLogin = () => {
        setUser({ name: "John Doe", email: "johndoe@gmail.com", avatar: "https://via.placeholder.com/40" });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">DUH</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/features" ? "active" : ""}`} to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/pricing" ? "active" : ""}`} to="/pricing">Pricing</Link>
                        </li>
                    </ul>

                    {/* Google Login Profile Section */}
                    <div className="ms-3">
                        {user ? (
                            <div className="dropdown">
                                <button
                                    className="btn btn-light rounded-circle p-0 border-0"
                                    id="profileDropdown"
                                    data-bs-toggle="dropdown"
                                >
                                    <img src={user.avatar} alt="User" className="rounded-circle" width="40" height="40" />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                    <li><span className="dropdown-item-text">👤 {user.name}</span></li>
                                    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                        ) : (
                            <button className="btn btn-light rounded-circle p-1" onClick={handleLogin}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="Google Login" width="30" height="30" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
