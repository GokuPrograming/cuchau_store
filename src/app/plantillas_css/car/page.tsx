import { useEffect } from 'react';

export default function Car() {
    // useEffect(() => {
    //     // Carga el script de Alpine.js de forma asíncrona
    //     const script = document.createElement('script');
    //     script.src = 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/alpine.min.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     // Inicializa Alpine.js después de cargar el script
    //     if (window.Alpine) {
    //         window.Alpine.start();
    //     }
    // }, []);

    return (
        <section className="h-screen bg-gray-100 px-4 text-gray-600 antialiased">
            <div className="flex h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
                    <header className="border-b border-gray-100 px-5 py-4">
                        <div className="font-semibold text-gray-800">Manage Carts</div>
                    </header>

                    <div className="overflow-x-auto p-3">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                                <tr>
                                    <th className='p-2'>
                                        Select</th>
                                    <th className="p-2">
                                        <div className="text-left font-semibold">Product Name</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="text-left font-semibold">Quantity</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="text-left font-semibold">Total</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="text-center font-semibold">Action</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr>
                                    <td className="p-2">
                                        <input type="checkbox" className="h-5 w-5" value="id-1" />
                                    </td>
                                    <td className="p-2">
                                        <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left">1</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left font-medium text-green-500">RM 2,890.66</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="flex justify-center">
                                            <button>
                                                <svg className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <input type="checkbox" className="h-5 w-5" value="id-2" />
                                    </td>
                                    <td className="p-2">
                                        <div>
                                            <div className="font-medium text-gray-800">Logitech Keyboard</div>
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left">1</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-left font-medium text-green-500">RM 120.50</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="flex justify-center">
                                            <button>
                                                <svg className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                        <div>Total</div>
                        <div className="text-blue-600">RM <span x-text="total.toFixed(2)"></span></div>
                    </div>

                    <div className="flex justify-end">
                        <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
                    </div>
                </div>
            </div>
        </section>
    );
}
