import { useContext, useEffect, useState } from "react"
import Secction from "../Section"
import styled from "styled-components"
import { VideoContext } from "../../context/Contexto"

const MainStyles = styled.main`
    width: 95%;
    height: auto;
    margin: auto auto;
`

const Videos = () => {
    const {categorias} = useContext(VideoContext)
    
    return (
        <MainStyles>
            {
                categorias.map(categoria => <Secction key={categoria} categoria={categoria}></Secction>)
            }
        </MainStyles>
    )
}

export default Videos
