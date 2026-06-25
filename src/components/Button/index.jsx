import styled from "styled-components";

export default function Button({titleButton = 'Clique aqui'}) {

    return (
        <ContainerButton>
            {titleButton}
        </ContainerButton>
    );
}
const ContainerButton = styled.button`
outline: none;
border-radius: 6px;
padding: 5px;
width: 100px;
height: 30px;
text-decoration: none;
background: #192eba;
color: #fff;
margin-bottom: 10px;

&:hover{
transform: translateY(0);
}
`;