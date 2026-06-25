import styled from 'styled-components';
import Button from '../Button';

export default function Cards({ img, link, title='titulo', description='descrição' }) {

    return (
    <Container>
        <Grid>
            <div className='card'>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target='_blank' rel='noopener noreferrer'><Button  titleButton='Visitar'/></a >
            </div>
        </Grid>
    </Container>
    

);
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:80%;

`;
const Grid = styled.div`
display: grid;
align-items: center;
justify-content: center;



img {
margin-top: 10px;
width: 90%;
height: 80%;
align-items: center;
border-radius: 8px;

}
.card{
display: flex;
flex-direction: column;
/* justify-content: space-between; */
border-radius: 8px;
width: 300px;
height: 400px;
border: 1px solid #000000;
background-color: #373636cc;
align-items: center;
gap: 20px;
box-shadow: 1px -1px 6px 0px #ccc;

& p{
width: 100%;
height:100%;
}
}

`;