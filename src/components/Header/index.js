import style from './Header.module.css';
import Image from 'next/image';
import Dropdown from '../Dropdown';

function Header(props) {
    return (
        <header className={style.header}>
            <div className={style.topbar}>
                <div className={style.logo}>
                    <Image
                        src="/logo.svg"
                        layout='fill'
                        alt="Logo da Nathália S. Caldeira."
                    />
                </div>
                <div className={style.identification}>
                    <h1 className={style.title}>Nathália S. Caldeira</h1>
                    <div className={style.line}></div>
                    <span className={style["sub-title"]}>Advogada</span>
                </div>
                <Dropdown/>
            </div>
        </header>
    )
}

export default Header;