import { useEffect, useState } from "react"
import Secction from "../Section"
import styled from "styled-components"

const MainStyles = styled.main`
    width: 95%;
    height: auto;
    margin: auto auto;
`

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
        <MainStyles>
        
        {
            categorias.map(categoria => <Secction key={categoria} categoria={categoria}></Secction>)
        }
        
        </MainStyles>
    )
}

export default Videos