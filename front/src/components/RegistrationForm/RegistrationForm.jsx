import { useForm } from "react-hook-form";

export default function Registro({ useLogin, setUseLogin }) {
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
    {/*
    try {
      async () => {
        const response = await fetch("url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data,
          }),
        });
      };
    } catch (error) {
      console.log(error);
    }
  */}
  });

  return (
    <>
      {useLogin == false && (
        <div className="bg-white w-96 p-3">
          <form className="m-auto" onSubmit={onSubmit}>
            <h1 className="text-3xl p-2 m-2 text-center font-bold">
              Bienvenid@!
            </h1>

            <div className="w-[357px] text-sm font-bold my-6 leading-[16.24px]">
              <p className="my-2">
                Registrate para comenzar a utilizar nuestros servicios
              </p>
              <label className="">
                Si ya tenes cuenta,{" "}
                <button
                  className="text-red-orange"
                  onClick={() => setUseLogin(!useLogin)}
                >
                  ingresá aquí
                </button>
              </label>
            </div>

            {/* email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Correo electronico
              </label>
              <input
                className="w-[349px] h-10 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                placeholder="ejemplo@email.com"
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
            </div>

            {errors.email && (
              <span className="block text-red-600 text-xs">
                {errors.email.message}
              </span>
            )}

            {/* password */}
            <div className="relative my-7">
            <label htmlFor="password" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Contraseña</label>
            <input
              className="w-[349px] h-10 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
              placeholder="********"
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
            </div>

            {errors.password && (
              <span className="block text-red-600 text-xs">
                {errors.password.message}
              </span>
            )}

            {/* confirm password */}
            <div className="relative my-7">

            <label htmlFor="confirmPassword" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Confirmar contraseña</label>
            <input
              className="w-[349px] h-10 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
              placeholder="********"
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
            </div>

            {errors.confirmPassword && (
              <span className="block text-red-600 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}

            {/* name */}
            <div className="relative my-7">
            <label htmlFor="name" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Nombre y apellido</label>
            <input
              className="w-[349px] h-10 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
              placeholder="Ej: Maria Inés Lopez"
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
            </div>
            {errors.name && (
              <span className="block text-red-600 text-xs">
                {errors.name.message}
              </span>
            )}

            {/* country */}
            <div className="relative my-7">

            <label htmlFor="country" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Pais</label>
            <select
              className="w-[349px] p-3 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
              id="country"
              {...register("country", {
                required: true,
                message: "País requerido",
              })}
            >
              <option selected="true" disabled="disabled">
                Seleccione país
              </option>
              <option value="ar">Argentina</option>
              <option value="it">Italia</option>
              <option value="vn">Venezuela</option>
            </select>

            {watch("country") == "ar" && (
              <>
                <div className="relative my-7">
                <label htmlFor="region" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Region</label>
                <select
                  id="region"
                  className="w-[349px]  p-3 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                >
                  <option selected="true" disabled="disabled">
                    Seleccione región
                  </option>
                  <option>Buenos Aires</option>
                  <option>Córdoba</option>
                  <option>Mendoza</option>
                  <option>Neuquen</option>
                  <option>Salta</option>
                </select>
                </div>
              </>
            )}
            {watch("country") == "vn" && (
              <>
                <div className="relative my-7">

                <label htmlFor="region" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Region</label>
                <select
                  id="region"
                  className="w-[349px] p-3 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                >
                  <option selected="true" disabled="disabled">
                    Seleccione región
                  </option>
                  <option>Barinas</option>
                  <option>Caracas</option>
                  <option>Cumaná</option>
                  <option>Guayana</option>
                  <option>Maracaibo</option>
                </select>
                </div>
              </>
            )}
            {watch("country") == "it" && (
              <>
                <div className="relative my-7">
                <label htmlFor="region" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Region</label>
                <select
                  id="region"
                  className="w-[349px] p-3 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                >
                  <option selected="true" disabled="disabled">
                    Seleccione región
                  </option>
                  <option>Bari</option>
                  <option>L'Aquila</option>
                  <option>Nápoles</option>
                  <option>Palermo</option>
                  <option>Roma</option>
                </select>
                </div>
              </>
            )}
            </div>

            {errors.country && (
              <span className="block text-red-600 text-xs">
                {errors.country.message}
              </span>
            )}

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

            {errors.terms && (
              <span className="block text-red-600 text-xs">
                {errors.terms.message}
              </span>
            )}

            <button className="bg-genoa text-white font-bold w-[349px] h-10 rounded-3xl my-4">
              Registrarse
            </button>
          </form>
        </div>
      )}
    </>
  );
}
