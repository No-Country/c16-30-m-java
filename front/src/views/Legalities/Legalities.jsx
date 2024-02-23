import Paragraph from "../../components/Paragraph/Paragraph";
import Spacer from "../../components/Spacer/Spacer";
import Title from "../../components/Tittle/Title";

const Legalities = () => {
  return (
    <div className="min-h-[100svh] max-w-5xl m-auto px-20 lg:px-14">
      <h1 className="mb-16 font-bold text-3xl text-center">Legalidades</h1>
      <div id="privacy" className="mb-2 ">
        <Title>Políticas de Privacidad</Title>
        <Paragraph>
          GiveIt es una plataforma dedicada a promover la generosidad y el
          espíritu de compartir al permitir a los usuarios publicar artículos
          que desean regalar o donar a otros. Funciona como un espacio
          comunitario en línea donde las personas pueden ofrecer productos,
          desde artículos domésticos hasta ropa y juguetes, que ya no necesitan
          pero que pueden ser útiles para alguien más
        </Paragraph>
        <Spacer height={10} />
        <Paragraph>
          El funcionamiento de GiveIt es simple: los usuarios pueden crear
          publicaciones detalladas sobre los artículos que desean ofrecer,
          incluyendo descripciones, imágenes y detalles sobre su ubicación.
          Otros usuarios pueden explorar estas publicaciones y ponerse en
          contacto con los donantes para coordinar la recogida o entrega de los
          objetos.
        </Paragraph>
      </div>
      <Spacer height={20} />
      <div id="terms" className="mb-2 ">
        <Title className="mb-4">Términos y Condiciones</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </div>
      <Spacer height={20} />
      <div id="cookies" className="mb-2 ">
        <Title className="mb-4">Configuración de Cookies</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima
          praesentium voluptatum commodi, nobis in est inventore? Repellendus,
          fuga dolore non quaerat repudiandae, quo cumque quos, eligendi
          corporis exercitationem voluptates.
        </Paragraph>
      </div>
      <Spacer height={20} />
    </div>
  );
};

export default Legalities;
