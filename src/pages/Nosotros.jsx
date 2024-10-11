import React from 'react';
import useTitulo from "../hooks/useTitulo";
import './Nosotros.scss'; 

const Nosotros = () => {
  useTitulo('Nosotros');

  return (
    <div className="nosotros">
      <h1 className="nosotros__title">Sobre Nosotros</h1>
      <div className="nosotros__content">
        <div className="nosotros__left">
          <h1 className="nosotros__heading">Relojes de Colección</h1>
        </div>
        <div className="nosotros__right">
          <p className="nosotros__text">
            Somos Relojes de Colección, una empresa dedicada a la venta on-line de relojes edición limitada. Nuestra empresa forma parte de Suevia Group S.A. distribuidor exclusivo en la Argentina de las principales marcas de relojes como Rolex, Cartier, Omega.
          </p>
        </div>
      </div>
      <img src="/img/quienesomos1.webp" alt="Relojes" className="nosotros__image" />
      <div className="nosotros__info-box">
        <p className="nosotros__info-text">
          Tenemos más de 30 años de experiencia en la comercialización de marcas relojeras suizas y contamos con el exclusivo soporte de un Servicio Técnico propio especializado.
        </p>
      </div>
      <img src="/img/quinessomos2.webp" alt="Soporte técnico" className="nosotros__image" />
    </div>
  );
};

export default Nosotros;