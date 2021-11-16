import React from 'react'


import Partners from '../../components/partners/partner'
import Header from '../../components/header/header'
import Hero from '../../components/hero/hero'

const Home = () => {
    return (
        <div>
        <Header />
        <Hero />
        <div class="where_togo_area"></div>
        <Partners />
        </div>
    )
}

export default Home
