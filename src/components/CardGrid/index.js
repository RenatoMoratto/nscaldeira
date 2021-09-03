import style from './CardGrid.module.css';
import { useState } from 'react';

import TextCard from '../TextCard';
import Card from '../Card';

function CardGrid() {
    const [text, setText] = useState('');

    const handleClick = (area) => {
        console.log("Mudou --> ", area)
        setText(area);
    }

    const civil = "civil"

    const consum = "consum"

    const admin = "admin"

    const prev = "prev"

    return (
        <>
            {text != null && <div onClick={() => setText(null)} className={style.backdrop} />}
            <div className={style.grid}>
                <Card onClick={() => setText("civil")} className={style.civil} title="Direito Civil" image="civil.jfif" />
                <Card onClick={() => setText("consum")} className={style.consum} title="direito do Consumidor" image="consumidor.jpg" />
                <Card onClick={() => setText("admin")} className={style.admin} title="direito Administrativo" image="administrativo.jpg" />
                <Card onClick={() => setText("prev")} className={style.prev} title="direito Previdenciário" image="previdenciario.jpg" />
            </div>
            {text === "civil" && <TextCard text={civil} />}
            {text === "consum" && <TextCard text={consum} />}
            {text === "admin" && <TextCard text={admin} />}
            {text === "prev" && <TextCard text={prev} />}
        </>
    );
}

export default CardGrid;