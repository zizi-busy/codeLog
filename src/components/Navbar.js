import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div class="container">
        <Link to='/' class="navbar-brand">CodeLog</Link>
        </div>
            
        </nav>
    )
}

export default Navbar