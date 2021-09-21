import { useState } from 'react';
import style from './form.module.css';

export default function Form(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Escreva aqui sua mensagem');

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,
      message,
    };

    console.log(data);

    setName('');
    setPhone('');
    setEmail('');
    setMessage('Escreva aqui sua mensagem');
  };

  return (
    <div className={style.form}>
      <form
        id="contactForm"
        method="get"
        action="mailto:renatinhomoratto@gmail.com"
        target="_blank"
        onSubmit={submitHandler}
        className={style.form}
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="(99) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="30"
          minLength="20"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/*<p>Telefone: <a href="tel:4399980-6691">(43) 99980-6691</a></p>
            <p>Email: <a href="mailto:nathaliascaldeira@gmail.com">nathaliascaldeira@gmail.com</a></p>*/}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
