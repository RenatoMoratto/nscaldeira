import style from './Dropdown.module.css'
import { useState } from 'react'
// import Link from 'next/link';
import { Link } from "react-scroll";

function Item(props) {
    const handleClose = () => setTimeout(props.handleClose, 100);
    return (
        <li className={style.item}>
            <Link
                onClick={handleClose}
                activeClass="active"
                to={`${props.link}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                {props.title}
            </Link>
        </li>
    );
}

function Dropdown(props) {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    }

    return (
        <ul>
            <div onClick={clickHandler}>
                <i className={`fa fa-bars fa-3x ${style.bars}`}></i>
            </div>
            {open && (
                <>
                    <div onClick={() => setOpen(false)} className={style.backdrop} />
                    <div className={style.menu}>
                        <Item handleClose={clickHandler} link="home" title="Home" />
                        <Item handleClose={clickHandler} link="sobre" title="Sobre" />
                        <Item handleClose={clickHandler} link="area-de-atuacao" title="Área de Atuação" />
                        <Item handleClose={clickHandler} link="contato" title="Contato" />
                        <Item handleClose={clickHandler} link="localizacao" title="Localização" />
                    </div>
                </>
            )}
        </ul >
    )
}

export default Dropdown;