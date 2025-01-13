import { useEffect, useState } from "react"
import Card from "../card"
import styled from "styled-components"

const SectionStyles = styled.section`
    width: 100%;
    height: 435px;
    margin-bottom: 93px;

    h2{
        display: flex;
        width: 30%;
        background-color: ${props => props.$color};
        font-size: 900;
        font-size: 32px;
        color: white;
        border-radius: 15px;
        height: 70px;
        justify-content: center;
        align-items: center;
    }
    .cardContainer{
        display: flex;
        margin-top: 42px;
        gap: 30px;
    }

    
`

const Section = ({categoria}) => {

    const colorMap = {
        "Front End" : "#6BD1FF",
        "Back End" : "#00C86F",
        "Innovacion y gestión" : "#FFBA05"
    }

    let color = colorMap[categoria];

    const [videos, setVideos] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5001/videos?categoria=${categoria}`)
        .then(response => response.json())
        .then(data => setVideos(data))
        .catch(error => console.log(error))
    },[])

    return (
        <SectionStyles  $color={color}>
            <h2>{categoria}</h2>
            <div className="cardContainer">
                {videos.map(video => <Card key={video.id} nombre={video.titulo} imagen={video.capa}></Card>)}
            </div>
            

        </SectionStyles>
    )
}

export default Section