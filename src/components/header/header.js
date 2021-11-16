import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
        <Link class="navbar-brand js-scroll-trigger" to="/">
            Dokita
        </Link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars ml-1"></i></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/">Home</Link></li>
                <li class="nav-item"><Link class="nav-link professional" to="/register">Are You A Healthcare Professional ?</Link></li>
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/about">Need Help</Link></li>               
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="#contact">Contact</Link></li>
            </ul>
        </div>
    </div>
    </nav>
    </header>
    )
}

export default Header
