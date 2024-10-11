import React, { useState } from 'react';
import useTitulo from "../hooks/useTitulo";
import './Contacto.scss'; 

const Contacto = () => {
  useTitulo('Contacto');

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    
  };

  return (
    <div className="contacto">
      <h1 className="contacto__title">Contacto</h1>
      <form onSubmit={handleSubmit} className="contacto__form">
        <div className="contacto__field">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="contacto__input"
          />
        </div>
        <div className="contacto__field">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="contacto__input"
          />
        </div>
        <div className="contacto__field">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="contacto__input"
          />
        </div>
        <div className="contacto__field">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contacto__input"
          />
        </div>
        <button type="submit" className="contacto__button">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;