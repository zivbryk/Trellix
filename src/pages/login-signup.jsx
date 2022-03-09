import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { ReactComponent as LeftLarge } from "../assets/img/backgrounds/login-left-large.svg";
import { ReactComponent as RightLarge } from "../assets/img/backgrounds/login-right-large.svg";
import TrelloMainLogo from "../assets/img/icons/trello-main-logo.svg";
import AtlassianLogo from "../assets/img/icons/atlassian-logo.png";
import { onLogin, onSignup } from "../store/actions/user.actions";

export const LoginSignup = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [authPage, setAuthPage] = useState(null);
  const [fullCredentials, setFullCredentials] = useState({
    username: "",
    fullname: "",
    password: "",
  });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //REMOVE_COMMENT: delete dpendencies array??
  useEffect(() => {
    if (user) navigate("/workspace");
    const { mode } = params;
    setAuthPage(mode);
  }, [params]);

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

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required field";
    } else if (values.username.length < 5) {
      errors.username = "User name should consist of at least 5 characters";
    }

    if (authPage === "signup") {
      if (!values.fullname) {
        errors.fullname = "Required field";
      } else if (values.fullname.length < 5) {
        errors.fullname = "Full name should consist of at least 5 characters";
      }
    }

    if (!values.password) {
      errors.password = "Required field";
    } else if (values.password.length < 5) {
      errors.password = "Enter a password of at least 5 characters";
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
                  </Form>
                </Formik>
                <div className="hr"></div>
                <Link to="/auth/login">Already have an account? Log in</Link>
              </div>
            )}

            {authPage === "login" && (
              <div className="form-container flex column">
                <h1>Login to Trellix</h1>
                <Formik
                  enableReinitialize={true}
                  initialValues={credentials}
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
                      type="password"
                      placeholder="Enter password"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" />
                    <button className="btn-login" type="submit">
                      Log in
                    </button>
                  </Form>
                </Formik>
                <div className="hr"></div>
                <Link to="/auth/signup">Sign up for an account</Link>
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
