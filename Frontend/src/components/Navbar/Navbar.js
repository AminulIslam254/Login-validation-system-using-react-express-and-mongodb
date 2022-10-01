import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbardes.css"

export default function Navbar() {
    return (
        <div style={{ backgroundColor: "#ffffff" }}>
            <nav className="p-1 mb-2 bg-primary text-white" >
                <div className="container-fluid" style={{display:"flex"}}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-1" type="search" placeholder="Enter your Search" aria-label="Search" id='navtxt' />
                        <button className="btn btn-outline-success p-3 mb-1 bg-white text-dark" type="submit">Search</button>
                    </form>
                    <div className="title1">
                        <p>Enter something</p>
                        
                    </div>
                    <div className="loginscr">
                        <button><Link to="/login">Login</Link></button>
                    </div>
                </div>

            </nav>



        </div>
    )
}
