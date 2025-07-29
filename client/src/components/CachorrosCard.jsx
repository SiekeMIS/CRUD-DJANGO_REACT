export function CachorroCard({cachorros}) {
    return (
            <div>
                    <h1>{cachorros.name_cachorro}</h1>
                    <p>{cachorros.description_cachorro}</p>
                    <hr />
            </div>
    );
}