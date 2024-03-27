"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {

        try {
            const res = await fetch("http://localhost:3000/usuario/registro", {
                method: "POST",
                body: JSON.stringify({

                    correo: data.correo,
                    password: data.password,
                    nombre: data.nombre,
                    apellido_paterno: data.apellido_paterno,
                    apellido_materno: data.apellido_materno,
                    telefono: data.telefono,
                    fecha_nacimiento: data.fecha_nacimiento

                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                router.push("/auth/login");
            } else {
                throw new Error("Failed to register");
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("An error occurred while registering. Please try again.");
        }
    });

    console.log(errors);

    return (
        <div className="min-h-screen flex justify-center items-center mt-16 mb-16">
            <form onSubmit={onSubmit} className="w-1/4">
                <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
                <label htmlFor="correo" className="text-slate-500 mb-2 block text-sm">
                    Email:
                </label>
                <input
                    type="email"
                    {...register("correo", {
                        required: {
                            value: true,
                            message: "correo requerido",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="user@email.com"
                />
                {errors.email && (
                    <span className="text-red-500 text-xs"></span>
                )}

                <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
                    Password:
                </label>
                <input
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="********"
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">

                    </span>
                )}

                <label htmlFor="nombre" className="text-slate-500 mb-2 block text-sm">
                    nombre de usuario:
                </label>
                <input
                    type="text"
                    {...register("nombre", {
                        required: {
                            value: true,
                            message: "nombre requerido",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="yourUser123"
                />

                {errors.nombre && (
                    <span className="text-red-500 text-xs">

                    </span>
                )}

                <label htmlFor="apellido_paterno" className="text-slate-500 mb-2 block text-sm">
                    Apellido paterno
                </label>
                <input
                    type="text"
                    {...register("apellido_paterno", {
                        required: {
                            value: true,
                            message: "apellido_paterno requerido",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="apellido paterno"
                />

                {errors.nombre && (
                    <span className="text-red-500 text-xs">

                    </span>
                )}

                <label htmlFor="apellido_materno" className="text-slate-500 mb-2 block text-sm">
                    Apellido paterno
                </label>
                <input
                    type="text"
                    {...register("apellido_materno", {
                        required: {
                            value: true,
                            message: "apellido materno requerido",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="apellido materno"
                />

                {errors.nombre && (
                    <span className="text-red-500 text-xs">

                    </span>
                )}

                <label htmlFor="telefono" className="text-slate-500 mb-2 block text-sm">
                    Numero Telefono
                </label>
                <input
                    type="tel"
                    {...register("telefono", {
                        required: {
                            value: true,
                            message: "telefono requerido",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="telefono"
                />

                {errors.nombre && (
                    <span className="text-red-500 text-xs">

                    </span>
                )}

                <label htmlFor="fecha_nacimiento" className="text-slate-500 mb-2 block text-sm">
                    Fecha de nacimiento
                </label>
                <input
                    type="date"
                    {...register("fecha_nacimiento", {
                        required: {
                            value: true,
                            message: "fecha_nacimiento requerido",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="Fecha de Nacimiento"
                />

                {errors.nombre && (
                    <span className="text-red-500 text-xs">

                    </span>
                )}

                <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
                    Register
                </button>
            </form>
        </div>
    );
}
export default RegisterPage;