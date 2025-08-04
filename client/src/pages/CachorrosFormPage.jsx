import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { createCachorro, deleteCachorro, updateCachorro, getCachorroById } from '../api/cachorros.api';
import { useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function CachorrosFormPage() {
    const {register, 
           handleSubmit, 
           formState: {errors},
           setValue
        } = useForm();
    
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        try {
            // Mapear los nombres de campos para ambos casos (crear y actualizar)
            const mappedData = {
                name_cachorro: data.nombre,
                description_cachorro: data.descripcion,
                adoptado: data.adoptado || false
            };
            
            console.log('Datos mapeados:', mappedData);
            
            if (params.id) {
                // Modo actualización
                console.log('Actualizando cachorro con ID:', params.id);
                const res = await updateCachorro(params.id, mappedData);
                console.log('Cachorro actualizado:', res);
                toast.success('Cachorro actualizado exitosamente', {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        background: '#4caf50',
                        color: '#fff',
                    },
                });
            } else {
                // Modo creación
                console.log('Creando nuevo cachorro');
                const res = await createCachorro(mappedData);
                console.log('Cachorro creado:', res);
                toast.success('Cachorro creado exitosamente', {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        background: '#4caf50',
                        color: '#fff',
                    },
                });
            }
            
            // Navegar después de la operación exitosa
            navigate('/cachorros');
            
        } catch (error) {
            console.error('Error:', error);
            console.error('Detalles:', error.response?.data);
        }
    });

    useEffect(() => {
        async function loadCachorro() {
            if (params.id) {
                try {
                    console.log('Cargando cachorro con ID:', params.id);
                    const res = await getCachorroById(params.id);
                    console.log('Datos del cachorro:', res.data);
                    
                    // ✅ Usar los nombres correctos de los campos del formulario
                    setValue('nombre', res.data.name_cachorro);
                    setValue('descripcion', res.data.description_cachorro);
                    setValue('adoptado', res.data.adoptado);
                } catch (error) {
                    console.error('Error al cargar cachorro:', error);
                }
            }
        }
        loadCachorro();
    }, [params.id, setValue]); // ✅ Agregar dependencias

    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
            <h1 className='text-xl font-semibold mb-4'>{params.id ? 'Editar Cachorro' : 'Crear Cachorro'}</h1>

            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre del cachorro" 
                    {...register("nombre", {required: true})}
                    className='border p-2 rounded-lg w-full mb-4 w-full mb-2' 
                />
                {errors.nombre && <span>Este campo es obligatorio</span>}
                
                <textarea 
                    rows="3" 
                    placeholder="Descripción" 
                    {...register("descripcion")}
                ></textarea>
                {errors.descripcion && <span>Este campo es obligatorio</span>}
                
                {/* Checkbox para adoptado - solo visible en modo edición */}
                {params.id && (
                    <label>
                        <input 
                            type="checkbox" 
                            {...register("adoptado")} 
                        />
                        Adoptado
                    </label>
                )}

                <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg' type="submit">
                    {params.id ? 'Actualizar' : 'Crear'}
                </button>
            </form>

            {params.id && (
                <button
                    onClick={async () => {
                        const accepted = window.confirm('¿Estás seguro de que quieres eliminar este cachorro?');
                        if (accepted) {
                            try {
                                await deleteCachorro(params.id);
                                toast.success('Cachorro eliminado exitosamente', {
                                    duration: 2000,
                                    position: 'top-right',
                                    style: {
                                        background: '#4caf50',
                                        color: '#fff',
                                    },
                                });
                                navigate('/cachorros');
                            } catch (error) {
                                console.error('Error al eliminar:', error);
                                alert('Error al eliminar el cachorro');
                            }
                        }
                    }}
                >
                    Delete
                </button>
            )}
        </div>
    );
}