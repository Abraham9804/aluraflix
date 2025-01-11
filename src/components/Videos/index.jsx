import { useEffect, useState } from "react"
import Secction from "../Section"

const Videos = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/videos")
        .then(response => response.json())
        .then(data => {
            
           const catRepetidas = data.map(video => video.categoria )
           const catUnicas = [...new Set(catRepetidas)]
           return setCategorias(catUnicas)
        })
        .catch(error => console.log(error))
    },[])

    
    return (
        <>
        
        {
            categorias.map(categoria => <Secction key={categoria}></Secction>)
        }
        
        </>
    )
}

export default Videos