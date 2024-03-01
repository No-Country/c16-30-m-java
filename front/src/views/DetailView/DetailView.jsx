import { Link } from "react-router-dom";

import UserLogoandCalification from "../../components/UserLogoandCalification/UserLogoandCalification";
import Boton from "../../components/Boton/Boton"

export default function DetailView() {
  const svgBackArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
    >
      <path
        d="M-0.000164032 7.99996C0.00632477 8.70143 0.288963 9.37209 0.786503 9.86662L6.5065 15.5999C6.75632 15.8483 7.09426 15.9877 7.4465 15.9877C7.79875 15.9877 8.13669 15.8483 8.3865 15.5999C8.51147 15.476 8.61067 15.3285 8.67836 15.1661C8.74605 15.0036 8.7809 14.8293 8.7809 14.6533C8.7809 14.4773 8.74605 14.303 8.67836 14.1405C8.61067 13.978 8.51147 13.8306 8.3865 13.7066L3.99984 9.33329L17.3332 9.33329C17.6868 9.33329 18.0259 9.19281 18.276 8.94276C18.526 8.69272 18.6665 8.35358 18.6665 7.99996C18.6665 7.64633 18.526 7.3072 18.276 7.05715C18.0259 6.8071 17.6868 6.66662 17.3332 6.66662L3.99984 6.66662L8.3865 2.27996C8.63758 2.03066 8.77933 1.69183 8.78058 1.33801C8.78183 0.984193 8.64247 0.644369 8.39317 0.393298C8.14387 0.142226 7.80504 0.000472069 7.45122 -0.000778198C7.0974 -0.00202847 6.75758 0.137329 6.5065 0.386632L0.786503 6.11996C0.285719 6.61776 0.00281334 7.29385 -0.000164032 7.99996Z"
        fill="black"
      />
    </svg>
  );

  const urlImgMap = "https://s3-alpha-sig.figma.com/img/e09c/a124/0b49931ef281bfed0ec3b76df55355e6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFXTs78gLZ~q5HAJeuVol88bm0LYzcEfn7dauuxAukbID7-HYvIQ8lQKxDUD3i8YwqGXISlMK8uxaroKEZmK5ml4zYVmp5ilElfQ-AIwIFLmkguKbhePjiXioi2pqaML~BII4LnDcdy7OjVpv-iBzCdTtER6cI0SMA4q-aL4VnQUQjZBXeMrjRDSZO-XIBYYC2ex8tZR9AlFpb-evf~PlUXf4iyXt9JuZBISPG4PvZs0ksqCuHz1DASV43U0kqbZI2EeGpzTt~8fu4Af9ph0U1OWlbAX4CtIVY0yjQzn4rBKLR~ck~vw4IO4L0diS8yE61zgZo5pVcN0qy8te34qsg__"

  const urlImg1 = "https://s3-alpha-sig.figma.com/img/8992/dc0d/eddb8846ee7b2f40cd9eaa59fc9923a8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2g1wHXbzsasgnQoWCZm3vnL8EJbyPH3UueXZecxkugROCJ3CdxGiWl1Yno63fixtYgtnzmooUbM6MCR-tAfc4jDJpncg1d-j7rRqf7PewgAmoFoYofCW0opBNdFfa0vkihwESeOrqci6Ay27YC0rr3RJzij~DCFQVRXPvH9AEAVFs3VktSC4ciV5rg4uq0Rk8i1~hcS8Vffz0YBTXwCaxG1W7eQMkNFfesDLtsw6k3qIMbc3kGwUgAgLK1mcOPuqq-fQ08~ddsM2WAqFpXNjOgxqLOof2Qb9gxsC7UzAPznLDbgOGEINsN5zKsllc9Pno7GdvqGoNjl3zANdxExSg__"

  const urlImg2 = "https://s3-alpha-sig.figma.com/img/36e5/000f/83fce6ad7f5aeee4b4e396c6b4054729?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gaTrHjUh3CsFK8Y9O53UeeCnPGr4nNXFvNkRq2AEVrhwubS0ODSz4bqJ7OAh2NkfqEe1styqiFVTBPiwZVhIQRFRAiwOPM7bAL8KlJJnvIAOWmfO~aSz5BqYOugtrOaShUwlgG7MH9bJGMzCc7Etpd11jpLASew16NP4YscGGDKgv549iDRV67aZmwPCxs5wqpVY-OQ76ufPWBkXiUqmLPiQKY0TYwyAZlxpm-fnDhB2UZozJFNNuSf-O4-6e7zT6KLKAIOgEFSfLy89aJYF9GO7CdZ4F-~Fwj0HNCFKFKBgl9AHDw8b-~0c4lxE7Yej0V0pONTJRWzkVH50tX-GGA__"

  const urlImg3 = "https://s3-alpha-sig.figma.com/img/9205/1e97/6b02b7701f110fdd7d6e03620011448c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNTyOoM4Gf-VI68ZVTnJz2geJ6VDe8yJxe6SpmGh741TH52RZT3BKT8nPL78NUnEQKWlFAuweK6cSGUe0oTHuf0YQcwrS-4IGygSDHb~FWSClWODOtbPxwDBnh-VPjO5OlLZm1Az61tvUnoQRBwbj6MwIRzRTA9OYSyTHdOxhLmspYQMEHdMizYYFRXMmZ8ICkiOtas6NessAXpL-LeBG6tFdb-yJ1k6SbhiqPmujfiIYuE-InvB6Kn~~w8B5uSN4DwE5sZ0cu75JViXJ61HBTEpc8YEtYYccJNt6T5nkkiBqEEooCTuXGkKaVpnq63KNeb-ED02tES6fKRY3JgjOg__"

  return (
    <>
      <div className="w-2/3 mx-auto my-0 mb-[40px]">
      <Link to={"/home"}>
        <div className="flex mb-[7px]">
          <div className="flex items-center mr-[7px]">{svgBackArrow}</div>
          <label className="cursor-pointer text-[20px]">Atrás</label>
        </div>
      </Link>
      <div className="flex flex-col  p-5 border-slate-300 border-2 rounded">
        <div className="flex">
          <img className="w-[381px] mr-[9px] h-[256px] border-[0.25px] border-slate-300 rounded-[5px]" alt="imagen del producto" src={urlImg1}/>
          <img className="w-[219px] mr-[9px] h-[256px] border-[0.25px] border-slate-300 rounded-[5px]" alt="imagen del producto" src={urlImg2} />
          <img className="w-[227px] h-[256px] border-[0.25px] border-slate-300 rounded-[5px]" alt="imagen del producto" src={urlImg3} />
        </div>
        <h3 className="font-bold mt-6 mb-2 text-[30px] leading-8">Titulo del producto</h3>
        <p className="text-[16px] mb-[26px] text-codgray font-normal leading-4">No Comida {">"} Muebles</p>
        <UserLogoandCalification />
        <p className="text-[20px] mt-[30px] mb-[24px]">De melamina, muy buen estado, buena calidad</p>
        <div className="flex">
          <label className="text-[22px] mb-[40px] font-bold">Cantidad:</label><p className="text-[22px]">1</p>
        </div>

        <div className="">
          <label className="text-[22px] font-bold">Horarios de recolección</label>
          <p className="text-[20px] mb-[40px]">Días de la semana despues de las 18hs. Fin de semana consultar.</p>
        </div>
        <label className="text-[20px] mb-[8px]">Ubicación aproximada en el mapa.</label>
        <img className="w-[860px] h-[184px] mb-[48px]" src={urlImgMap}/>
        <div className="mb-[88px]">
        <label className="text-[20px] mr-5">Inicia la conversación con este usuario para acordar la entrega!</label>
        <Boton styles={"bg-genoa bg text-white font-bold w-64 h-10 rounded-3xl my-4"}>Solicitar este producto</Boton>
        </div>
      </div>
      </div>
    </>
  );
}
