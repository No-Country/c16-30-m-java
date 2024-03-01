import Paragraph from "../../components/Paragraph/Paragraph";
import Spacer from "../../components/Spacer/Spacer";
import Title from "../../components/Tittle/Title";

const About = () => {
  return (
    <div className="min-h-[100svh] max-w-5xl m-auto px-20 lg:px-14">
      <h1 className="mb-16 font-bold text-3xl text-center">Sobre GiveIt</h1>
      <div id="features" className="mb-2 ">
        <Title>¿Como funciona GiveIt?</Title>
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
      <div id="story" className="mb-2 ">
        <Title className="mb-4">Nuestra historia</Title>
        <Paragraph>
          La idea de GiveIt nació de la observación de una necesidad común en la
          sociedad moderna: la abundancia de artículos que ya no son utilizados
          pero que aún tienen valor para otras personas.
        </Paragraph>
      </div>
      <Spacer height={20} />
      <div id="sustainability" className="mb-2 ">
        <Title className="mb-4">Sustentabilidad</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima
          praesentium voluptatum commodi, nobis in est inventore? Repellendus,
          fuga dolore non quaerat repudiandae, quo cumque quos, eligendi
          corporis exercitationem voluptates.
        </Paragraph>
      </div>
      <Spacer height={20} />
      <div id="faq" className="mb-2 ">
        <Title className="mb-4">Preguntas Frecuentes</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto
          deleniti ad iste neque sit amet fugiat ipsam unde incidunt similique,
          omnis quasi accusamus quam commodi ab odio, explicabo modi.
        </Paragraph>
      </div>
      <Spacer height={20} />
    </div>
  );
};

export default About;
