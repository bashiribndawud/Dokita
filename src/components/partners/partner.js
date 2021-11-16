import React from 'react'
import './partner.css'
import jalingo from '../../assets/fed-med-jalingo.jpg'
import aminu from '../../assets/Aminu Kano Teaching Hospita.jpg'
import luth from '../../assets/luth.png'
import yaba from '../../assets/Federal-Neuropsychiatric-Hospital-Yaba.jpg'
import kaduna from '../../assets/kaduna.jpeg'
import abuja from '../../assets/logo2x.svg'
import yola from '../../assets/fed-med-yola.jpg'
const Partners = () => {
    let hospitals = [
        {
            title:'National Hospital Abuja',
            image: abuja,
            location: 'Abuja'
        },
        {
            title:'Aminu Kano Teaching Hospital',
            image: aminu,
            location: 'Kano'
        },
        {
            title:'Lagos University Teaching Hospital',
            image: luth,
            location: 'Lagos'
        },
        {
            title:'Federal Medical Center Jalingo',
            image: jalingo,
            location: 'Jalingo'
        },
        {
            title:'Federal Neuropsychiatric Hospital Yaba',
            image: kaduna,
            location: 'Kaduna'
        },
        {
            title:'Federal Neuropsychiatric Hospital Yaba',
            image: yaba,
            location: 'Yaba'
        },
    ]
    return (
        <div>
            <section class="features-icons bg-light text-center">
            <div class="container">
                <h2 >Our Partners</h2>
                <p class="mb-5">The best public and private hospitals nationwide</p>
            <div class="row">
            {hospitals.map(hospital => (
                <div class="col-lg-4 mb-3">
                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                        <img src={hospital.image} class="m-auto text-primary"/>
                    </div>            
                </div>
                </div>

                    ))}            
                
            </div>
            </div>
        </section>
        <section class="testimonials text-center">
    <div class="container">
      <h2 class="mb-5">What people are saying...</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="https://nigerianinfopedia.com.ng/wp-content/uploads/2019/10/Nkem-owoh-popular-actor-in-Nigeria.jpg" alt="" />
            <h5>Margaret E.</h5>
            <p class="font-weight-light mb-0">"Dokita be the best e-Health application for Naija"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="https://connectnigeria.com/articles/wp-content/uploads/2019/07/david-oyelowo-portrait.jpg" alt=""/>
            <h5>Fred S.</h5>
            <p class="font-weight-light mb-0">"Dokita helps you monitor your health"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src="https://tvseriesfinale.com/wp-content/uploads/2013/02/ironside02.jpg" alt="" />
            <h5>Sarah W.</h5>
            <p class="font-weight-light mb-0">"Thanks so much for making these resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h2 class="mb-4 text-light">Ready to get started? Sign up now!</h2>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" class="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div class="col-12 col-md-3">
                <button type="submit" class="btn submit btn-block btn-lg btn-primary">Sign up!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
        </div>
       
   
    )
}

export default Partners
