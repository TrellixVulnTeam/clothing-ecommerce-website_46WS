import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''

        }
    }

    handleSubmit=(Event)=>{
        Event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    
    handleChange=(Event)=>{
        const {value,name}=Event.target;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with Your email And p assword</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange} required />
                    <FormInput
                     name='password'
                     type='password'
                     value={this.state.password}
                     label='password'
                     handleChange={this.handleChange} required/>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn