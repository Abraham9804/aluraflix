import styled from "styled-components";

const TitleStyles = styled.div`
    color: var(--white);
    text-align: center;
    margin-top: 70px;
    margin-bottom: 47px;
    h1{
        font-size: 60px;
        margin-bottom: 10px;
    }

    h2{
        font-size: 20px;
        font-weight: 400;
    }
`

const Title = () => {
    return  <TitleStyles>
                <h1>NUEVO VIDEO</h1>
                <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
            </TitleStyles>
}

export default Title