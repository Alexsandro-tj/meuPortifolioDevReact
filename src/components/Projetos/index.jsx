import styles from '../Projetos/Projetos.module.css';
import Cards from '../Cards';
import ImgPortifolio from '../../../public/image/homePortifolio.png';
import MyUi from '../../../public/image/my-ui.png';
import CadUsers from '../../../public/image/cad-users.png';



export default function Projetos() {
    const sites = ["https://alexsandro-santos-dev-bice.vercel.app/","https://site-react-components.vercel.app/","https://cadastro-de-usuarios-react-node.vercel.app/","https://github.com/Alexsandro-tj/API---Cadastro-de-Usuarios"];

    return (
        <section id='projetos' className={styles.projetosContainer}>
            <h2>
                Projetos
            </h2>
            <div className={styles.content} data-aos="fade-right">
            
                <span>
                    <Cards
                        img={ImgPortifolio}
                        title='Meu Portifólio'
                        description='Site desenvolvido com React, utilizando de components, hooks e AOS library para animações.'
                        link={sites[0]}
                    />
                    <Cards
                        img={MyUi}
                        title='Biblioteca React'
                        description='Site Desenvolvido em React, para reutilizar componetes. Foi utilizado as tecnologias: Vite, React-dom, Styled Components, React Icons.'
                        link={sites[1]}
                    />
                    <Cards
                        img={CadUsers}
                        title='Cadastro De Usuários'
                        description='Sistema desenvolvido em React, para cadastrar usuários fictícios, com integração com Api para gravar os usuários no banco de dados. Técnologias usadas: React, vite, axios.'
                        link={sites[2]}
                    />
                    <Cards
                        title='API - Cadastro De Usuários'
                        description='API para sistema desenvolvido em Node.js, para cadastrar usuários fictícios no banco de dados MongoBD. Ferramentas usadas: Express, Mongoose.'
                        link={sites[3]}
                    />
                </span>
            </div>
        </section>


    );
}