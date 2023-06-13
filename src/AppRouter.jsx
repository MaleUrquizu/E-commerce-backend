import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Header } from './Componentes/Pagina-principal/Header';
import Carrito from './Componentes/Pagina-principal/Carrito';
import { SearchPage, HomePage, Descripcion, AllProducts, Hombre, Mujer, Accesorios } from './Pages';
import { Admin } from './Pages/Admin/Admin';
import EditProduct from './Pages/Admin/EditProduct';
import CreateProduct from './Pages/Admin/CreateProduct';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="Descripcion/:id" element={<Descripcion />} />
        <Route path="Busqueda" element={<SearchPage />} />
        <Route path="Carrito" element={<Carrito />} />
        <Route path="AllProducts" element={<AllProducts />} />
        <Route path="Mujer" element={<Mujer />} />
        <Route path="Hombre" element={<Hombre />} />
        <Route path="Accesorios" element={<Accesorios />}/>
        <Route path="Admin" element={<Admin />}/>
        <Route path="edit/:id" element={<EditProduct />}/>
        <Route path="/create" element={<CreateProduct />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};


