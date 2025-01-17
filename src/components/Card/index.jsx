import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { VideoContext } from "../../context/Contexto";

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
            cursor: pointer;
        }

    }
`

const Card = ({imagen, color, id}) => {
    const {fetchVideo, setOpenModal} = useContext(VideoContext)

    const deleteCard = async (id) => {
        try{
            const fetchDelete = await fetch(`http://localhost:5001/videos/${id}`,{
                method: "DELETE"
            })
            if(!fetchDelete.ok){
                throw new Error("Error al eliminar el video")
            }else{
                window.location.reload()
            }
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <CardStyles $color={color}>
            <div className="image">
                <img src={imagen} />
            </div>
            <div className="card-footer">
                <div onClick={() => deleteCard(id)}>
                    <MdOutlineDeleteForever size="28"/> <p> Borrar</p>
                </div>
                <div onClick={() => {console.log("editar ",id)
                        fetchVideo(id)
                        setOpenModal(true)
                    }}>
                    <CiEdit size="28" width={"bold"}/> <p> Editar</p>
                </div>
            </div>
        </CardStyles>
    )
}

export default Card