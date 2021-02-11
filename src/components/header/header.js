import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './header.css';

const Header = () => {
	const [showmodal, setmodal] = useState(false);

	const handleClick = () => {
		console.log('showmodal')
	}

	if(showmodal){
		return(
			<div className={`modal ${showmodal && 'showmodal' }`} >
				<div className='modal-content'>
					<div className='profile-image'>
					<img  className='profile-image' src='https://i.pinimg.com/474x/77/5b/91/775b91d4b1bfcac2aa3292b47763c1b1.jpg' />
					</div>
					<h2>Book 30 Mins Free Consultation</h2>
					<h5>Take the first step towards your study abroad journey.
					 Get your free profile evaluation by your experts and kickstart 
					 your journey. </h5>
					 <form className='form'>
					 <input type='text' placeholder='Enter Your Name' />
					 <input type='text' placeholder='Enter Your Email' />
					 <input type='number' placeholder='Enter Your Phone no' />
					 <Button type='submit' className='submit-button'>Get Started</Button>
					 </form>
					 <h1 className='close' onClick={() => setmodal(false)}>X</h1>

				</div>

			</div>
			)
	}

	return (
		<Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
		  <Navbar.Brand href="#home">leverage-edu</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className='ml-auto'>
		      <NavDropdown title="How we Help" id="collasible-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		      <NavDropdown title="Destinations" id="collasible-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		      <NavDropdown title="Test" id="collasible-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		      <Nav.Link href="#blog">Blog</Nav.Link>
		      <NavDropdown title="Resources" id="collasible-nav-dropdown">
		        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		         <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		        <NavDropdown.Divider />
		        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		      </NavDropdown>
		      <Button className='signup' onClick={() => setmodal(true)}>Sign Up</Button>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
		)
}

export default Header;