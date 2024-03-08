import { LottieAnimacion } from "../../components/LotieAnimacion/LotieAnimacion";
import lottieUnderConstruction from "../../assets/lottieUnderConstruction.json"

export default function UnderConstruction() {
  return (
    <>
    <div className="flex items-center justify-around">
    <div className="flex flex-col items-center w-1/2 p-8">
      <h1 className="text-5xl text-slate-800 font-bold p-4">Seccion en Contrucción</h1>
      <p className="text-xl text-gray-500">Estamos trabajando en esta seccion.</p>
    </div>
    <div className="w-1/2">
      <LottieAnimacion animacion={lottieUnderConstruction} ancho={"440px"} alto={"440px"} />
    </div>
    </div>
    </>
  );
}
