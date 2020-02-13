import React, { useEffect } from 'react';
import '../css/contact.css';
import AOS from 'aos';

function Contact() {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1300
		});
	});
	return (
		<section id="contact-body">
			<header className="contact-header">
				<h1>
					<span>Meet</span> the team
				</h1>
				<p>Have any questions? We're here to help!</p>
			</header>
			<div className="contact-wrapper">
				<div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
					<div className="profile-bg" />
					<div className="profile-img" id="member1" />
					<div className="contact-details">
						<h3>John Doe</h3>
						<img src={require('../img/romania3.png')} alt="Country" className="country" />
						<p>Product Manager</p>
						<hr />
						<div className="phone">
							<a role="button" href="tel:+40-0735-796-273" className="phone-button">
								<img className="phone-img" src={require('../img/call2.svg')} alt="Call" />
								<span>+40-0711-222-333 </span>
							</a>
						</div>
						<hr />
						<div className="email">
							<a role="button" href="mailto:test@gmail.com" className="email-button">
								<img className="email-img" src={require('../img/gmail.svg')} alt="Call" />
								<span>member1@mail.com</span>
							</a>
						</div>
					</div>
				</div>
				<div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
					<div className="profile-bg" />
					<div className="profile-img" id="member2" />
					<div className="contact-details">
						<h3>Michael Davis</h3>
						<img src={require('../img/romania3.png')} alt="Country" className="country" />
						<p>Sales Consultant</p>
						<hr />
						<div className="phone">
							<a role="button" href="tel:+40-0735-796-273" className="phone-button">
								<img className="phone-img" src={require('../img/call2.svg')} alt="Call" />
								<span>+40-0711-222-333 </span>
							</a>
						</div>
						<hr />
						<div className="email">
							<a role="button" href="mailto:test@gmail.com" className="email-button">
								<img className="email-img" src={require('../img/gmail.svg')} alt="Call" />
								<span>member2@mail.com</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
