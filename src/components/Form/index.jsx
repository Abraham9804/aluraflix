import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { VideoContext } from "../../context/Contexto";

const FormStyles = styled.form`
    margin-bottom: 70px;
    
    .input-container{
        margin: auto;
        margin-bottom: 70px;
        width: 80%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        gap: 20px;
        color: white;

        h3{
        width: 100%;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 50px;
    }

        div{
            width: 45%;
            display: flex;
            flex-direction: column;
            label{
                font-size: 20px;
                margin-bottom: 15px;
                
            }

            input{
                border-radius: 10px;
                padding: 16px 9px;
                background-color: #262626;
                border: 1px solid #A5A5A5;
                color: white;
            }

            select{
                border-radius: 10px;
                padding: 16px 9px;
                background-color: #262626;
                border: 1px solid #A5A5A5;
                color: white;
            }

            textarea{
                background-color: #262626;
                border-radius: 10px;
                border: 1px solid #A5A5A5;
                height: 266px;
                padding: 16px 9px;
                font-family: "Roboto", serif;
                color: white;
            }

            .input-error{
                border: 1px solid red;
            }

            .input-error::placeholder{
                color: red;
            }

            .label-error{
                color: red;
            }

            .select-error{
                color: red;
                border: 1px solid red;
            }

        }
    }

   

    .btn-container{
        width: 80%;
        display: flex;
        flex-direction: row;
        gap: 30px;
        margin: auto;
        button{
            width: 180px;
            height: 54px;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background: none;
            border: 3px solid white;
            border-radius: 15px;
        }

        .btn-guardar{
            border: 3px solid #2271D1;
        }
    }

    @media screen and (max-width: 600px){
        .input-container{
            flex-direction: column;
            align-items: center;
            div{
                width: 80%;
            }

            h3{
                width: auto;
            }
        }
    }
`

const Form = () => {
    const {categorias} = useContext(VideoContext)

    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [errores, setErrores] = useState({
        nombre: "",
        categoria: "",
        imagen: "",
        video: ""
    })

    function validateForm(){
        const erroresTemp = {}

        if(!nombre.trim()){
            erroresTemp.nombre = "falta el nombre"
        }
        if(!categoria.trim()){
            erroresTemp.categoria = "falta la categoria"
        }
        if(!imagen.trim()){
            erroresTemp.imagen = "falta la imagen"
        }
        if(!video.trim()){
            erroresTemp.video = "falta el video"
        }
        setErrores(erroresTemp)
        return Object.keys(erroresTemp).length === 0
    }

    const saveForm = async (data) => {
        try{
            const createVideo = await fetch("http://localhost:5001/videos",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(!createVideo.ok){
                throw new Error("Error en la creacion del video")
            }else{
                window.location.href = "/"
            }
        }
        catch(err){
            alert(err)
        }
    }

    useEffect(()=>{
        console.log(errores)
    },[errores])

    return <FormStyles onSubmit={
                (e)=>{
                    e.preventDefault()
                    console.log("formulario")
                    if(validateForm()){
                        const data = {
                            "titulo":nombre,
                            "capa":imagen,
                            "categoria":categoria,
                            "link":video,
                            descripcion
                        }
                        saveForm(data)
                    }else{ 
                        console.log("errores")
                    }
                   
                }
            }>
                <div className="input-container">
                    <h3>Crear Tarjeta</h3>
                    <div>
                        <label htmlFor="titulo" className={errores.nombre ? "label-error": ''}>Titulo</label>
                        <input type="text" id="titulo" name="titulo" className={errores.nombre ? "input-error": ''} 
                            placeholder={errores.nombre? errores.nombre : "ingrese el título"} onChange={(e)=>{setNombre(e.target.value)}}/>
                    </div>

                    <div>
                        <label htmlFor="categoria" className={errores.categoria ? "label-error": ''}>Categoria</label>
                        <select name="categoria" id="categoria" defaultValue="" className={errores.categoria ? "select-error" : ""} 
                        placeholder={errores.categoria ? errores.categoria : "El enlace es obligatorio"} onInput={(e)=> setCategoria(e.target.value)}>
                            <option value="" disabled >
                                {errores.categoria? errores.categoria : "Seleccione la categoria"}
                            </option>
                            {
                                categorias.map(categoria => {
                                    return <option key={categoria} value={categoria}>{categoria}</option>
                                })
                            }
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="imagen" className={errores.nombre ? "label-error": ''}>Imagen</label>
                        <input type="text" id="imagen" name="imagen" className={errores.imagen ? "input-error" : ""} 
                        placeholder={errores.imagen ? errores.imagen : "El enlace es obligatorio"}  onChange={(e)=>{setImagen(e.target.value)}}/>
                    </div>
                
                    <div>
                        <label htmlFor="video" className={errores.nombre ? "label-error": ''}>Video</label>
                        <input type="text" id="video" name="video" className={errores.video ? "input-error" : ""} 
                        placeholder={errores.video ? errores.video : "ingrese el enlace del video"} onChange={(e)=>{setVideo(e.target.value)}}/>
                    </div>
                    
                    <div>
                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea id="descripcion" name="descripcion" placeholder="De que trata este video?"
                        onChange={(e)=>{setDescripcion(e.target.value)}}></textarea>
                    </div>

                    
                </div>
                
                <div className="btn-container">
                    <button type="submit" className="btn-guardar">GUARDAR</button>
                    <button type="reset">LIMPIAR</button>
                </div>
            </FormStyles>
}

export default Form