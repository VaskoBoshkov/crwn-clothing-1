import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'


const Header = ({ currentUser }) => (
	<div className='header'>
		<Link to="/" className='logo-container'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to="/shop"> SHOP </Link>
			<Link className='option' to="/"> CONTACT </Link>
			{
			currentUser ? 
			<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
			:
			<Link className='option' to='/sign-in' >SIGN IN</Link>
			}
		</div>
	 </div>
	)

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)