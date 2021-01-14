import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <header>
                <div className="container">
                <div className="inner-content">
                <div className="brand">
                    
                    <img className="movie" src="https://upload.wikimedia.org/wikipedia/en/c/c2/Back_to_the_Future_Part_II.jpg" alt="movie projector"/>
                </div>

                <ul className="nav-links">
                    <li>
                    <Link to="/">WatchList</Link>
                    </li>

                    <li>
                    <Link to="/watched">Watched</Link>
                    </li>

                    <li>
                    <Link to="/add" className="btn btn-main">
                        + Add
                    </Link>
                    </li>
                </ul>
                </div>
                </div>
            </header>
        </div>
    )
}