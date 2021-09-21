import style from './Footer.module.css';

function Footer(props) {
  return (
    <footer className={style.footer}>
      <p>
        Feito com <i className="fa fa-heart" aria-hidden="true"></i> por{' '}
        <a
          href="https://github.com/RenatoMoratto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Renato Willyan
        </a>
      </p>
    </footer>
  );
}
export default Footer;
