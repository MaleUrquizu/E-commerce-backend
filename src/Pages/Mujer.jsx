import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Componentes/Pagina-principal/Footer';
import { ProductContext } from '../Context/ProductContext';

export const Mujer = () => {
  const { AllProducts, cart, setCart } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('Womens'); // Establecer el valor inicial como "Womens"
  const navigate = useNavigate();

  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  const filteredProducts = AllProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate('/Mujer', {
        state: searchTerm,
      });
    }
  };

  return (
    <div>
      MUJER
      <div className='content'>
        {filteredProducts.map((product) => (
          <div className='card el-wrapper' key={product.id}>
            <div className='box-up'>
              <Link to={`/Descripcion/${product.id}`}>
                <img className='img' src={product.image} alt={product.title} />
              </Link>
              <div className='info-inner'>
                <Link to={`/Descripcion/${product.id}`}>
                  <span className='p-name'>{product.title}</span>
                </Link>
              </div>
            </div>
            <div className='card-body box-down'>
              <div className='h-bg'>
                <div className='h-bg-inner'></div>
                <a
                  className='cart'
                  href='*'
                  onClick={(e) => {
                    e.preventDefault();
                    buyProducts(product);
                  }}
                >
                  <span className='price'>{product.price}€</span>
                  <span className='add-to-cart'>
                    <span className='txt'>Agregar al carrito</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};