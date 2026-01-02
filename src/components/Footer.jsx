import { dccomicsLinks, dcLinks, sitiesLinks } from "../data/FooterSections";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footerTop}>
				<ul>
					{dccomicsLinks.map(link => (
						<li key={link.id}>
							<a href={link.href}>{link.label}</a>
						</li>
					))}
				</ul>

				<ul>
					{dcLinks.map(link => (
						<li key={link.id}>
							<a href={link.href}>{link.label}</a>
						</li>
					))}
				</ul>

				<ul>
					{sitiesLinks.map(link => (
						<li key={link.id}>
							<a href={link.href}>{link.label}</a>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.footerBottom}>
				<button className={styles.footerButton}>SIGN-UP NOW!</button>
				<h3 className={styles.footerTitle}>FOLLOW US</h3>

				<ul className={styles.socialList}>
					<li><img className={styles.icon} src="/img/footer-facebook.png" alt="Facebook" /></li>
					<li><img className={styles.icon} src="/img/footer-twitter.png" alt="Twitter" /></li>
					<li><img className={styles.icon} src="/img/footer-youtube.png" alt="YouTube" /></li>
					<li><img className={styles.icon} src="/img/footer-pinterest.png" alt="Pinterest" /></li>
					<li><img className={styles.icon} src="/img/footer-periscope.png" alt="Periscope" /></li>
				</ul>
			</div>


		</footer>
	)
};

export default Footer;



