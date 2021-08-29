import style from './Dropdown.module.css'
import { useState } from 'react'

function Item(props) {
    return (
        <li className={style.item}><a href={`#${props.link}`}>{props.title}</a></li>
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
                <i className="fa fa-bars fa-3x"></i>
            </div>
            {open && (
                <div className={style.menu}>
                    <Item link="home" title="Home" />
                    <Item link="sobre" title="Sobre" />
                    <Item link="area-de-atuacao" title="Área de Atuação" />
                    <Item link="contato" title="Contato" />
                    <Item link="localizacao" title="Localização" />
                </div>
            )}
        </ul >
    )
}

export default Dropdown;