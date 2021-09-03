import style from './TextCard.module.css';

function TextCard({ text, image }) {

    return (
        <div className={style['content-image']} style={{ backgroundImage: `url(/${image})` }}>
            <div className={style.content}>
                {text}
            </div>
        </div>
    )
}

export default TextCard;