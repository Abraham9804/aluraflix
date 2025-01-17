import { useContext } from "react"
import { VideoContext } from "../../context/Contexto"

const ModalEdit = () => {
    const {videoSelect, openModal, setOpenModal} = useContext(VideoContext)
    
    const video = videoSelect[0]

    return (
        <>
        <dialog open={openModal}>
            { video && (
                <>
                <p>Greetings, one and all! {video.id}</p>
                <form method="dialog">
                    <button onClick={() => setOpenModal(false)}>OK</button>
                </form>
                </>
                
            ) 
                 
            }
            
        </dialog>
        </>
    )
}

export default ModalEdit