"use client"
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import MenuStoreHeader from './MenuStoreHeader';

const MenuStore: React.FC = () => {
    const [productos, setProductos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/product');

                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }

                const data = await response.json();
                setProductos(data.data);
                setIsLoading(false);
            } catch (error) {
                //setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = async (productId: number) => {
        // Aquí puedes implementar la lógica para agregar el producto al carrito
        const id_usuario: number = 1; // Declarar la variable como un número
        console.log(`Producto con ID ${productId} para el usuario con el id ${id_usuario} para el carrito`);

        try {
            // Configurar la URL de la API y el cuerpo de la solicitud
            const apiUrl = 'http://localhost:3000/add-to-cart';
            const requestBody = {
                productId: productId,
                userId: id_usuario
            };

            // Realizar la solicitud POST a la API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('No se pudo agregar el producto al carrito');
            }

            // Leer y mostrar la respuesta de la API
            const responseData = await response.json();
            console.log(responseData);

        } catch (error) {
            console.error(error.message);
            alert('Error al agregar el producto al carrito');
        }
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="bg-white">
            <MenuStoreHeader />
            <section className="py-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productos.map((producto) => (
                        <ProductItem key={producto.id_producto} producto={producto} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MenuStore;
