import React from 'react';
import './carousal.scss';
import Carousel from 'react-bootstrap/Carousel';

const Carousalcontainer = ({heading}) => {

	return (
		<div className='carousal'>
		<h1>{heading}</h1>
			<Carousel controls={true}>
			  <Carousel.Item>
			  <div className='carousal-item'>
				  <div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    	<div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    	<div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    </div>
			  </Carousel.Item>
			  <Carousel.Item>
			  <div className='carousal-item'>
				  <div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
				    <div className='card-content'>
				    	<h3>Name</h3>
				    	<p>some text</p>
			    	</div>
			    	</div>
			    	<div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    	<div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    </div>
			  </Carousel.Item>
			  <Carousel.Item>
			  <div className='carousal-item'>
				  <div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    	<div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    	<div className='carousal-card'>
				    <img
				      className="card-img"
				      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
				      alt="First slide"
				    />
			    	<h3>Name</h3>
			    	<p>some text</p>
			    	</div>
			    </div>
			  </Carousel.Item>
			</Carousel>
		</div>
		)
}

export default Carousalcontainer;