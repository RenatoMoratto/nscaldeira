import Head from "../src/components/Head";
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Section from "../src/components/Section";
import Image from "next/image";
import style from '../styles/Home.module.css';

export default function Nath(props) {
    return (<>
        <Head />
        <Header />
        <main>
            <div className={style.image}/>
            <Section title="sobre" id="sobre">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fringilla proin mauris eu auctor faucibus. Sollicitudin malesuada purus ipsum felis aliquam, nulla tincidunt purus. Ante mattis tempus dapibus bibendum quis sit at.</p>
            </Section>
            <Section title="área de atuação" id="area-de-atuacao">
                {/* <Grid/> */}
            </Section>
        </main>
        <Footer />
    </>)
}