import React from 'react';
import './hero-page.scss';
import {  GrLinkNext,GrSearch  } from 'react-icons/gr';

const Heropage = () => {

	return (
		<div className='card '>
			<div className='card-img-overlay'>
				<div className='container'>
					<div className='text'>
						<h1>Your Dream University Is Not A Dream Anymore</h1>
						<h5>Top Notch Experts | Personalized Service | Unbeatable Success Rate </h5>
					</div>
					<div className='input-container'>
					<GrSearch className='icon-search'/>
					<input className='hero-input' type='text' />
					<GrLinkNext className='icon-next' />
					</div>
				</div>
			</div>
			<img className='card-img' src=" https://images8.content-hci.com/commimg/video/CH/myhc_279666.jpg" />
		</div>
		)
}

export default Heropage;