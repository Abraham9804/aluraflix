import styled from "styled-components"

const ContainerCampo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 43px;
    label{
        font-size: 20px;
        font-weight: 600;
        color: white;
        margin-bottom: 15px;
    }

    input{
        border-radius: 10px;
        border: 3px solid #2271D1;
        padding: 16px 10px;
        background-color: transparent;
        color: #A5A5A5;
    }

`

const CampoTexto = ({value, titulo, campoDb, onChange}) => {
    return <ContainerCampo>
                <label htmlFor={campoDb} >{titulo}</label>
                <input type="text" id={campoDb} name={campoDb} value={value}  onChange={onChange}/>
            </ContainerCampo>
}

export default CampoTexto