import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utilities/firebase.js';
import { DarkModeContext } from '../../context/darkModeContext';
const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        getProductos().then(productos => {
            const productosCategoria = productos.filter(producto => producto[1].categoria === parseInt(id) )
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text"> Marca: {producto[1].marca}</p>
                            <p className="card-text">Talle: {producto[1].talle}</p>
                            <p className="card-text">Precio: ${producto[1].precio}</p>
                            <p className="card-text">Stock: {producto[1].stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            {productos}
        </div>
            
        
    );
}

export default Categoria;
