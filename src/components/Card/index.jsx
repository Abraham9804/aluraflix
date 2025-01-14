import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const CardStyles = styled.article`
    width: 430px;
    max-height: 319px;
    background-color: var(--black);
    border-radius: 23px;
    border: 3px solid ${props => props.$color};
    img{
        width: 100%;
    }

    .card-footer{
        height: 54px;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        div{
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }
`

const Card = ({imagen, color}) => {
    return (
        <CardStyles $color={color}>
            <div className="image">
                <img src={imagen} />
            </div>
            <div className="card-footer">
                <div>
                    <MdOutlineDeleteForever size="28"/> <p> Borrar</p>
                </div>
                <div>
                    <CiEdit size="28" width={"bold"}/> <p> Editar</p>
                </div>
            </div>
        </CardStyles>
    )
}

export default Card