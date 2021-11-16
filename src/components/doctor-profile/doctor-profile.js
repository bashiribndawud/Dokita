import React from 'react'
import  './doctor-profile.css'
import WrappedMap from '../Map/GoogleMap'
// import { key } from '../../key';
import {} from 'dotenv/config'
import Book from '../book/book'
import { withRouter } from 'react-router-dom'
const DoctorProfile = ({location}) => {
    
    const {name, specialty, image, biography, degree, phone, email, lat, lng,} = location.state.details
    const places= [  
        {
          _id: 1,
          name: `Dr ${name} office`,
          lat: lat,
          lng: lng
        }
      ]
    return (
        <div className="dl-profile-wrapper">
            <div className="dl-profile-body-wrapper">            
                <div class="dl-profile-card" id="location">
                    <div className="dl-profile-card-section">
                            <div class="dl-profile-card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"><path d="M16 7.5c0-1-.2-2-.7-3-.3-.8-1-1.6-1.7-2.3A8.69 8.69 0 008 0C7 0 6 .2 5 .6c-1 .4-2 1-2.7 1.6C1.6 3 1 3.7.7 4.6a6.4 6.4 0 000 5.8c0 .4.4 1 .8 1.4l5.2 7.5c.4.5.8.7 1.3.7s1-.2 1.3-.7l5.2-7.5c.4-.5.7-1 .8-1.4.5-1 .7-2 .7-3zm-6 2c-.5.5-1.2.8-2 .8s-1.5-.3-2-1c-.7-.4-1-1-1-1.8s.3-1.4 1-2c.5-.5 1.2-.8 2-.8s1.5.3 2 .8c.7.6 1 1.2 1 2 0 .7-.3 1.4-1 2z"></path></svg>
                            </div>
                            <div class="dl-profile-card-content">
                                <h3 class="dl-profile-card-title">
                                Map and access information 
                                </h3>
                                <div class="dl-profile-text">
                                    <div>
                                        <div class="dl-profile-practice-name">
                                        </div>{location.state.details.location}
                                    </div>
                                </div>
                                <div class="dl-profile-text">
                                    <h4 class="dl-profile-card-subtitle">Useful information</h4>
                                    <span>Ground floor <br/>Disabled access <br/>Free parking</span>
                                </div>
                            </div>
                            <div className="dl-profile-doctor-place-map">
                            <WrappedMap 
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GoogleMap}&v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{height: '100%'}}></div>}
                                containerElement={<div style={{height: '100%'}}></div>}
                                MarkerLocations ={places}
                                mapElement={<div style={{height: '100%'}}></div>}
                    />
                            </div>
                    </div>
                </div> 
            
                <div class="dl-profile-card " id="biography">
                    <div className="dl-profile-card-section">                       
                        <div class="dl-profile-card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 20 14"><path d="M0 0h12v2H0V0zm14 0h6v2h-6V0zM0 4h17v2H0V4zm0 4h4v2H0V8zm5 0h15v2H5V8zm-5 4h11v2H0v-2z"></path></svg>
                        </div>          
                            <div class="dl-profile-card-content">
                                <h3 class="dl-profile-card-title">
                                Biography 
                                </h3>
                                <div class="dl-profile-text dl-profile-bio">
                                   <p> Dr. {name} {biography}</p>
                                </div> 
                                <hr/>
                                <strong >
                                    Spoken languages 
                                </strong> 
                                    <p> English, Hausa, Yoruba</p>                             
                            </div> 
                    </div>
                <hr/>
                    <div className="dl-profile-card-section">                       
                        <div class="dl-profile-card-icon"><i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>          
                            <div class="dl-profile-card-content">
                                <h3 class="dl-profile-card-title">
                                Degress 
                                </h3>
                                <div class="dl-profile-text dl-profile-bio">
                                   <p>{degree}</p>
                                </div>                                                            
                            </div> 
                    </div>
               
                </div> 
                <div class="dl-profile-card " id="opening_hours">
                    <div className="dl-profile-card-section">                       
                    <div class="dl-profile-card-icon"><i class="fa fa-address-card-o" aria-hidden="true"></i>
                    </div>          
                            <div class="dl-profile-card-content">
                                <h3 class="dl-profile-card-title">
                                Contact 
                                </h3>
                                <div class="dl-profile-text dl-profile-bio">
                                   <span>Phone : {phone}</span> <br/>
                                   <span>Email : {email}</span>
                                </div>                               
                            </div>
                            
                    </div>
                </div> 
            
            </div>
                <Book />   
              
        </div>
    )
}

export default withRouter(DoctorProfile)
