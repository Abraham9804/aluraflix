import styled from "styled-components";

const FormStyles = styled.form`
    margin: auto;
    margin-bottom: 70px;
    width: 80%;
    display: flex;
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

        textarea{
            background-color: #262626;
            border-radius: 10px;
            border: 1px solid #A5A5A5;
            height: 266px;
            padding: 16px 9px;
        }
    }

    .btn-container{
        display: flex;
        flex-direction: row;
        gap: 30px;
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
`

const Form = () => {
    return <FormStyles>
                <h3>Crear Tarjeta</h3>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" id="titulo" name="titulo" placeholder="ingrese el título" />
                </div>

                <div>
                    <label htmlFor="imagen">Categoria</label>
                    <input type="text" id="imagen" name="imagen" placeholder="El enlace es obligatorio" />
                </div>
                
                <div>
                    <label htmlFor="imagen">Imagen</label>
                    <input type="text" id="imagen" name="imagen" placeholder="El enlace es obligatorio" />
                </div>
            
                <div>
                    <label htmlFor="video">Video</label>
                    <input type="text" id="video" name="video" placeholder="ingrese el enlace del video" />
                </div>
                
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea id="descripcion" name="descripcion" placeholder="De que trata este video?"></textarea>
                </div>
                
                <div className="btn-container">
                    <button type="submit" className="btn-guardar">GUARDAR</button>
                    <button type="reset">LIMPIAR</button>
                </div>
            </FormStyles>
}

export default Form