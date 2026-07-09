import style from '../Header/Header.module.css'
import CV from '../../../public/documents/curriculo_full_stack _alex_santos.pdf'
import IconHomePage from '../../../public/image/icon-home-page.png'


export default function Header() {

    return (
        <>
            <header id='home' className={style.header}>
                    <a href="#home"><img src={IconHomePage} alt="icone-home-page" className={style.icon} /> </a>
                    <nav>
                        <a href="#home" className={style.links}>Home</a>
                        <a href="#sobre" className={style.links}>Sobre</a>
                        <a href="#projetos" className={style.links}>Projetos</a>
                        <a href="#contatos" className={style.links}>Contatos</a>
                        <a href={CV} target="_blank" rel="noopener noreferrer " className={style.links}>Curriculo</a>
                    </nav>
                
            </header>
        </>
    );
}