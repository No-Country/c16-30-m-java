const Title = ({ children, ...rest }) => {
  return (
    <h1 {...rest} className="font-bold text-xl mb-4">
      {children}
    </h1>
  );
};

export default Title;
