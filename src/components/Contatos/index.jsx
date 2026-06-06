import styles from '../Contatos/Contatos.module.css';
import { FaWhatsapp } from "react-icons/fa";


export default function Contatos() {
    let enderecoPagina = "http://localhost:5173/";
    return (
        <section id='contatos' className={styles.Container}>
            <div className={styles.content}>
                <h2>
                    Vamos Conversar?
                </h2>
                <p>
                    Entre em contato para projetos, parcerias e trabalhos.
                </p>
                <a href="https://wa.me/5551991019959"  target="_blank" rel="noopener noreferrer "className={styles.botaoflutuante}>
                <FaWhatsapp />
            </a>

            {/* Fomrulário */}
            <form action="https://formsubmit.co/alexsandrotj94@gmail.com" method="POST">
                <input type="hidden" name="_next" value={`$enderecoPagina`}></input>
                <input type="hidden" name="_autoresponse" value="Olá recebemos o seu e-mail, logo entraremos em contato com você. Agradecemos!"></input>
                {/* <input type="hidden" name="_captcha" value="false" /> */}
                <input type="text" name="name" required placeholder='Seu nome'></input>
                <input type="email" name="email" required placeholder='Seu e-mail'></input>
                <textarea name="message" placeholder='Sua mensagem' id="text-area" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>

        </section >

    );
}
