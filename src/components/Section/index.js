import style from './Section.module.css';

function Section(props) {
    return (
        <section className={style.section}>
            <h2 className={style.title}>{props.title}</h2>
            <div className={style.content}>
                {props.children}
            </div>
        </section>
    )
}

export default Section;