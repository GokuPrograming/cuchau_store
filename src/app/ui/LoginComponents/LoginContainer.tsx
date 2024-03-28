import React, { useState } from 'react';
import LoginForm from '@/app/ui/LoginComponents/LoginForm';
//import Cookies from 'js-cookie';

const LoginContainer: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (correo: string, password: string) => {
        try {
            // Simulación de una API de autenticación
            const response = await fetch('http://localhost:3000/usuario/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Guardar el token y los datos del usuario en Secure Cookies
                Cookies.set('token', data.token, { secure: true, sameSite: 'strict' });
                Cookies.set('user', JSON.stringify(data.user), { secure: true, sameSite: 'strict' });

                // Imprimir el token y los datos del usuario en la consola
                console.log('Token:', data.token);
                console.log('User:', data.user);

                setIsLoggedIn(true);
                setError(null);
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    const handleLogout = () => {
        // Eliminar el token y los datos del usuario de Secure Cookies al cerrar sesión
        Cookies.remove('token');
        Cookies.remove('user');

        setIsLoggedIn(false);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
                {isLoggedIn ? (
                    <>
                        <h2>Welcome! You are logged in.</h2>
                        <button onClick={handleLogout} className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300">
                            Logout
                        </button>
                    </>
                ) : (
                    <LoginForm onLogin={handleLogin} />
                )}
                {error && (
                    <p className="mt-4 text-red-500 text-xs italic">{error}</p>
                )}
            </div>
        </div>
    );
};

export default LoginContainer;
