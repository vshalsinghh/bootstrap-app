import React,{useState, useEffect} from 'react';
import './body.scss';
import Carousal from '../carousal/carousal';
import Button from 'react-bootstrap/Button';
import {MdSchool} from 'react-icons/md';
import {GiTie} from 'react-icons/gi';
import {GiSchoolBag} from 'react-icons/gi';

const Body = () => {
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
		<div className='body'>
			<div className='mentors'>
				<div className='text'>
					<h1>Your Mentors </h1>
					<h5>
					Leverage Edu has more than 2000+ mentors who work closely with you to
					 give a realistic viewpoint about your career goals and enable you to build a 
					 successful career.
					 </h5>
					 <Carousal />
				</div>
			</div>
			<div className='right-step'>
				<div className='text'>
					<h1>
					Find The Next Right Step of Your Career 
					</h1>
				</div>
				<div className='right-step-content'>
					<div className='content-card'>
						<div className='card-head'>
						<h1><GiSchoolBag /></h1>
						<h2>School Students(9th-12th)</h2>
						</div>
						<ul>
						<li>Not sure which stream to choose after 10th?</li>
						<li>Confused about the right career for yourself?</li>
						<li>Want to know if your hobbies can be turned into rewarding careers? </li>
						</ul>
						<a href='#'><h2>Learn More ></h2></a>
					</div>
					<div className='content-card'>
						<div className='card-head'>
						<h1><MdSchool /></h1>
						<h2>University Students(Graduate-Postgraduate)</h2>
						</div>
						<ul>
						<li>Not sure which stream to choose after 10th?</li>
						<li>Confused about the right career for yourself?</li>
						<li>Want to know if your hobbies can be turned into rewarding careers? </li>
						</ul>
						<a href='#'><h2>Learn More ></h2></a>
					</div>
					<div className='content-card'>
						<div className='card-head'>
						<h1><GiTie /></h1>
						<h2>Working Professionals</h2>
						</div>
						<ul>
						<li>Not sure which stream to choose after 10th?</li>
						<li>Confused about the right career for yourself?</li>
						<li>Want to know if your hobbies can be turned into rewarding careers? </li>
						</ul>
						<a href='#'><h2>Learn More ></h2></a>
					</div>
				</div>
			</div>
			<div className='consult-us'>
				<div className='text'>
				<h5>Find Solutions To All Your Career-Related Concerns</h5>
				<h1>Schedule a Free Consultation</h1>
				</div>
				<Button className='consult' onClick={() => setmodal(true)}><a href='#modal'>Book Your 30min Export Career Advice</a>   ></Button>
			</div>
			<div className='section'>
				<div className='text'>
					<h1>How We Are Different
					</h1>
					<h5>
					Leverage Edu’s Proprietary AI Algorithm complemented with its data-driven 
					millennial-first approach ensures that every ’Leverage Edu Student Experience’ 
					is supremely unique. It brings access to advice from top mentors, from across 
					the world, for your career - personalized, and comprehensive.
					</h5>
				</div>
				<div className='section-img'>
				</div>
			</div>
			<div className='section section2'>
				<div className='section-img'>
				</div>
				<div className='text'>
					<h1>Premium Consulting Services for Ivy League & equivalent Universities 
					</h1>
					<h5>
					Comprehensive & unique head coach + mentor-led university admissions & career 
					advice, right from helping you discover what’s right to guiding you to make it 
					possible, financing it, and getting to the dorm room. 
					</h5>
					<div className='section2-content'>
						<div className='small-card'>
							<img src='https://leverageedunew.s3.us-east-1.amazonaws.com/assets/img/home/universities.svg' />
							<h5>Top University Applications</h5>
							<h5>World’s most intensive career-led process where student works with top consultants & matched mentors. </h5>
							<h5><a href='#'>Explore ></a></h5>
						</div>
						<div className='small-card'>
							<img src='https://leverageedunew.s3.us-east-1.amazonaws.com/assets/img/home/professor.svg' />
							<h5>Top University Applications</h5>
							<h5>World’s most intensive career-led process where student works with top consultants & matched mentors. </h5>
						<h5><a href='#'>Explore ></a></h5>
					</div>
					</div>
				</div>

			</div>

		</div>
		);
}

export default Body;