import { useContext, useEffect, useState } from "react"
import ProductosContext from "../context/ProductosContext"
import './Formulario.scss'

const Formulario = () => {
  const formInit = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false,
  };

  const [form, setForm] = useState(formInit);

  const { crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar } = useContext(ProductosContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit);
  }, [productoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit');

    try {
      if (form.id === null) {
        console.log('Creando un producto');
        await crearProductoContext(form);
      } else {
        console.log('Actualizando producto');
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error('[handleSubmit]', error);
    }
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleReset = () => {
    console.log('handleReset');
    setForm(formInit);
    setProductoAEditar(null);
  };

  return (
    <>
      <h3>Agregar o Editar</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="lbl-nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-precio">Precio</label>
          <input
            type="text"
            name="precio"
            id="lbl-precio"
            value={form.precio}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-stock">Stock</label>
          <input
            type="text"
            name="stock"
            id="lbl-stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-marca">Marca</label>
          <input
            type="text"
            name="marca"
            id="lbl-marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-categoria">Categoría</label>
          <input
            type="text"
            name="categoria"
            id="lbl-categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-detalles">Detalles</label>
          <input
            type="text"
            name="detalles"
            id="lbl-detalles"
            value={form.detalles}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-foto">Foto</label>
          <input
            type="text"
            name="foto"
            id="lbl-foto"
            value={form.foto}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lbl-envio">Envío</label>
          <input
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked={form.envio}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button type="submit">Guardar</button>
          <button type="reset" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
  