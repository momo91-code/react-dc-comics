const dccomicsLinks = [
	{ id: 1, label: "DC COMICS", href: "#" },
	{ id: 2, label: "Characters", href: "#" },
	{ id: 3, label: "Comics", href: "#" },
	{ id: 4, label: "Movies", href: "#" },
	{ id: 5, label: "Tv", href: "#" },
	{ id: 6, label: "Games", href: "#" },
	{ id: 7, label: "Videos", href: "#" },
	{ id: 8, label: "News", href: "#" },
	{ id: 9, label: "      ", href: "#" },
	{ id: 10, label: "SHOP", href: "#" },
	{ id: 11, label: "Shop DC", href: "#" },
	{ id: 12, label: "Shop DC collectibles", href: "#" },
];

const dcLinks = [
	{ id: 1, label: "DC", href: "#" },
	{ id: 2, label: "Terms of use", href: "#" },
	{ id: 3, label: "Privacy policy (new)", href: "#" },
	{ id: 4, label: "Add choices", href: "#" },
	{ id: 5, label: "Advertising", href: "#" },
	{ id: 6, label: "Jobs", href: "#" },
	{ id: 7, label: "Subscriptions", href: "#" },
	{ id: 8, label: "Talent workshop", href: "#" },
	{ id: 9, label: "CPSC certificates", href: "#" },
	{ id: 10, label: "Ratings", href: "#" },
	{ id: 11, label: "Shop help", href: "#" },
	{ id: 12, label: "Contact Us", href: "#" },
];

const sitiesLinks = [
	{ id: 1, label: "SITIES", href: "#" },
	{ id: 2, label: "DC", href: "#" },
	{ id: 3, label: "MAD magazine", href: "#" },
	{ id: 4, label: "DC kids", href: "#" },
	{ id: 5, label: "DC universe", href: "#" },
	{ id: 6, label: "DC power visa", href: "#" },
];

function Footer() {
	const handleClick = () => {
		console.log("Button cliccato dal Footer!");
	};

	return (
		<footer className="footer-wrapper">
			<div className="footer-top">
				<ul>

					{
						dccomicsLinks.map(link => {
							return <li><a href="#" key={"dccomics-" + link.id}>{link.label}</a></li>
						})
					}
				</ul>
				<ul>
					{
						dcLinks.map(link => {
							return <li><a href="#" key={"dc-" + link.id}>{link.label}</a></li>
						})
					}
				</ul>
				<ul>
					{
						sitiesLinks.map(link => {
							return <li><a href="#" key={"sities-" + link.id}>{link.label}</a></li>
						})
					}
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

