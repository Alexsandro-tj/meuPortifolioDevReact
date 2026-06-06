import styles from '../Footer/Footer.module.css';
import {FaWhatsapp} from "react-icons/fa"


export default function Footer() {
    let whatsapp = "https://wa.me/5551991019959";
    return (

        <footer className={styles.container}>
            <p>
                © 2026 Alex Sandro Santos  - Todos os Direitos Reservados
            </p>

            <a href={whatsapp} target='_blank' rel="noopener noreferrer" className={styles.botaoflutuante}><FaWhatsapp size={50} /></a>
        </footer>
    );

}