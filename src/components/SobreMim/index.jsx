import styles from '../SobreMim/Sobre.module.css';

export default function SobreMim() {

    return (

        <section id='sobre' className={styles.container}>
            <div className={styles.content}>

                {/* Lado Esquerdo */}
                <div className={styles.sobreLdEsq}>
                    <h2>
                        Sobre mim
                    </h2>
                    <p>
                        Olá! Sou desenvolvedor Full Stack apaixonado por transformar ideias em aplicações web robustas, eficientes e escaláveis. Meu foco é unir uma experiência de usuário fluida no Front-end a uma arquitetura sólida e performática no Back-end.

                        No ecossistema de desenvolvimento, domino tecnologias que me permitem transitar com facilidade por todas as etapas de um projeto. Tenho sólida experiência na criação de interfaces modernas, desenvolvimento de APIs seguras e modelagem de bancos de dados.

                        Tecnologias que utilizo no meu dia a dia:

                        Front-end: HTML5, CSS3, JavaScript e React.

                        Back-end: PHP e Node.js.

                        Bancos de Dados: MySQL (Relacional) e MongoDB (Não-relacional).

                        Estou sempre em busca de novos desafios que me tirem da zona de conforto e de oportunidades onde eu possa aplicar tecnologia para gerar valor real. Vamos nos conectar?
                    </p>
                </div>

                {/*Lado direito*/}
                <div className={styles.skills}>
                    <h2>Minhas Skills</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillsCard}>HTML</div>
                        <div className={styles.skillsCard}>CSS</div>
                        <div className={styles.skillsCard}>JavaScript</div>
                        <div className={styles.skillsCard}>React</div>
                        <div className={styles.skillsCard}>PHP</div>
                        <div className={styles.skillsCard}>Node.js</div>
                        <div className={styles.skillsCard}>MySQL</div>
                        <div className={styles.skillsCard}>MONGO DB</div>
                    </div>


                </div>

            </div>
        </section>

    );



}