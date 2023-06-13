import '../Admin/Admin.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import { useContext, useState } from 'react';

export const Admin = () => {
    const { AllProducts, deleteProduct } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState(""); // Establecer el valor inicial como una cadena vacía

    const filteredProducts = AllProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    const onSearchSubmit = (e) => {
      e.preventDefault();
    };


    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <div className='search-category'>
                     <input
                     type="text"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     placeholder="Buscar productos"
                     />
                     <button className='button-allproduct' type='submit'>Buscar</button>
                </div>
            </form>
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <Link to="/create" className='btn-create'>CREAR NUEVO PRODUCTO</Link>
                <table className='table'>
                    <thead className='tableTheadBg'>
                        <tr className='table-product-detail'>
                            <td className='table-id'>ID</td>
                            <td className='table-title'>TÍTULO</td>
                            <td className='table-actions'>OPCIONES</td>
                        </tr>
                    </thead>
                    <tbody>
                        { filteredProducts.map ( (product, index) => (
                            <div className='table-products'>
                                <tr className='table-product-detail' key={ index }>
                                <td className='tableProducts-id'> { product.id } </td>
                                <td className='tableProducts-title'> { product.title } </td>
                                <td className='tableProducts-actions'>
                                    <Link to={`/edit/${product._id}`} className='btn-edit'>Editar</Link>
                                    <button onClick={ ()=>deleteProduct(product._id) } className='btn-delete'>❌</button>
                                </td>
                                </tr>
                            </div>
                        )) }
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
</div>
    )
}