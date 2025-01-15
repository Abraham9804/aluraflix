import { createContext, useEffect, useState } from "react";

export const VideoContext = createContext()

const VideoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5001/videos")
        .then(response => response.json())
        .then(data => {
           const catRepetidas = data.map(video => video.categoria )
           const catUnicas = [...new Set(catRepetidas)]
           return setCategorias(catUnicas)
        })
        .catch(error => console.log(error))
    },[])
    
    const [videos, setVideos] = useState({})
    function fetchVideosPorCategoria(categoria){
        fetch(`http://localhost:5001/videos?categoria=${categoria}`)
        .then(response => response.json())
        .then(data => {
            setVideos(prevVideos =>({
                ...prevVideos,
                [categoria]: data
            }))
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        console.log(videos)
    },[videos])
    

    return <VideoContext.Provider value={{categorias, fetchVideosPorCategoria, videos}}>
            {children}
        </VideoContext.Provider>
}

export default VideoProvider