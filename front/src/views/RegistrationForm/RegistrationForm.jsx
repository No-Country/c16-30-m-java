import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("enviando datos...");

    reset();
  });

  return (
    <div className="bg-white w-96 p-3 shadow-2xl">
      <form className="w-3/4 m-auto" onSubmit={onSubmit}>
        
        <h1 className="text-3xl p-2 m-2 text-center">Bienvenid@</h1>

        <p>Registrate para comenzar a utilizar nuestros servicios</p>


        {/* email */}
        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Correo no válido",
            },
          })}
        />

        {errors.email && <span>{errors.email.message}</span>}

        {/* password */}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password es requerido",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />

        {errors.password && <span>{errors.password.message}</span>}

        {/* confirm password */}
        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar password es requerido",
            },

            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden",
          })}
        />

        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}

        {/* name */}
        <label htmlFor="name">Nombre y apellido</label>
        <input
          className=""
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El nombre debe tener como maximo 20 caracteres",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}


        {/* country */}
        <label htmlFor="country">Pais</label>
        <select
          id="country"
          {...register("country", {
            required: true,
          })}
        >
          <option value="ar">Argentina</option>
          <option value="mx">Mexico</option>
          <option value="cl">Colombia</option>
          <option value="vn">Venezuela</option>
        </select>


        {/* codigo postal */}
        <label htmlFor="cp">Código postal</label>
        <input 
          id="cp"
          type="number"
          {...register("cp", {
            required: {
              value: true,
              message: "Código postal requerido",
            },
            minLength: {
              value: 4,
              message: "El código postal debe tener al menos 6 caracteres",
            },
          })}
        />


        {/* terms and conditions */}
        <div className="flex my-2">
          <input
            className="w-4"
            id="terms"
            type="checkbox"
            {...register("terms", {
              required: {
                value: true,
                message: "Debe aceptar los terminos y condiciones",
              },
            })}
          />
          <label className="p-1" htmlFor="terms">
            Acepto términos y condiciones
          </label>
        </div>

        {errors.terms && <span>{errors.terms.message}</span>}
        
        <Link to="/home"><button className="bg-slate-300 w-full h-9 h-7 rounded-sm my-4" type="submit">
          Registrarse
        </button></Link>
        
      </form>
      <label className="text-center">
        Tienes cuenta?{" "}
        <Link className="font-bold" to="/">
          Iniciar sesión
        </Link>
      </label>
    </div>
  );
}
