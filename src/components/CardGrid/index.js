import style from './CardGrid.module.css';
import { useState } from 'react';

import TextCard from '../TextCard';
import Card from '../Card';

function CardGrid() {
  const [area, setArea] = useState('');
  const [bgImage, setBgImage] = useState('');

  const civil = 'civil';
  const consum = 'consum';
  const admin = 'admin';
  const prev = 'prev';

  const clickHandler = (passedArea, passedImage) => {
    if (area === passedArea) {
      setArea(false);
    } else {
      setArea(passedArea);
      setBgImage(passedImage);
    }
  };

  return (
    <>
      {!!area && <div onClick={() => setArea(false)} className={style.backdrop} />}
      <div className={style.grid}>
        <Card
          onClick={() => clickHandler(civil, 'civil.jfif')}
          className={style.civil}
          title="Direito Civil"
          image="civil.jfif"
        />
        <Card
          onClick={() => clickHandler(consum, 'consumidor.jpg')}
          className={style.consum}
          title="direito do Consumidor"
          image="consumidor.jpg"
        />
        <Card
          onClick={() => clickHandler(admin, 'administrativo.jpg')}
          className={style.admin}
          title="direito Administrativo"
          image="administrativo.jpg"
        />
        <Card
          onClick={() => clickHandler(prev, 'previdenciario.jpg')}
          className={style.prev}
          title="direito Previdenciário"
          image="previdenciario.jpg"
        />
      </div>
      {!!area && <TextCard content={area} image={bgImage} />}
    </>
  );
}

export default CardGrid;
