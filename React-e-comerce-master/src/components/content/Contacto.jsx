import React from 'react';

const Contacto = () => {
    const consultarForm = (e) => {
        e.preventDefault()



    }



    return (

        <> <h1>Contacto</h1> 
            {/* <form onSubmit={consultarForm()}> 
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Email </label>
                <input type="text" className="form-control" name="nombre" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
        </>
    );
}

export default Contacto;