import style from './CardGrid.module.css';
import Card from '../Card';

function CardGrid(props) {
    return (
        <div className={style.grid}>
            <Card className={style.civil} title="Direito Civil" image="civil.jfif" />
            <Card className={style.consum} title="direito do Consumidor" image="consumidor.jpg" />
            <Card className={style.admin} title="direito Administrativo" image="administrativo.jpg" />
            <Card className={style.prev} title="direito Previdenciário" image="previdenciario.jpg" />
        </div>
    );
}

export default CardGrid;