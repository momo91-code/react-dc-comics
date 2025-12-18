import comics from "../components/comics"

function Main() {
	return (
		<main className="main-wrapper">
			<h3 className="title">CURRENT SERIES</h3>
			<div className="top-container">
				{comics.map((comic, index) => {
					if (index >= 12) return null;
					return (
						<div key={comic.id} className="comic-card">
							<div className="image-wrapper">
								<img src={comic.thumb} alt={comic.title} />
							</div>
							<h4>{comic.title}</h4>
						</div>
					);
				})}
				<div className="load-more">
					<button>LOAD MORE</button>
				</div>
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
		</main >
	);
}

export default Main


