import comics from "../data/comics";
import style from "./Main.module.css";
import ComicsCard from "./ComicsCard"

function Main() {
	return (
		<main className={style.mainWrapper}>
			<h3 className={style.title}>CURRENT SERIES</h3>
			<ComicsCard comics={comics} />

			<div className={style.loadMoreContainer}>
				<button className={style.loadMoreButton}>LOAD MORE</button>
			</div>
			<div className={style.bottomContainer}>
				<ul className={style.socialList}>
					<li className={style.socialItem}>
						<img className={style.logo1} src="/img/buy-comics-digital-comics.png" alt="img" />
						<span>DIGITAL COMICS</span>
					</li>
					<li className={style.socialItem}>
						<img className={style.logo2} src="/img/buy-comics-merchandise.png" alt="img" />
						<span>DC MERCHANDISE</span>
					</li>
					<li className={style.socialItem}>
						<img className={style.logo3} src="/img/buy-comics-subscriptions.png" alt="img" />
						<span>SUBSCRIPTION</span>
					</li>
					<li className={style.socialItem}>
						<img className={style.logo4} src="/img/buy-comics-shop-locator.png" alt="img" />
						<span>COMIC SHOP LOCATOR</span>
					</li>
					<li className={style.socialItem}>
						<img className={style.logo5} src="/img/buy-dc-power-visa.svg" alt="img" />
						<span>DC POWER VISA</span>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Main;

