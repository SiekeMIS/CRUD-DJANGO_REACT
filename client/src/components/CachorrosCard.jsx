import {useNavigate} from 'react-router-dom';

export function CachorroCard({cachorros}) {
    const navigate = useNavigate();
    return (
            <div
            className="bg-zinc-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer "
            onClick={() => {
                navigate(`/cachorros/${cachorros.id}`);
            }}>
                    <h1 className='text-lg font-semibold uppercase'>{cachorros.name_cachorro}</h1>
                    <p className='text-gray-600'>{cachorros.description_cachorro}</p>
            </div>
    );
}