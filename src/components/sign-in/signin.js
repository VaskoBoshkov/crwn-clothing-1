import React from 'react'
import './signin.scss'
import FormInput from '../form-input/form-input.js'
import CustomButton from '../button/button.js'
import { signInWithGoogle } from '../../firebase/firebase.util'



class SignIn extends React.Component {
	constructor(){
		super()
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.setState({email: '', password: ''})
	}

	handleChange = (event) => {
		const{value, name} = event.target
		this.setState({ [name] : value})

	}
	render(){ 
	return(
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={this.handleSubmit}>
				<FormInput
				name='email'
				type='email'
				value={this.state.email}
				requierd o
				handleChange={this.handleChange}
				label='email'/>
				<FormInput
				name='password'
				type='password'
				value={this.state.password}
				requierd
				handleChange={this.handleChange}
				label='password'/>
				<div className='buttons'>
					<CustomButton type='submit'> Sign In </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
				</div>
			</form>
		</div>

		)
	}
}

export default SignIn