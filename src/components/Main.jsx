
/*function Main() {
		return (
				<main>
						<h3>-- Content goes here --</h3>
				</main>
		);
};

export default Main*/

function Main() {
	return (
		<main className="main-wrapper">
			<div className="top-container">
				<h3>-- Content goes here --</h3>
			</div>
			<div className="bottom-container">
				<ul>
					<li>
						<img id="img1" src="/img/buy-comics-digital-comics.png" alt="img" />
						<span>DIGITAL COMICS</span>
					</li>
					<li>
						<img id="img2" src="/img/buy-comics-merchandise.png" alt="img" />
						<span>DC MERCHANDISE</span>
					</li>
					<li>
						<img id="img3" src="/img/buy-comics-subscriptions.png" alt="img" />
						<span>SUBSCRIPTION</span>
					</li>
					<li>
						<img id="img4" src="/img/buy-comics-shop-locator.png" alt="img" />
						<span>COMIC SHOP LOCATOR</span>
					</li>
					<li>
						<img id="img5" src="/img/buy-dc-power-visa.svg" alt="img" />
						<span>DC POWER VISA</span>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Main

