import { useContext, useEffect, useState } from "react"

import styled from "styled-components"
import { VideoContext } from "../../context/Contexto"
import Card from "../Card"

const SectionStyles = styled.section`
    width: 100%;
    min-height: 435px;
    margin-bottom: 93px;

    h2{
        display: flex;
        max-width: 432px;
        min-width: 286px;
        background-color: ${props => props.$color};
        font-weight: 700;
        font-size: 32px;
        color: white;
        border-radius: 15px;
        height: 70px;
        justify-content: center;
        align-items: center;
    }
    .cardContainer{
        display: flex;
        flex-wrap: wrap;
        margin-top: 42px;
        gap: 30px;
    }

    @media screen and (max-width: 768px) {
        min-height: auto;
        width: 90%;
        margin: auto;
        margin-bottom: 93px;
        h2{
            margin: auto;
            min-width: 286px;
            font-size: 28px;
        }

        .cardContainer{
            justify-content: center;
        }
    }
    
`

const Section = ({categoria}) => {
    const {fetchVideosPorCategoria, videos} = useContext(VideoContext)
    const colorMap = {
        "Front End" : "#6BD1FF",
        "Back End" : "#00C86F",
        "Innovacion y gestión" : "#FFBA05"
    }

    let color = colorMap[categoria];

    useEffect(()=>{
        fetchVideosPorCategoria(categoria)
    },[])

    const videosCategoria = videos[categoria] || []

    return (
        <SectionStyles  $color={color}>
            <h2>{categoria}</h2>
            <div className="cardContainer">
                {videosCategoria.map(video => <Card key={video.id} nombre={video.titulo} imagen={video.capa} color={color} id={video.id}></Card>)}
            </div>
            
        </SectionStyles>
    )
}

export default Section