import React, { useEffect } from 'react';
import '../css/contact.css';
import AOS from 'aos';

function Contact() {
	useEffect(() => {
		window.scroll(0, 0);
		AOS.init({
			once: true,
			duration: 1300
		});
		if(window.innerWidth < 501) {
			document.getElementById('first-card').removeAttribute('data-aos-delay')
			document.getElementById('first-card').removeAttribute('data-aos')
		}
		const age = window.sessionStorage.getItem('clientAge');
		if(!age || age === 'invalid'){
			window.location.href = "/";
		}
	},[]);

	let text1 = 'Echipa';
	let text2 = 'Noastră';
	let subtitle = 'Pentru detalii şi comenzi ne puteţi contacta la numărul de telefon sau adresa de e-mail de mai jos';
	if (window.localStorage.getItem('language') === 'EN') {
		text1 = 'Our';
		text2 = 'Team';
		subtitle = "For orders or any questions you can find us at the following contact details";
	}

	let innerHeigth = window.innerHeight;
	function getHeigth() {
		if (document.getElementById('home-scroll-up') === null) return;
		if(window.scrollY > (innerHeigth/1.5))
			document.getElementById('home-scroll-up').classList.add('show-home-sroll-btn');	
		else 
			document.getElementById('home-scroll-up').classList.remove('show-home-sroll-btn');	
	}
	window.addEventListener("scroll", getHeigth);

	return (
		<section id="contact-body">
			<a role="button" href="#start" data-scroll>
				<img src={require('../img/up-ar.svg')} alt="Go Up" className="back-to-top-btn" id="home-scroll-up" />
			</a>
			<header className="contact-header">
				<h1>
					<span>{text1}</span> {text2}{' '}
				</h1>
				<p>{subtitle}</p>
			</header>
			<div className="contact-wrapper">
				<div className="contact-card" id="first-card" data-aos="zoom-in" data-aos-delay="200">
					<div className="profile-bg" />
					<div className="profile-img" id="member1" />
					<div className="contact-details">
						<h3>Fernando Mihăilescu</h3>
						<img src={require('../img/romania3.png')} alt="Country" className="country" />
						
					{/* 	<div className="phone">
							<a role="button" href="tel:+40-0735-796-273" className="phone-button">
								<img className="phone-img" src={require('../img/call2.svg')} alt="Call" />
								<span>+40-0711-222-333 </span>
							</a>
						</div> */}
						<div className="contact-bar ferdi-bar" />
						<div className="email ferdi-mail">
							<a role="button" href="mailto:test@gmail.com" className="email-button">
								<img className="email-img" src={require('../img/gmail.svg')} alt="Call" />
								<span>office@cramaferdi.ro</span>
							</a>
						</div>
					</div>
				</div>
				<div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
					<div className="profile-bg" />
					<div className="profile-img" id="member2" />
					<div className="contact-details">
						<h3>Paul Mihăilescu</h3>
						<img src={require('../img/romania3.png')} alt="Country" className="country" />
						<div className="contact-bar paul-bar" />
						<div className="phone">
							<a role="button" href="tel:+40-0729-884-940" className="phone-button">
								<img className="phone-img" src={require('../img/call2.svg')} alt="Call" />
								<span>0729-884-940 </span>
							</a>
						</div>
					</div>
				</div>
				<div className="contact-card" data-aos="zoom-in" data-aos-delay="200">
					<div className="profile-bg" />
					<div className="profile-img" id="member3" />
					<div className="contact-details">
						<h3>Ofelia Marian</h3>
						<img src={require('../img/romania3.png')} alt="Country" className="country" />
						<div className="contact-bar paul-bar" />
						<div className="phone">
							<a role="button" href="tel:+40-0729-884-940" className="phone-button">
								<img className="phone-img" src={require('../img/call2.svg')} alt="Call" />
								<span>0723-768-322 </span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
