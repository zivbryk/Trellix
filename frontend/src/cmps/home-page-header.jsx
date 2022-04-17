import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TrelloLogoGradient } from "../assets/img/icons/trello-logo-gradient.svg";
export const HomePageHeader = () => {
  const [isNavBgVisible, setIsNavBgVisible] = useState(false);
  const stateRef = useRef(isNavBgVisible);

  const setState = (data) => {
    stateRef.current = data;
    setIsNavBgVisible(data);
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 100 && !stateRef.current) setState(true);
    else if (window.pageYOffset < 100 && stateRef.current) {
      setState(false);
    }
  }, [stateRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      // Side-effect cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`home-page-header fixed-top ${
        isNavBgVisible ? "visibleBg" : ""
      }`}
    >
      <nav className="navbar flex space-between">
        <Link to="/" className="logo flex">
          <TrelloLogoGradient />
          Trellix
        </Link>

        <div className="login-signup-btns">
          <Link to="/auth/login" className="btn btn-sm btn-link text-primary">
            Log in
          </Link>
          <Link
            to="/auth/signup"
            className="btn btn-sm btn-prim text-white font-bold"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};
