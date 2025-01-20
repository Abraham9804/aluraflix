import { useContext } from "react"
import { VideoContext } from "../../context/Contexto"
import styled from "styled-components"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(3,18,47,0.7);
`

const DialogStyles = styled.dialog`
    position: absolute;
    top: 250px;
    margin: auto auto;
    width: 80%;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    background-color: #03122F;
    padding: 84px 200px;
    h3{
        color: #2271D1;
        font-size: 60px;
        text-align: center;
    }

    div{
        display: flex;
        justify-content: space-between;
        button{
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 20px;
            font-weight: bold;
        }

        .btn-guardar{
            background-color: #000000;
            color: #2271D1;
            border: 3px solid #2271D1;
        }
        .btn-cerrar{
            background-color: transparent;
            color: var(--white);
            border: 3px solid var(--white);
        }
    }
    
`

const ModalEdit = () => {
    const {videoSelect,setVideoSelect, openModal, setOpenModal} = useContext(VideoContext)
    
    const video = videoSelect[0]

    return (
        <> 
        {video && 
            <> 
           <Overlay />
            <DialogStyles open={openModal}>
                    <h3>Editar card: {video.id}</h3>
                    <form method="dialog">
                        <div>
                            <button className="btn-guardar">GUARDAR</button>
                            <button className="btn-cerrar" onClick={() => {
                                setOpenModal(false)
                                setVideoSelect({})
                            }
                            }>CERRAR</button>
                        </div>
                        
                    </form>
            </DialogStyles>
            </>
        }
        
        </>
    )
}

export default ModalEdit