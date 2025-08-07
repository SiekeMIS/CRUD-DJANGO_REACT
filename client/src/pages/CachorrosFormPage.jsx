// Importa los hooks necesarios de React y otras dependencias
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createCachorro, deleteCachorro, updateCachorro, getCachorroById } from '../api/cachorros.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function CachorrosFormPage() {
    // Configuración del formulario con react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();
    
    // Hooks para navegación y parámetros de ruta
    const navigate = useNavigate();
    const params = useParams();

    // Función que se ejecuta al enviar el formulario
    const onSubmit = handleSubmit(async (data) => {
        try {
            // Mapea los nombres de los campos del formulario a los esperados por la API
            const mappedData = {
                name_cachorro: data.nombre,
                description_cachorro: data.descripcion,
                adoptado: data.adoptado || false  // Valor por defecto false si no está marcado
            };
            
            if (params.id) {
                // Modo edición: actualiza un cachorro existente
                await updateCachorro(params.id, mappedData);
                toast.success('Cachorro actualizado exitosamente', {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        background: '#4caf50',
                        color: '#fff',
                    },
                });
            } else {
                // Modo creación: agrega un nuevo cachorro
                await createCachorro(mappedData);
                toast.success('Cachorro creado exitosamente', {
                    duration: 2000,
                    position: 'top-right',
                    style: {
                        background: '#4caf50',
                        color: '#fff',
                    },
                });
            }
            
            // Redirige a la lista de cachorros después de la operación
            navigate('/cachorros');
            
        } catch (error) {
            console.error('Error:', error);
            toast.error('Ocurrió un error al procesar la solicitud');
        }
    });

    // Efecto para cargar datos del cachorro cuando hay un ID en los parámetros
    useEffect(() => {
        async function loadCachorro() {
            if (params.id) {
                try {
                    const res = await getCachorroById(params.id);
                    // Rellena el formulario con los datos existentes
                    setValue('nombre', res.data.name_cachorro);
                    setValue('descripcion', res.data.description_cachorro);
                    setValue('adoptado', res.data.adoptado);
                } catch (error) {
                    console.error('Error al cargar cachorro:', error);
                    toast.error('Error al cargar los datos del cachorro');
                }
            }
        }
        loadCachorro();
    }, [params.id, setValue]);

    return (
        <div className="w-full flex justify-center">
            <div className='w-full max-w-md p-6 bg-gray-50 rounded-lg shadow-md'>
                {/* Título condicional según si es creación o edición */}
                <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>
                    {params.id ? 'Editar Cachorro' : 'Crear Cachorro'}
                </h1>

                {/* Formulario principal */}
                <form onSubmit={onSubmit} className="space-y-4">
                    {/* Campo para el nombre */}
                    <div>
                        <input 
                            type="text" 
                            placeholder="Nombre del cachorro" 
                            {...register("nombre", { required: true })}
                            className='border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        />
                        {errors.nombre && (
                            <span className="text-red-500 text-sm mt-1 block">Este campo es obligatorio</span>
                        )}
                    </div>
                    
                    {/* Campo para la descripción */}
                    <div>
                        <textarea 
                            rows="3" 
                            placeholder="Descripción" 
                            {...register("descripcion")}
                            className='border border-gray-300 p-3 rounded-lg w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    
                    {/* Checkbox para estado de adopción (solo visible en edición) */}
                    {params.id && (
                        <div className="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                {...register("adoptado")} 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className="text-sm font-medium text-gray-700">
                                Adoptado
                            </label>
                        </div>
                    )}

                    {/* Botón de submit */}
                    <button 
                        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200' 
                        type="submit"
                    >
                        {params.id ? 'Actualizar' : 'Crear'}
                    </button>
                </form>

                {/* Botón de eliminar (solo visible en edición) */}
                {params.id && (
                    <button
                        onClick={async () => {
                            const accepted = window.confirm('¿Estás seguro de que quieres eliminar este cachorro?');
                            if (accepted) {
                                try {
                                    await deleteCachorro(params.id);
                                    toast.success('Cachorro eliminado exitosamente');
                                    navigate('/cachorros');
                                } catch (error) {
                                    console.error('Error al eliminar:', error);
                                    toast.error('Error al eliminar el cachorro');
                                }
                            }
                        }}
                        className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        Eliminar
                    </button>
                )}
            </div>
        </div>
    );
}