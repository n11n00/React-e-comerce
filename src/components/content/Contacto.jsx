import React from 'react';

const Contacto = () => {
    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current) 
        console.log(Object.fromEntries(datForm))


    }



    return (
       
        <> 
            <div className="container">
                <form on onSubmit={() => consultarForm()} ref={datosFormulario}>
                    <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                    
                    </div>
                    <div className="mb-3 form-check">
                    <textarea name="consulta" rows={10} cols={50} defaultValue={"Escriba su consulta aqui"} />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Consulta</button>
                </form>
            </div>
        </>
    );
}

export default Contacto;
