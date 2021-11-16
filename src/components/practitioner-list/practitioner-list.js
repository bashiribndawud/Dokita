import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PractitionerLocation from '../Map/PractitionerLocation'

import SimpleReactCalendar from 'simple-react-calendar'
import fetchPractitioners from '../../redux/practitioners/fetchPractitioners'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPractitioners, getPractitionerError, getPractitionerPending } from '../../redux/practitioners/practitioners.reducer'

const PractitionerLists = ({location, fetchedPractitioners}) => {
   console.log(location)
   let {specialty} = location.state
   console.log(fetchedPractitioners)
    return (
        <div class="">
        <div class="container">
            <div class="row"> 
                {fetchedPractitioners.filter(e => e.specialty == specialty).map(({name, id, image, specialty},idx, arr) => (
                    <div key={id} class="col-lg-8 p-3 mb-3" style={{border: '1px solid #DEE2E7', borderRadius:'5px'}}>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6 d-flex">
                                        <img style={{width: '80px',height:'80px', borderRadius: '50%'}} src={image} alt="" />
                                    
                                         <div className="ml-3 mt-3 d-flex flex-column">
                                            <a href="#" class="prise">{name}</a>
                                            <span>{specialty}</span>                                    
                                            <span className="mt-2"><i class="fa fa-video-camera pr-1" aria-hidden="true"></i> Video consultation available
                                            </span>
                                            <Link className="pt-2 text-success" to="">Find out more</Link>
                                            <Link class="btn btn-danger  mt-3" to={{ pathname: '/doctor', state: { details: arr[idx] } }}>Make an appointment </Link>
    
                                        </div>                           
                                    </div>
                                    <div class="col-md-6">
                                    <div class="container">
                                    {/* <SimpleReactCalendar activeMonth={new Date()} /> */}
                                        <div id="carouselContent" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner" role="listbox">
                                                <div class="carousel-item active text-center p-4">
                                                    <span className="pr-2">Mon</span>
                                                    <span className="pr-2">Tue</span>
                                                    <span className="pr-2">Wed</span>
                                                    <span className="pr-2">Thur</span>
                                                    <span className="pr-2">Fri</span>
                                                </div>
                                                <div class="carousel-item text-center p-4">                                                
                                                <span className="pr-2">Mon</span>
                                                    <span className="pr-2">Tue</span>
                                                    <span className="pr-2">Wed</span>
                                                    <span className="pr-2">Thur</span>
                                                    <span className="pr-2">Fri</span>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" style={{    background: '#c9c9ce'}} href="#carouselContent" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next text-success" style={{    background: '#c9c9ce'}} href="#carouselContent" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" style={{color:'red !important'}} aria-hidden="true"></span>
                                                <span class="sr-only " style={{color:'red !important'}}>Next</span>
                                            </a>
                                        </div>
                                    
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="more_place_btn text-center">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    

                ))}              
                <div style={{position:'absolute', right:'0'}} class="col-lg-4 d-sm-none d-md-block" >
                    <div class="filter_result_wrap">
                        
                        <div class="filter_bordered" style={{height:'400px'}} >
                           <PractitionerLocation />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return ({
        error: getPractitionerError(state),
       fetchedPractitioners : getPractitioners(state),
       pending:  getPractitionerPending(state)
     })
}
export default withRouter(connect(mapStateToProps)(PractitionerLists))
