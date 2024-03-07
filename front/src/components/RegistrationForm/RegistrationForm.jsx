import { useForm } from "react-hook-form";
import { helpHttp } from "../../common/helpHttp";

export default function Registro({ useLogin, setUseLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  let api = helpHttp();

 const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    alert("enviando datos....");

    let options = {
      body: {
        email: data.email.toLowerCase(),
        password: data.password,
        name: data.name,
        dni: "dni",
        country: data.country,
        region: data.region,
        city: data.city,
        location: "location",
        phone: data.phone
      },
    };
 
    await api.post("auth/register", options).then((res) => {
      if (!res.err) {
      //setReportData(res);
      console.log(res)
      } else {
      //setErrorMessage(res.errors);
      console.log(res.errors)
      }
  }).catch((err) => console.log(err));

    reset();

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
            <div className="relative my-7">
              <label
                htmlFor="email"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Correo electronico
              </label>
              <input
                className="w-[349px] h-9 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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
              {errors.email && (
                <span className="block text-red-600 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* password */}
            <div className="relative my-7">
              <label
                htmlFor="password"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Contraseña
              </label>
              <input
                className="w-[349px] h-9 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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
              {errors.password && (
                <span className="block text-red-600 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* confirm password */}
            <div className="relative my-7">
              <label
                htmlFor="confirmPassword"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Confirmar contraseña
              </label>
              <input
                className="w-[349px] h-9 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                placeholder="********"
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirmar password es requerido",
                  },

                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmPassword && (
                <span className="block text-red-600 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* name */}
            <div className="relative my-7">
              <label
                htmlFor="name"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Nombre y apellido
              </label>
              <input
                className="w-[349px] h-9 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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
              {errors.name && (
                <span className="block text-red-600 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* phone */}
            <div className="relative my-7">
              <label
                htmlFor="phone"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Teléfono
              </label>
              <input
                className="w-[349px] h-9 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                placeholder="Ej: 35433543"
                type="number"
                id="phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Teléfono es requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "El teléfono debe tener al menos 8 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "El teléfpno debe tener como maximo 20 caracteres",
                  },
                })}
              />
              {errors.phone && (
                <span className="block text-red-600 text-xs">
                  {errors.phone.message}
                </span>
              )}
            </div>


            {/* country */}
            <div className="relative my-7">
              <label
                htmlFor="country"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Pais
              </label>
              <select
                className="w-[349px] h-12 p-1 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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
                    <label
                      htmlFor="region"
                      className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
                    >
                      Region
                    </label>
                    <select
                      id="region"
                      {...register("region", {
                        required: true,
                        message: "Region es requerido",
                      })}
                      className="w-[349px] h-12 p-1 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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
                    <label
                      htmlFor="region"
                      className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
                    >
                      Region
                    </label>
                    <select
                      id="region"
                      {...register("region", {
                        required: true,
                        message: "Region es requerido",
                      })}
                      className="w-[349px] h-12 p-1 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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
                    <label
                      htmlFor="region"
                      className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
                    >
                      Region
                    </label>
                    <select
                      id="region"
                      {...register("region", {
                        required: true,
                        message: "Region es requerido",
                      })}
                      className="w-[349px] h-12 p-1 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
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

            {/* city */}
            <div className="relative my-7">
              <label
                htmlFor="city"
                className="absolute bg-white top-[-15px] left-[12px] px-2 py-0"
              >
                Ciudad
              </label>
              <input
                className="w-[349px] h-9 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                placeholder="Ingrese su ciudad"
                type="text"
                id="city"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Ciudad es requerida",
                  },
                  minLength: {
                    value: 3,
                    message: "La ciudad debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "La Ciudad debe tener como maximo 20 caracteres",
                  },
                })}
              />
              {errors.city && (
                <span className="block text-red-600 text-xs">
                  {errors.city.message}
                </span>
              )}
            </div>


            <button className="bg-genoa text-white font-bold w-[349px] h-10 rounded-3xl my-4">
              Registrarse
            </button>
          </form>
        </div>
      )}
    </>
  );
}
