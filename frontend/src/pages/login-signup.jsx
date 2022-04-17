import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GoogleLogin } from "react-google-login";

import { ReactComponent as LeftLarge } from "../assets/img/backgrounds/login-left-large.svg";
import { ReactComponent as RightLarge } from "../assets/img/backgrounds/login-right-large.svg";
import TrelloMainLogo from "../assets/img/icons/trello-main-logo.svg";
import AtlassianLogo from "../assets/img/icons/atlassian-logo.png";
import {
  onLogin,
  onSignup,
  onGoogleLogin,
} from "../store/actions/user.actions";

export const LoginSignup = () => {
  const user = useSelector((state) => state.userReducer.loggedInUser);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [authPage, setAuthPage] = useState(null);

  const [fullCredentials] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [credentials] = useState({
    username: "",
    password: "",
  });
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    if (user) navigate("/workspace");
    const { mode } = params;
    setAuthPage(mode);
  }, [navigate, params, user]);

  const onLoginUser = (values) => {
    dispatch(onLogin(values));
  };

  const onSignupUser = (values) => {
    dispatch(onSignup(values));
  };

  const onSubmit = (values) => {
    authPage === "signup" ? onSignupUser(values) : onLoginUser(values);
    navigate("/workspace");
  };

  const validate = async (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "*Username is a required field";
    } else if (values.username.length < 5) {
      errors.username = "Enter username of at least 5 characters";
    }

    if (authPage === "signup") {
      if (!values.fullname) {
        errors.fullname = "*Fullname is a required field";
      } else if (values.fullname.length < 5) {
        errors.fullname = "*Enter fullname of at least 5 characters";
      }

      if (!values.email) {
        errors.email = "*Email is a required field";
      }
      // else {
      //   //regex test here for email validity
      //   errors.password = "*Enter a valid email address";
      // }

      if (!values.password) {
        errors.password = "*Password name is a required field";
      } else if (values.password.length < 5) {
        errors.password = "*Enter fullname of at least 5 characters";
      }
    }

    if (!values.password) {
      errors.password = "*Password is a required field";
    } else if (values.password.length < 5) {
      errors.password = "Enter a password of at least 5 characters";
    }

    if (Object.keys(errors).length === 0) setIsInputValid(true);
    else setIsInputValid(false);

    return errors;
  };

  const onGoogleSuccess = (res) => {
    console.log(res);
    const { tokenId } = res;
    dispatch(onGoogleLogin(tokenId));
  };

  const onGoogleFailure = (res) => {
    console.log("Google login failed:", res);
  };

  return (
    <section className="login-signup">
      <div className="login-signup-main">
        <Link to="/">
          <div className="login-signup-logo flex justify-center align-center">
            <img src={TrelloMainLogo} alt="logo" />
            <span>Trellix</span>
          </div>
        </Link>

        <section className="inner-section">
          <div className="section-wrapper">
            {authPage === "signup" && (
              <div className="form-container flex column">
                <Formik
                  enableReinitialize={true}
                  initialValues={fullCredentials}
                  validate={validate}
                  onSubmit={onSubmit}
                  validateOnChange={true}
                  validateOnBlur={false}
                >
                  <Form className="flex column">
                    <div className="errors">
                      <ErrorMessage name="username" component="p" />
                      <ErrorMessage name="password" component="p" />
                      <ErrorMessage name="fullname" component="p" />
                      <ErrorMessage name="email" component="p" />
                    </div>

                    <h1>Signup for your account</h1>

                    <Field
                      type="username"
                      placeholder="Enter username"
                      name="username"
                      autoFocus
                    />
                    <Field
                      type="fullname"
                      placeholder="Enter full name"
                      name="fullname"
                    />
                    <Field
                      type="email"
                      placeholder="Enter email"
                      name="email"
                    />
                    <Field
                      type="password"
                      placeholder="Enter password"
                      name="password"
                    />
                    <button
                      type="submit"
                      className={`${isInputValid ? "btn-login" : ""}`}
                    >
                      Continue
                    </button>

                    <div className="hr"></div>

                    <Link to="/auth/login">
                      Already have an account? Log in
                    </Link>
                  </Form>
                </Formik>
              </div>
            )}

            {authPage === "login" && (
              <div className="form-container flex column">
                <Formik
                  enableReinitialize={true}
                  initialValues={credentials}
                  validate={validate}
                  onSubmit={onSubmit}
                  validateOnChange={true}
                  validateOnBlur={false}
                >
                  <Form className="flex column">
                    <div className="errors">
                      <ErrorMessage name="username" component="p" />
                      <ErrorMessage name="password" component="p" />
                    </div>

                    <h1>Login to Trellix</h1>

                    <Field
                      type="username"
                      placeholder="Enter username"
                      name="username"
                      autoFocus
                    />
                    <Field
                      type="password"
                      placeholder="Enter password"
                      name="password"
                    />
                    <button
                      className={`${isInputValid ? "btn-login" : ""}`}
                      type="submit pointer"
                    >
                      Log in
                    </button>
                    <div className="hr"></div>
                    <Link to="/auth/signup">Sign up for an account</Link>
                  </Form>
                </Formik>

                <div className="login-method-seperator">or</div>

                <div className="login-method-container">
                  <GoogleLogin
                    className="google-login-btn"
                    clientId="649411481714-edurkl997sd4lanpecnb46irhla8fcjk.apps.googleusercontent.com"
                    buttonText="Continue with google"
                    onSuccess={onGoogleSuccess}
                    onFailure={onGoogleFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <footer className="login-footer">
        <div>
          <hr />

          <div className="datlashian-logo flex justify-center">
            <img src={AtlassianLogo} alt="" />
            <span>dalmatian</span>
          </div>
        </div>
      </footer>

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
