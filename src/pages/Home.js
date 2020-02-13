import React, { useEffect } from 'react';
import AOS from 'aos';
import '../css/home.css';

function Home() {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 1000
		});
	}, []);

	return (
		<main id="home-page">
			<div className="pimg1">
				<div className="ptext" id="intro-text">
					<span className="border">Crama Ferdi </span>
				</div>
			</div>
			<section className="section section-dark">
				<div className="section-text1" data-aos="fade-up">
					<h2>Section 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos provident quo qui minus
						necessitatibus voluptas sit, minima nulla saepe tempore non, labore molestiae modi accusantium
						illum. Saepe exercitationem similique fuga minima nihil, aut qui quam sint, eveniet nobis harum
						eaque necessitatibus neque! Optio consequatur incidunt quia, nobis expedita in perferendis omnis
						culpa nesciunt, officia, saepe necessitatibus nulla ipsa fuga iste quaerat error. Voluptates
						ipsa nihil nemo. Minima quia voluptatum tempora dolor iure ea sequi dignissimos non vitae, est
						exercitationem suscipit natus ab cupiditate doloremque. Harum inventore deserunt hic enim, est
						facilis maxime. Recusandae dolor minus culpa voluptas nemo! Odit!
					</p>
				</div>
			</section>
			<div className="pimg2">
				<div className="ptext">
					<span className="border trans">Image 2 Text</span>
				</div>
			</div>
			<section className="section section-light">
				<div className="section-text2" data-aos="fade-up">
					<h2>Section 2</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos provident quo qui minus
						necessitatibus voluptas sit, minima nulla saepe tempore non, labore molestiae modi accusantium
						illum. Saepe exercitationem similique fuga minima nihil, aut qui quam sint, eveniet nobis harum
						eaque necessitatibus neque! Optio consequatur incidunt quia, nobis expedita in perferendis omnis
						culpa nesciunt, officia, saepe necessitatibus nulla ipsa fuga iste quaerat error. Voluptates
						ipsa nihil nemo. Minima quia voluptatum tempora dolor iure ea sequi dignissimos non vitae, est
						exercitationem suscipit natus ab cupiditate doloremque. Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Est laudantium perferendis alias ab explicabo eius sint fugiat dolorum
						voluptatum natus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nihil
						earum doloribus, ad deleniti id ipsa nulla. Excepturi, dignissimos. Suscipit odit ipsam
						reprehenderit, vel fugiat earum dolor velit aspernatur distinctio!
					</p>
				</div>
			</section>
			<div className="pimg3">
				<div className="ptext">
					<span className="border trans">Image 3 Text</span>
				</div>
			</div>
			<section className="section section-light">
				<div className="section-text3" data-aos="fade-up">
					<h2>Section 3</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptates velit incidunt
						magnam ipsum in accusantium, dolorem sequi temporibus pariatur iusto et blanditiis id fuga
						asperiores voluptatibus ex modi laboriosam fugiat ipsam autem a quo nulla vel. Dolorem tenetur,
						facere voluptatibus maiores, quis quaerat quam nam sit porro fugit dicta necessitatibus
						consequatur ullam voluptates reiciendis. Reprehenderit, cumque! Magni, ducimus soluta.
					</p>
				</div>
			</section>
			<div className="pimg4">
				<a role="button" href="#start" data-scroll>
					<img src={require('../img/up-ar.svg')} alt="Go Up" className="scroll-home" />
				</a>
			</div>
		</main>
	);
}

export default Home;
