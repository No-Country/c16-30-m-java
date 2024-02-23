const FooterSocialLink = ({ url, svg }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="rounded-xl hover:opacity-75 transition-opacity duration-[.2s] ease-in-out shadow"
      rel="noreferrer"
    >
      {svg}
    </a>
  );
};

export default FooterSocialLink;
