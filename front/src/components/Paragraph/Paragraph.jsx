const Paragraph = ({ children, ...rest }) => {
  return (
    <p {...rest} className="text-pretty font-light text-slate-800">
      {children}
    </p>
  );
};

export default Paragraph;
