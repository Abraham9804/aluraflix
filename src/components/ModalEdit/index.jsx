import { useContext } from "react"
import { VideoContext } from "../../context/Contexto"
import styled from "styled-components"
import CampoTexto from "../CampoTexto"

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
        text-align: left;
        margin-bottom: 43px;
    }

    div{
        width: 100%;
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

    .text-container{
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

        textarea{
            border-radius: 10px;
            border: 3px solid #2271D1;
            padding: 16px 10px;
            background-color: transparent;
            color: #A5A5A5;
        }
    }

    .select-container{
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

        select{
            border-radius: 10px;
            border: 3px solid #2271D1;
            padding: 16px 10px;
            background-color: transparent;
            color: #A5A5A5;
        }
        option{
            background-color: #03122F;
            border: 3px solid #2271D1;
        }
    }

    @media screen and (max-width: 1000px){
        padding: 84px 100px;
    }

    @media screen and (max-width: 600px){
        padding: 84px 60px;
    }

    @media screen and (max-width: 600px){
        padding: 84px 20px;
        div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            button{
                padding: 10px 15px;
                border-radius: 10px;
                font-size: 16px;
                font-weight: bold;
            }
        }
        h3{
            text-align: center;
            font-size: 40px;
        }
    }
    
`

const ModalEdit = () => {
    const {videoSelect,setVideoSelect, openModal, setOpenModal, categorias} = useContext(VideoContext)
    
    const video = videoSelect[0]

    return (
        <> 
        {video && 
            <> 
           <Overlay />
            <DialogStyles open={openModal}>
                    <h3>Editar card:</h3>
                    <form method="dialog">
                    <CampoTexto value={video.titulo} titulo="Titulo" campoDb="titulo"/>
                    <div className="select-container">
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" id="categoria" defaultValue={video.categoria}
                        placeholder={video.categoria}>
                            
                            {
                                categorias.map(categoria => {
                                    return <option key={categoria} value={categoria}>{categoria}</option>
                                })
                            }
                        </select>
                    </div>
                    <CampoTexto value={video.capa} titulo="Imagen" campoDb="capa"/>
                    <CampoTexto value={video.link} titulo="Video" campoDb="link"/>
                    
                    <div className="text-container">
                        <label>Descripción</label>
                        <textarea id="descripcion" name="descripcion">
                        {video.descripcion}
                        </textarea>
                    </div>
                    
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