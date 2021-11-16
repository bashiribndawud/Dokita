import React from 'react'
 import  './hero.css'
import SearchForm from '../search-form/search-form'
const Hero = () => {
    return (      
     <header class="masthead text-white text-center">
     <div class="overlay"></div>
     <div class="container">
       <div class="row">
         <div class="col-xl-9 mx-auto">
           <h1 class="mb-2 intro-text">Make an appointment for physical consultation or video consultation!</h1>
         </div>
         <div class="col-md-10 col-lg-12 col-xl-10 mx-auto">
            <SearchForm />
         </div>
       </div>
     </div>
   </header>
    )
}

export default Hero
