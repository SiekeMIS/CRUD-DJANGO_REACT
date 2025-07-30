import { useEffect, useState } from "react";
import {getAllCachorros} from "../api/cachorros.api";
import { CachorroCard } from "./CachorrosCard";

export function CachorrosList() {
    const [cachorros, setCachorros] = useState([]);

    useEffect(() => {
        
        async function loadCachorros() {
            const res = await getAllCachorros();
            setCachorros(res.data);
        }
        loadCachorros();

        console.log("CachorrosList component mounted");
        // Fetch cachorros data from API
    }, []);

    return <div>
        {cachorros.map(cachorros => (
            <CachorroCard key={cachorros.id} cachorros={cachorros} />
        ))}
    </div>;
}
