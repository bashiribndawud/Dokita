import React, { useState,Component } from 'react'
import  './register.css'
import TextInput from '../../components/input/TextInput'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            email: '',
            postalCode: '',
            phone: '',
            specialty: '',            
         }
    }
    handleChange = (e) =>{
        const {value, name} = e.target
         this.setState({[name]:value})
         
     }
     handleSubmit = async (e) =>{
        e.preventDefault();
        const {email, firstname, lastname, postalCode, phone, specialty} = this.state
        console.log(this.state)
        try {
            //await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: "", password: ""})
        } catch (error) {
            console.error(error);
            
        }
    }
    render() { 
        return ( 
            <div class="container login-container">
            <div class="row">
                <div class="col-md-7 login-form-1">
                    <h3 className="text-left">Dokita supports you to relaunch your activity with serenity</h3>
                    <form onSubmit={this.handleSubmit}>
                    <div class="form-row mb-3">
                        <div class="col">
                           <TextInput type="text" name="firstname" handleChange={this.handleChange} value={this.state.firstname} placeholder="First Name *" />
                        </div>
                        <div class="col">
                            <TextInput type="text" name="lastname" handleChange={this.handleChange} value={this.state.lastname} placeholder="Last Name *" />
                        </div>
                    </div>
                    <div class="form-row mb-3">
                        <div class="col">
                            <TextInput type="text" name="postalCode" handleChange={this.handleChange} value={this.state.postalCode} placeholder="Postal Code" />
                        </div>
                        <div class="col">
                            <TextInput type="text" name="phone" handleChange={this.handleChange} value={this.state.phone} placeholder="Phone" />
                        </div>
                    </div>
                    <div class="form-row mb-3">
                        <div class="col">
                            <TextInput type="text" name="specialty" handleChange={this.handleChange} value={this.state.specialty} placeholder="Specialty" />
                        </div>                    
                    </div>
                    <div class="form-row mb-3">
                        <div class="col">
                            <TextInput type="email" name="email" handleChange={this.handleChange} value={this.state.email} placeholder="Email *" />
                        </div>                    
                    </div>
                      
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Get more information" />
                        </div>
                        <div class="form-group">
                            <span class="ForgetPwd">* Required fields?</span>
                        </div>
                    </form>
                </div>
                <div class="col-md-5 login-form-2">
                   
                </div>
            </div>
        </div>
         );
    }
}
 
export default Register;

