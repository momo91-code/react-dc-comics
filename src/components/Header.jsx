import links from "../data/HeaderLinks";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<img className={styles.logo} src="/img/dc-logo.png" alt="logo" />

				<ul className={styles.navList}>
					{links.map((link, i) => {
						const liClass = link.active ? styles.activeLink : styles.navItem;
						return (
							<li key={i} className={liClass}>
								<a href={link.url}>{link.text}</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
