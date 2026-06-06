import styles from '../Footer/Footer.module.css';
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {

    return (

        <footer className={styles.container}>
            <p>
                © 2026 Alex Sandro Santos  - Todos os Direitos Reservados
            </p>
            <a href="#home" className={styles.arrow}>
                <FaArrowUp />
            </a>


        </footer>

    );

}