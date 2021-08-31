import { animateScroll as scroll } from 'react-scroll';
import style from './HomeButton.module.css';

function HomeButton(props) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <button className={style.circle} onClick={scrollToTop}>
            <i className={`fa fa-home fa-2x ${style.icon}`}></i>
        </button>
    )
}

export default HomeButton;