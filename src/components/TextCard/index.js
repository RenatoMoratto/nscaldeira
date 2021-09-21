import style from './TextCard.module.css';

function TextCard(props) {
  return (
    <div
      className={style['content-image']}
      style={{ backgroundImage: `url(/${props.image})` }}
    >
      <div className={style.content}>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default TextCard;
