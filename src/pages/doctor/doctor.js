import React from 'react'
import Header from '../../components/header/header'
import  './doctor.css'
import DoctorProfile from '../../components/doctor-profile/doctor-profile'
import { withRouter } from 'react-router-dom'
import Scrollspy from 'react-scrollspy'
const $ = window.$
const Doctor = ({location}) => {
    const {name, specialty, image, biography, degree, phone, email} = location.state.details
    console.log(location.state)
   const scroll = (e) => {
        e.preventDefault()    
       console.log(e.target.getAttribute('href'))
       let hash = e.target.getAttribute('href')
       $('.link-selected').removeClass('link-selected')
       e.target.parentElement.classList.add('link-selected')
       console.log($(this))
       $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 300, function(){      
            // window.location.hash = hash;
        });
       
   }
    return (
        <div>
            <Header />
            <header class="dl-profile-header mt-2">
                <div class="dl-profile-overlay">
                    <div class="dl-profile-wrapper mt-5 pb-5">
                        <div class="dl-profile-header-photo">
                            <img alt="" itemprop="image" src={image} />
                        </div>
                        <div class="dl-profile-header-name-speciality">
                            <h1 class="dl-profile-header-name">Dr. {name}</h1>
                            <h2 class="dl-profile-header-speciality">{specialty}</h2>
                        </div>
                    </div>
                </div>
            </header>
            <nav class="dl-profile-nav">
                <div class="dl-profile-wrapper">
                    <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
                    <ul className="dl-profile-nav-links js-profile-navbar">
                        <li class="dl-profile-nav-link js-profile-navbar-item dl-profile-nav-link-selected link-selected">
                            <a onClick={scroll} href="#location">Address</a>
                        </li>
                        <li class="dl-profile-nav-link js-profile-navbar-item">
                            <a onClick={scroll} href="#biography">Biography</a>
                        </li>
                        <li class="dl-profile-nav-link js-profile-navbar-item">
                            <a onClick={scroll} href="#opening_hours">Contact</a>
                        </li>

                    </ul>
                    </Scrollspy>
                </div>
            </nav>
            <DoctorProfile />
           

        </div>
    )
}

export default withRouter(Doctor)
