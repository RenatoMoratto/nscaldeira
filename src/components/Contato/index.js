import style from './Contato.module.css';

export default function Contato(props) {
  return (
    <section className={style.contato}>
      <p>Telefone: {props.tel}</p>
      <p>Celular: {props.phone}</p>
      <p>E-mail: {props.email}</p>
    </section>
  );
}
