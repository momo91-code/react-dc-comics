
function Footer() {
	const handleClick = () => {
		console.log("Button cliccato dal Footer!");
	};

	return (
		<footer className="footer-wrapper">
			<div className="footer-top">
				<ul>
					<h3>DC COMICS</h3>
					<li>Characters</li>
					<li>Comics</li>
					<li>Movies</li>
					<li>Tv</li>
					<li>Games</li>
					<li>Videos</li>
					<li>News</li>
					<li>      </li>
					<h3>SHOP</h3>
					<li>Shop DC</li>
					<li>Shop DC collectibles</li>
				</ul>

				<ul>
					<h3>DC</h3>
					<li>Terms of use</li>
					<li>Privacy policy (new)</li>
					<li>Add choices</li>
					<li>Advertising</li>
					<li>Jobs</li>
					<li>Subscriptions</li>
					<li>Talent workshop</li>
					<li>CPSC certificates</li>
					<li>Ratings</li>
					<li>Shop help</li>
					<li>Contact Us</li>
				</ul>

				<ul>
					<h3>SITES</h3>
					<li>DC</li>
					<li>MAD magazine</li>
					<li>DC kids</li>
					<li>DC universe</li>
					<li>DC power visa</li>
				</ul>
			</div>
			<div className="footer-bottom">
				<button onClick={handleClick}>
					SIGN-UP NOW!
				</button>
				<h3>FOLLOW US</h3>
				<ul>
					<img id="foot1" src="/img/footer-facebook.png" alt="img" />
					<img id="foot2" src="/img/footer-twitter.png" alt="img" />
					<img id="foot3" src="/img/footer-youtube.png" alt="img" />
					<img id="foot4" src="/img/footer-pinterest.png" alt="img" />
					<img id="foot5" src="/img/footer-periscope.png" alt="img" />
				</ul>
			</div>
		</footer>
	);
}


export default Footer

