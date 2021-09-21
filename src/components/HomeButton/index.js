import { animateScroll as scroll } from 'react-scroll';
import { AiFillHome } from 'react-icons/ai';
import style from './HomeButton.module.css';

function HomeButton() {
  return (
    <button className={style.circle} onClick={() => scroll.scrollToTop()}>
      <AiFillHome className={style.icon} />
    </button>
  );
}

export default HomeButton;
