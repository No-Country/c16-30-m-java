import HashLink from "../HashLink";

const FooterLink = ({ url, text }) => {
  return (
    <HashLink
      to={url}
      className="flex justify-center lg:justify-start items-center text-main text-normal font-main hover:scale-110 transition-transform duration-[0.3s] ease-in-out"
    >
      {text}
    </HashLink>
  );
};

export default FooterLink;
