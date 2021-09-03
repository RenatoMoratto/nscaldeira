import style from './Card.module.css';

function Card(props) {
    return (
        <div onClick={props.onClick} className={style.image} style={{ backgroundImage: `url(/${props.image})` }} >
            <div className={style.card}>
                <h3 className={style.title}>{props.title}</h3>
            </div>
        </div>
    );
}

export default Card;