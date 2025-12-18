const links = [
	{
		id: 1,
		text: "CHARACTERS",
		url: "#",
		active: false
	},
	{
		id: 2,
		text: "COMICS",
		url: "#",
		active: true
	},
	{
		id: 3,
		text: "MOVIES",
		url: "#",
		active: false
	},
	{
		id: 4,
		text: "TV",
		url: "#",
		active: false
	},
	{
		id: 5,
		text: "GAMES",
		url: "#",
		active: false
	},
	{
		id: 6,
		text: "COLLECTIBLES",
		url: "#",
		active: false
	},
	{
		id: 7,
		text: "VIDEOS",
		url: "#",
		active: false
	},
	{
		id: 8,
		text: "FANS",
		url: "#",
		active: false
	},
	{
		id: 9,
		text: "NEWS",
		url: "#",
		active: false
	},
	{
		id: 10,
		text: "SHOP",
		url: "#",
		active: false
	},
];
function Header() {
	return (
		<header>
			<nav>
				<img id="logo" src="/img/dc-logo.png" alt="logo" />
				<ul>
					{
						links.map((link, i) => {
							let usableClass = (link.active === true) ? "activeLink" : "";
							return <li key={i} className={usableClass}><a href={link.url}>{link.text}</a></li>
						})
					}
				</ul>
			</nav>
		</header>
	);
};

export default Header
