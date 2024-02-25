import heroImage from "../../assets/banner.png";
import PublishModal from "../../components/PublishModal/PublishModal";

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="aspect-[4/1] object-fill w-auto h-full min-h-[280px]"
        src={heroImage}
        alt="Aqui va el hero"
      />
      <PublishModal />
    </div>
  );
};

export default Hero;
