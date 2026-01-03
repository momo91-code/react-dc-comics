
import style from "./ComicsCard.module.css";

function ComicsCard(props) {
    return (
        <div className={style.topContainer}>
            {props.comics.map((comic, index) => {
                if (index >= 12) return null;

                return (
                    <div key={comic.id} className={style.comicCard}>
                        <div className={style.imageWrapper}>
                            <img
                                className={style.comicImage}
                                src={comic.thumb}
                                alt={comic.title}
                            />
                        </div>
                        <h4 className={style.comicTitle}>{comic.title}</h4>
                    </div>
                );
            })}
        </div>
    );
}

export default ComicsCard;
