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

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cachorros.map(cachorros => (
            <CachorroCard key={cachorros.id} cachorros={cachorros} />
        ))}
    </div>;
}
