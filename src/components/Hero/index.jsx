import styles from '../Hero/Hero.module.css';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import FotoPerfil from '../../../public/image/minhafoto.png'




export default function Hero() {
    let linkedin = "https://www.linkedin.com/in/alex-sandro-do-santos";
    let github = "https://github.com/Alexsandro-tj";
    let whatsapp = "https://wa.me/5551991019959";


    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <span>
                            Olá, eu sou
                        </span>
                        <h1>
                            Alex Sandro Santos
                        </h1>
                        <p>
                            Desenvolvedor Full Stack & Frellancer
                        </p>
                        <div className={styles.content}>
                            <div className={styles.redessociais}>
                                <a href={linkedin} target='_blank' rel="noopener noreferrer" className={styles.btnlikedin}><FaLinkedin size={50} /></a>
                                <a href={github} target='_blank' rel="noopener noreferrer" className={styles.btngithub}><IoLogoGithub size={50} /></a>
                                <a href={whatsapp} target='_blank' rel="noopener noreferrer" className={styles.btnwhats}><FaWhatsapp size={50} /></a>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-down">
                        <img src={FotoPerfil} alt="minha foto de perfil" className={styles.fotoperfil}  />
                    </div>
                </div>

            </section>
        </>

    );
}