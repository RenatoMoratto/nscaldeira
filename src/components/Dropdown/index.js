import style from './Dropdown.module.css'
import { useState } from 'react'

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
                    <li className={style.item}><a href="#home">Home</a></li>
                    <li className={style.item}><a href="#sobre">Sobre</a></li>
                    <li className={style.item}><a href="#area-de-atuacao">Área de Atuação</a></li>
                    <li className={style.item}><a href="#contato">Contato</a></li>
                    <li className={style.item}><a href="#localizacao">Localização</a></li>
                </div>
            )}
        </ul >
    )
}

export default Dropdown;