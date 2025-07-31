import {useNavigate} from 'react-router-dom';

export function CachorroCard({cachorros}) {
    const navigate = useNavigate();
    return (
            <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}} onClick={() => {
                navigate(`/cachorros/${cachorros.id}`);
            }}>
                    <h1>{cachorros.name_cachorro}</h1>
                    <p>{cachorros.description_cachorro}</p>
                    <hr />
            </div>
    );
}