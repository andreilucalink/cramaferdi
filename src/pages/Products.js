import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/products.css';
import AOS from 'aos';
import Img from 'react-image';
import { Spinner } from 'react-bootstrap';

function Products() {
	useEffect(() => {
		window.scroll(0, 0);
		if (window.innerWidth > 965 && window.innerWidth < 1201) {
			document.getElementById('animation2').removeAttribute('data-aos');
			document.getElementById('animation3').setAttribute('data-aos', 'zoom-in');
			document.getElementById('animation4').setAttribute('data-aos', 'zoom-in');
			document.getElementById('animation5').setAttribute('data-aos', 'zoom-in');
			document.getElementById('animation6').setAttribute('data-aos', 'zoom-in');
		}
		AOS.init({
			once: true,
			duration: 1000
		});
	}, []);
	let view = 'Lista';
	let products = 'Produse';
	let details = 'Detalii';
	if (window.localStorage.getItem('language') === 'EN') {
		view = 'View';
		products = 'Products';
		details = 'View More';
	}

	return (
		<div className="products-page">
			<header className="main-header">
				<h1>
					<span> {view} </span> {products}
				</h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolores!</p>
			</header>
			<main className="products-container">
				<div className="card-cell">
					<section className="card-info">
						<div className="img" id="product1" />
						<div>
							<section>
								<h3>Product 1</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias magnam
									maxime at eius necessitatibus accusantium eaque, sapiente, animi fugit repudiandae
									delectus, explicabo voluptatem quam pariatur veniam corporis fuga! Laudantium.
								</p>
							</section>
							<Link to='/products/wine1' className="btn">
								{details}
							</Link>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" id="animation2" data-aos="fade-right" data-aos-offset="150">
						<div className="img" id="product2" />
						<div>
							<section>
								<h3>Product 2</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam recusandae harum
									molestiae eveniet incidunt!
								</p>
							</section>
							<a href="#start" className="btn">
								{details}
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" id="animation3" data-aos="fade-left" data-aos-offset="150">
						<div className="img" id="product3" />
						<div>
							<section>
								<h3>Product 3</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias magnam
									maxime at eius necessitatibus accusantium eaque, sapiente, animi fugit repudiandae
									delectus, explicabo voluptatem quam pariatur veniam corporis fuga! Laudantium.
								</p>
							</section>
							<a href="#start" className="btn">
								{details}
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" id="animation4" data-aos="fade-right" data-aos-offset="150">
						<div className="img" id="product4" />
						<div>
							<section>
								<h3>Product 4</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias magnam
									maxime at eius necessitatibus accusantium eaque, sapiente, animi fugit repudiandae
									delectus, explicabo voluptatem quam pariatur veniam corporis fuga! Laudantium.
								</p>
							</section>
							<a href="#start" className="btn">
								{details}
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" id="animation5" data-aos="fade-left" data-aos-offset="150">
						<div className="img" id="product5" />
						<div>
							<section>
								<h3>Product 5</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione corporis cumque,
									optio sit error necessitatibus corrupti dolor ad ipsam. Quibusdam.
								</p>
							</section>
							<a href="#start" className="btn">
								{details}
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell" id="animation6" data-aos="fade-right" data-aos-offset="150">
					<section className="card-info">
						<div className="img" id="product6" />
						<div>
							<section>
								<h3>Product 6</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet ipsam minima,
									veniam aut id? Odit, nulla itaque. Neque aspernatur officia quos. Nostrum placeat
									itaque facere nam recusandae delectus architecto.
								</p>
							</section>
							<a href="#start" className="btn">
								{details}
							</a>
						</div>
					</section>
				</div>
			</main>
			<a role="button" href="#start" data-scroll>
				<img src={require('../img/up-ar.svg')} alt="Go Up" className="scroll-products" />
			</a>
		</div>
	);
}

export default Products;
