import React, { useEffect } from 'react';
import AOS from 'aos';
import '../css/home.css';
import { Spinner } from 'react-bootstrap';
import Img from 'react-image';
import ConfirmAgeModal from '../layout/ConfirmAgeModal';

function Home() {
	useEffect(() => {
		window.scroll(0, 0);
		AOS.init({
			once: true,
			duration: 1000
		});
	},[]);

	function noScroll() {
		window.scrollTo(0, 0);
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

	useEffect(() => {
		const age = sessionStorage.getItem('clientAge');
		if(!age || age === 'invalid'){
			window.addEventListener('scroll', noScroll);
			document.getElementById("confirmModal").classList.remove('hide-confModal');
			document.getElementById("home-page").classList.add('hide-home');
		}
	},[])

	return (
		<div className="home-body" id="home-body">
		<ConfirmAgeModal scrollListener={noScroll}/>
		<a role="button" href="#start" data-scroll >
			<img src={require('../img/up-ar.svg')} alt="Go Up" className="back-to-top-btn" id="home-scroll-up" />
		</a>
		<main id="home-page">
			<div className="pimg1">
				<Img
					className="ptext"
					id="home-logo"
					src={require('../img/logo-ferdi.png')}
					loader={<Spinner animation="grow" className="ptext logo-loader" />}
				/>
			</div>
			<section className="section section-light">
				<div className="section-text1" data-aos="fade-up">
					<h2>Despre cramă</h2>
					<p>
					<b>Crama Ferdi</b> este o cramă de tip boutique – premium care oferă iubitorului de vin privilegiul de a degusta un vin lucrat exclusiv manual și în ediții foarte limitate. Sistemul de vinificație este unul de perspectivă îndelungată, având în vedere că vinurile roșii sunt maturate, de la 1 la 2 ani, în butoaie de stejar american, francez și românesc, reînnoite la fiecare 3 - 4 ani.
					</p>
				</div>
			</section>
			<div className="pimg2">
				<div className="ptext">
					{/* <span className="border trans">Locaţie</span> */}
				</div>
			</div>
			<section className="section section-light" id="trigger-home-scroll">
				<div className="section-text2" data-aos="fade-up">
					<h2 style={{marginBottom: "20px"}}>Locaţie</h2>
					<div className="productionLogos">
						<img src={require('../img/map.svg')} alt="wine"/>
					</div>
					<p>
					Via se află în însorita regiune viticolă Dealu Mare, pe o suprafață de 3 hectare și are o vechime de 10 ani. Proprietarul cramei este și cel care face vinul, ghidându-se după deviza că vinul de calitate își are obârșia în vie, de unde începe și selecția strugurilor.
					</p>
				</div>
			</section>
			<div className="pimg3">
				<div className="ptext">
					{/* <span className="border trans">Image 3 Text</span> */}
				</div>
			</div>
			<section className="section section-light">
				<div className="section-text3" data-aos="fade-up">
					<h2>Producţie</h2>
					<div className="productionLogos">
						<img src={require('../img/cork.svg')} alt="wine"/>
						<img src={require('../img/wine.svg')} alt="wine"/>
						<img src={require('../img/barrel.svg')} alt="wine"/>
					</div>
					<p>
					Ca urmare, crama produce vin din 10 soiuri de struguri, dintre care 7 roșii: Fetească Neagră, Cabernet Sauvignon, Cabernet Franc, Shiraz, Merlot, Burgund Mare, Pinot Noir și 3 albe: Sauvignon Blanc, Tămâioasa Românească și Riesling Italian, producția anuală totală fiind aproximativ de 10.000 de sticle. 
					<br/><br/>
					Vinurile Cramei Ferdi se disting prin naturalețe, consistență, aciditate și eleganță. Utilizarea metodei tradiționale de făcut vinul are ca rezultat o gamă de vinuri echilibrate și rafinate.
					</p>	
				</div>
			</section>
			<div className="pimg4">
				{/* <div className="ptext">
					<span className="border">ENJOY!</span>
				</div> */}
				{/* <a role="button" href="#start" data-scroll>
					<img src={require('../img/up-ar.svg')} alt="Go Up" className="scroll-home" />
				</a> */}
			</div>
	
		</main>
		</div>
	);
}

export default Home;
