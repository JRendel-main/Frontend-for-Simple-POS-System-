import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-light bg-success">
                    <div className="container">
                        <Link className="navbar-brand text-light" href="#">Simple POS System for Business</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
