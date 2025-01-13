import styled from "styled-components"

const CardStyles = styled.article`
    width: 30%;
    height: 320px;
    color: white;
    background-color: var(--black);
    border-radius: 15px;
`

const Card = ({nombre, imagen}) => {
    return (
        <CardStyles >
            <div className="image">
                <img src={imagen} />
            </div>
            <div className="card-footer">
            borrar editar
            </div>
        </CardStyles>
    )
}

export default Card