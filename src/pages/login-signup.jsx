import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { ReactComponent as LeftLarge } from "../assets/img/backgrounds/login-left-large.svg";
import { ReactComponent as RightLarge } from "../assets/img/backgrounds/login-right-large.svg";
import TrelloMainLogo from "../assets/img/icons/trello-main-logo.svg";
import AtlassianLogo from "../assets/img/icons/atlassian-logo.png";
import { onLogin, onSignup } from "../store/actions/user.actions";
import { userService } from "../services/user.service";

export const LoginSignup = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [authPage, setAuthPage] = useState(null);

  const [fullCredentials] = useState({
    username: "",
    fullname: "",
    password: "",
  });
  const [credentials] = useState({
    username: "",
    password: "",
  });

  //REMOVE_COMMENT: delete dpendencies array??
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

  const isPasswordCorrect = async (values) => {
    const pass = await userService.checkPassword(values);
    return pass;
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
    }

    if (!values.password) {
      errors.password = "*Password is a required field";
    } else if (values.password.length < 5) {
      errors.password = "Enter a password of at least 5 characters";
    } else if (authPage === "login") {
      const match = await isPasswordCorrect(values);
      if (!match) {
        errors.password = "Password is wrong";
      }
    }

    return errors;
  };

  return (
    <section className="login-signup">
      <div className="login-signup-main">
        <div className="login-signup-logo flex justify-center align-center">
          <img src={TrelloMainLogo} alt="logo" />
          <span>Trellix</span>
        </div>

        <section className="inner-section">
          <div className="section-wrapper">
            {authPage === "signup" && (
              <div className="form-container flex column">
                <h1>Signup for your account</h1>
                <Formik
                  enableReinitialize={true}
                  initialValues={fullCredentials}
                  validate={validate}
                  onSubmit={onSubmit}
                  validateOnChange={false}
                  validateOnBlur={false}
                >
                  <Form className="flex column">
                    <Field
                      type="username"
                      placeholder="Enter username"
                      name="username"
                      autoFocus
                    />
                    <ErrorMessage name="username" component="div" />
                    <Field
                      type="fullname"
                      placeholder="Enter full name"
                      name="fullname"
                    />
                    <ErrorMessage name="fullname" component="div" />
                    <Field
                      type="password"
                      placeholder="Enter password"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit">Continue</button>

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
                {/* <h1>Login to Trellix</h1> */}
                <Formik
                  enableReinitialize={true}
                  initialValues={credentials}
                  validate={validate}
                  onSubmit={onSubmit}
                  validateOnChange={false}
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
                    {/* <ErrorMessage name="username" component="div" /> */}
                    <Field
                      type="password"
                      placeholder="Enter password"
                      name="password"
                    />
                    {/* <ErrorMessage name="password" component="div" /> */}
                    <button className="btn-login" type="submit pointer">
                      Log in
                    </button>
                    <div className="hr"></div>
                    <Link to="/auth/signup">Sign up for an account</Link>
                  </Form>
                </Formik>
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
