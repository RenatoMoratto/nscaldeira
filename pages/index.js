import Head from '../src/components/Head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo!
        </h1>

        <p className={styles.description}>
          Em breve este site poderá te receber, por enquanto acesse <a href="https://www.linkedin.com/in/nath%C3%A1lia-caldeira-052663129/">aqui</a>.
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/RenatoMoratto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por RenatoMoratto
        </a>
      </footer>
    </div>
  )
}
