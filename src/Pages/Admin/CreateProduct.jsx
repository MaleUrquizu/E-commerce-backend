import '../Admin/Admin.css';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/products/'

const CreateProduct = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, description: description, category: category})
        navigate('/Admin')
    }   

    return (
        <div>
           <h3 className='create-title'>CREAR PRODUCTO</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Título</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Categoría</label>
                    <textarea
                        value={category}
                        onChange={ (e)=> setCategory(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <div className='mb-3'>
                     <label className='form-label'>Descriptión</label>
                    <textarea
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>
                 <button type='submit' className='btn-store'>Guardar</button>                  
           </form>
        </div>
    )
}

export default CreateProduct