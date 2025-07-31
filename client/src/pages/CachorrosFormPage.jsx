import {useForm} from 'react-hook-form';
import { createCachorro, deleteCachorro } from '../api/cachorros.api';
import { useNavigate, useParams} from 'react-router-dom';

export function CachorrosFormPage() {
    const {register, 
           handleSubmit, 
           formState: {errors},
        } = useForm();
    
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const onSubmit = handleSubmit(async (data) => {
        try {
            // Mapear los nombres de campos
            const mappedData = {
                name_cachorro: data.nombre,
                description_cachorro: data.descripcion,
                adoptado: false // valor por defecto
            };
            
            console.log('Datos mapeados:', mappedData);
            const res = await createCachorro(mappedData);
            console.log('Respuesta:', res);
            
            // ✅ Aquí es donde debe ir la navegación
            navigate('/cachorros');
            
        } catch (error) {
            console.error('Error:', error);
            console.error('Detalles:', error.response?.data);
        }
    });

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre del cachorro" {...register("nombre", {required: true})} />
            {errors.nombre && <span>Este campo es obligatorio</span>}
            <textarea rows="3" placeholder="Descripción" {...register("descripcion")}></textarea>
            {errors.descripcion && <span>Este campo es obligatorio</span>}
            <button type="submit">save</button>
        </form>

        {params.id && (
            <button
                onClick={async () => {
                 const accepted = window.confirm('¿Estás seguro de que quieres eliminar este cachorro?');
                 if (accepted) {
                     await deleteCachorro(params.id);
                     navigate('/cachorros');
                 }
        }}
        >
            Delete
            </button>
        )}

        </div>
    );
}