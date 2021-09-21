import Head from '../src/components/Head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Section from '../src/components/Section';
import style from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import HomeButton from '../src/components/HomeButton';
import CardGrid from '../src/components/CardGrid';
import Contato from '../src/components/Contato';
import Localizacao from '../src/components/Localizacao';

export default function Home(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    return () => {
      window.onscroll();
    };
  }, []);

  return (
    <>
      <Head />
      <Header />
      {scrolled && <HomeButton />}
      <main>
        <div className={style.image} id="home" aria-hidden="true" />
        <Section title="sobre" id="sobre">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fringilla proin
            mauris eu auctor faucibus. Sollicitudin malesuada purus ipsum felis aliquam,
            nulla tincidunt purus. Ante mattis tempus dapibus bibendum quis sit at.
          </p>
        </Section>

        <Section title="área de atuação" id="area-de-atuacao">
          <CardGrid />
        </Section>

        <Section title="contato" id="contato">
          <Contato
            tel="3345-0708"
            phone="(43) 99966-8091"
            email="advcaldeira@gmail.com"
          />
        </Section>

        <Section title="Localização" id="localizacao">
          <Localizacao />
        </Section>
      </main>
      <Footer />
    </>
  );
}
