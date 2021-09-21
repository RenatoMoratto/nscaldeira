import style from './Localizacao.module.css';

export default function Localizacao() {
  return (
    <>
      <div className={style.endereco}>
        <p>R. Senador Souza Naves, 282, Sala 702 - Centro</p>
        <p>Londrina - PR, 86010-160</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.875781508695!2d-51.16080838118508!3d-23.313884053882923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb436096d52ea9%3A0x3817c2184091835!2sCondom%C3%ADnio%20Centro%20Empresarial%20Col%C3%BAmbia!5e0!3m2!1spt-BR!2sbr!4v1629345911742!5m2!1spt-BR!2sbr"
        width="100%"
        height="250"
        loading="lazy"
      />
    </>
  );
}
