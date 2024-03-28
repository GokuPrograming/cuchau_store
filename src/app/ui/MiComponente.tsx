"use client"
import { useEffect, useState } from 'react';
import ProductoItem from '@/app/ui/ProductoItem'; // Importa el nuevo componente

interface Producto {
    id_producto: number;
    producto: string;
    precio: string;
    almacen: number;
    id_proveedor: number;
    id_categoria: number;
}

/* @client */
function MiComponente() {
    const [data, setData] = useState<Producto[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/product');

                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
                }

                const jsonData = await response.json();
                setData(jsonData.data);
            } catch (error: any) {
                setError(error.message);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <div className="border-2 border-red-500 p-4 rounded-md">
                <div className="text-red-500 font-bold">Error: {error}</div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="border-2 border-blue-500 p-4 rounded-md">
                <div className="text-blue-500 font-bold">Cargando...</div>
            </div>
        );
    }

    return (
        <div className="border-2 border-gray-500 p-4 rounded-md">
            <h1 className="text-xl font-bold mb-4">Lista de Productos</h1>
            {data.map((producto) => (
                <ProductoItem key={producto.id_producto} producto={producto} />
            ))}
        </div>
    );
}

export default MiComponente;
