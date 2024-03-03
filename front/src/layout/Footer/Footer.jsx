import { ReactComponent as Facebook } from "../../assets/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter.svg";
import { ReactComponent as WhatsApp } from "../../assets/WhatsApp.svg";
import { FooterLink, FooterSocialLink } from "../../views";

const Footer = () => {
  return (
    <div className="w-screen min-h-[320px] px-40 pt-[45px] bg-footer font-main">
      <div className="mx-auto flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start">
        <ul className="space-y-9">
          <li>
            <FooterLink
              url={"/about#features"}
              text={"¿Cómo funciona GiveIt?"}
            />
          </li>
          <li>
            <FooterLink url={"/about#story"} text={"Nuestra historia"} />
          </li>
          <li>
            <FooterLink
              url={"/about#sustainability"}
              text={"Sustentabilidad"}
            />
          </li>
          <li>
            <FooterLink url={"/about#faq"} text={"Preguntas Frecuentes"} />
          </li>
        </ul>
        <ul className="space-y-9">
          <li>
            <FooterLink
              url={"/legalities#privacy"}
              text={"Políticas de Privacidad"}
            />
          </li>
          <li>
            <FooterLink
              url={"/legalities#terms"}
              text={"Términos y Condiciones"}
            />
          </li>
          <li>
            <FooterLink
              url={"/legalities#cookies"}
              text={"Configuración de Cookies"}
            />
          </li>
        </ul>
        <div>
          <h4 className="mb-6 font-normal text-normal">Redes Sociales</h4>
          <div className="grid grid-cols-2 gap-10 justify-items-center">
            <FooterSocialLink
              url="https://www.instagram.com"
              svg={<Instagram />}
            />
            <FooterSocialLink
              url="https://www.facebook.com"
              svg={<Facebook />}
            />
            <FooterSocialLink url="https://www.twitter.com" svg={<Twitter />} />
            <FooterSocialLink
              url="https://www.whatsapp.com"
              svg={<WhatsApp />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
