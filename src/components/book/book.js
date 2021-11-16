import React, { useState,useEffect } from 'react'
import './book.css'
import DatePicker from "react-datepicker";
import { ReactComponent as Check } from './check.svg';
import "react-datepicker/dist/react-datepicker.css";
import RadioInput from '../radio/RadioInput';
const reasons = ['Pediatric Consultation','Treatment renewal', 'General Consultation', 'Video Consultation'

]
const Book = () => {
    const [date, setdate] = useState(new Date())
    const [mode, setmode] = useState('')
    const [showSubmit, setshowSubmit] = useState(false)
    const [showModal, setshowModal] = useState(false)
    const [reason, setreason] = useState('Choose a reason')
    const handleChange = date => {
        setdate(date)
        if(date){
            setshowSubmit(true)
        }
      };
    const handleSubmit = e => {
        e.preventDefault();
        setdate('')
        setmode('')
        setreason('')
        setshowModal(true)
      };
      useEffect(() => {
         
      }, [mode])
    return (
        <div class="dl-profile-booking-wrapper">
    <div class="dl-profile-booking" id="booking">
        <div class="dl-booking-sticky" style={{top: '14px'}}>
            <div>
                <div>
                </div>
                <div style={{position: 'relative'}}>
                    <div>
                        <div class="dl-booking-title">
                            <h3 class="dl-text dl-text-title-sub-bold dl-text-color-inherit"
                                style={{lineHeight: '1.4em;'}}>Book your appointment online</h3>
                            <div class="dl-booking-title-subtext">
                                <span class="dl-text dl-text-body dl-text-color-inherit">Fill in the following information</span>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div class="booking booking-compact-layout">
                            
                                <div class="dl-step">                                   
                                    <div class="dl-step-number dl-step-number-completed">
                                        <Check />
                                    </div>
                                    <div class="dl-layout-container dl-layout-spacing-xs-0">
                                            
                                        <div class="dl-layout-item dl-layout-size-xs-12 dl-layout-size-sm-12">
                                            <label class="dl-text dl-text-body-subtitle dl-step-label"
                                                for="booking_motive">Mode of consultation</label>
                                                <div className="form-row">                                               
                                                     <RadioInput name="mode" handleChange={(e) =>setmode(e.target.value)} value="office" label="At office" icon="fa fa-hospital-o float-right"  />                                               
                                                </div>
                                                <div className="form-row">                                                
                                                     <RadioInput name="mode" handleChange={(e) =>setmode(e.target.value)}  value="video" label="On video" icon="fa fa-video-camera float-right" />                                               
                                                </div>
                                        </div>
                                                                             
                                    </div>                                
                            </div>
                            {mode != '' && (<>
                            <hr class="dl-divider" />
                                <div class="dl-step">
                                    <div class="dl-step-number">
                                        <div>2</div>
                                    </div>
                                    <div class="dl-layout-container dl-layout-spacing-xs-0">
                                        <div class="dl-layout-item dl-layout-size-xs-12 dl-layout-size-sm-12"><label
                                                class="dl-text dl-text-body-subtitle dl-step-label">Schedule a {mode}  appointment</label></div>
                                        {console.log(mode)}
                                        <div class="dl-step-children dl-layout-item dl-layout-size-xs-12 mx-auto dl-layout-size-sm-12">                                          
                                            <p className="py-2">Reason for consultation</p>
                                            <div class="dropdown my-2">
                                                <input  class="btn  dropdown-toggle" placeholder="Choose Reason"  value={reason} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                            <div className="after"></div>     
                                            
                                                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" >Choose a reason</a>
                                                    {reasons.map(e =>(
                                                        <a onClick={()=> setreason(e)} class="dropdown-item" >{e}</a>

                                                    ))}
                                                    
                                                </div>
                                                </div>
                                            <label className="my-2">Choose a date for appointment</label>
                                            <DatePicker    
                                                    style={{width:'100%'}}                                       
                                                    className="form-control w-100"
                                                    selected={date}
                                                    onChange={handleChange}
                                                />
                                             {showSubmit && 
                                                <button 
                                                    type="submit" 
                                                    id="myBtn"
                                                    className=" my-3 book-btn btn btn-block">Submit
                                                </button>
                                             } 
                                            
                                        </div>
                                    </div>
                                </div>
                            
                                        </>)}                           
                            
                        </div>
                        </form>
                        {showModal && 
                            <div id="myModal" class="modal" onClick={() => setshowModal(false)} >
                                <div class="modal-content">
                                    <span onClick={() => setshowModal(false)} class="close">&times;</span>
                                    <h1 className="modal-check my-1"><Check /></h1>
                                    <h3 className="my-3">Booked Successfully</h3>
                                </div>

                                </div>                        
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
    )
}

export default Book
