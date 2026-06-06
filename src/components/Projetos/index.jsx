import styles from '../Projetos/Projetos.module.css';

export default function Projetos() {

    return (
        <section id='projetos' className={styles.projetosContainer}>
            <h2>
                Projetos
            </h2>
            <div className={styles.content}>
                <p>EM BREVE</p>
                <span>
                    Novos projetos estão sendo desenvolvidos...
                </span>
            </div>
        </section>


    );
}