

const CampoTexto = () => {
    return <div>
                <label htmlFor="imagen" className={errores.nombre ? "label-error": ''}>{NombreCampo}</label>
                <input type="text" id={nombre} name={nombre}  
                placeholder={nombre}  />
            </div>
}