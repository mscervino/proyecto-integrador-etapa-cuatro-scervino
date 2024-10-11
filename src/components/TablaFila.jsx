import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ( { producto }) => {

  const { setProductoAEditar, borrarProductoContext } = useContext(ProductosContext)

  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }

  const handleBorrar = (id) => {
    console.log('Producto a borrar...', id)
    borrarProductoContext(id);
  }
  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <div className='button-container'>
        <button onClick={() => handleEditar(producto)}>Editar</button>
        <button onClick={() => handleBorrar(producto.id)}>Borrar</button>
        </div>
      </td>
    </tr>
  )
}

export default TablaFila