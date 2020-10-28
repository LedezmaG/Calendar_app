import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <Link 
                to="/" 
                className="navbar-brand navbar__logo"
            > 
                Calendar App 
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <Link
                            to=""
                            className="nav-link" 
                        >
                            Home 
                            <span className="sr-only">(current)</span>
                        </Link> */}
                    </li>
                </ul>
                <button className="form-inline my-2 my-lg-0 btn">
                    <i className="fas fa-sign-out-alt" />
                    <span> Logout </span>
                </button>
            </div>
        </nav>
    )
}
