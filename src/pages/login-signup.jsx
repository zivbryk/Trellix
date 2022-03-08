import { ReactComponent as LeftLarge } from "../assets/img/backgrounds/login-left-large.svg";
import { ReactComponent as RightLarge } from "../assets/img/backgrounds/login-right-large.svg";
import TrelloMainLogo from "../assets/img/icons/trello-main-logo.svg";

export const LoginSignup = () => {
  //

  return (
    <section className="login-signup">
      <div className="login-signup-main">
        <div className="login-signup-logo flex justify-center align-center">
          {/* <TrelloMainLogo /> */}
          <img src={TrelloMainLogo} alt="logo" />
          <span>Trellix</span>
        </div>

        <section className="inner-section">
          <div className="section-wrapper">
            {/* condition + login cmp */}
            {/* condition + signup cmp */}
          </div>
        </section>
      </div>

      <footer></footer>

      <div className="background">
        <div className="left-large">
          <LeftLarge />
        </div>
        <div className="right-large">
          <RightLarge />
        </div>
      </div>
    </section>
  );
};
