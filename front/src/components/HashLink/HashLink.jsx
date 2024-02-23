import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function HashLink({ children, to, ...rest }) {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }
    const element = document.getElementById(lastHash.current);
    if (!!element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      lastHash.current = "";
    }
  }, [location]);

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

export default HashLink;
