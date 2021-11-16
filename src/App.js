import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import Doctor from './pages/doctor/doctor';
import { Route,Switch } from 'react-router-dom';
import Practitioners from './pages/practitioners/practitioners';
import Register from './pages/register/register';
import { firestore } from './components/firebase/firebase.utils';
import { allPractitioners } from './list';
import { bindActionCreators } from 'redux';
import fetchPractitioners from './redux/practitioners/fetchPractitioners';
import { connect } from 'react-redux';



class App extends Component{
  
  componentDidMount(){
    
    // firestore.collection('specialty').get().then(val =>{
    //   val.docs.forEach(doc =>{
    //     console.log(doc.data())
    //   })
    // })
    // console.log(allPractitioners.length)
    // allPractitioners.forEach(obj => {
    //   firestore.collection('specialty').add({
    //     "id": obj.id,
    //     "name": obj.name,
    //     "image": obj.image,
    //     "email": obj.email,
    //     "location": obj.location,
    //     "lat": obj.lat,
    //     "lng": obj.lng,
    //     "phone": obj.phone,
    //     "degree": obj.degree,
    //     "specialty": obj.specialty,
    //     "biography": obj.biography,
    //     "fees": obj.fees

    //   }).then(ref =>{
    //     console.log("document written to db", ref.id)
    //   }).catch(err =>{
    //     console.log(err)
    //   })
    // })
   
  }

  render(){
    return (
      <div className="App">
         <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/practitioners" component={Practitioners} />
            <Route exact path="/doctor" component={Doctor} />
            <Route exact path="/register" component={Register} />
  
         </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state =>({
//   error: state => state.error,
//   practitioners: state => state.allPractitioners,
//   pending: state => state.pending
// })
// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchPractitioners: fetchPractitioners()
// },dispatch)
export default App;
