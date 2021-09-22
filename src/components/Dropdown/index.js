import style from './Dropdown.module.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu } from 'react-icons/hi';
import { dropdownData } from './dropdownData';

function Item(props) {
  const handleClose = () => setTimeout(props.handleClose, 100);
  return (
    <li className={style.item}>
      <Link
        onClick={handleClose}
        activeClass="active"
        to={props.link}
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
  };

  return (
    <ul>
      <HiMenu onClick={clickHandler} className={style.icon} />
      {open && (
        <>
          <div onClick={() => setOpen(false)} className={style.backdrop} />
          <div className={style.menu}>
            {dropdownData.map((item) => {
              return (
                <Item
                  key={item.title}
                  handleClose={clickHandler}
                  link={item.link}
                  title={item.title}
                />
              );
            })}
          </div>
        </>
      )}
    </ul>
  );
}

export default Dropdown;
