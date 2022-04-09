import { HomePageHeader } from "../cmps/home-page-header";
import { Link } from "react-router-dom";

import heroImageOne from "../assets/img/backgrounds/hero-img-1.png";
import boardView from "../assets/img/backgrounds/board-view.png";

export const HomePage = () => {
  return (
    <section className="home-page">
      <HomePageHeader />

      <section className="hero">
        <div className="container pt-7 pb-6 text-center text-md-left">
          <div className="row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-2 hero-image">
              <img
                className="img-fluid"
                src={heroImageOne}
                alt={"heroImageOne"}
                width="931"
                height="1205"
              />
            </div>

            <div className="hero-details col-lg-7">
              <h1>Trello helps teams move work forward.</h1>

              <p>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </p>

              <Link to="/board/62519d07234b9f9224c06d68/">
                <button className="btn btn-prim">Start as guest!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <div className="container text-center pt-md-6 pb-6">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>It’s more than work. It’s a way of working together.</h2>
              <p>
                Start with a Trello board, lists, and cards. Customize and
                expand with more features as your teamwork grows. Manage
                projects, organize tasks, and build team spirit—all in one
                place.
              </p>
              <p>
                <Link to="/workspace" className="btn btn-outline-prim px-3">
                  Start doing →
                </Link>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col mb-4">
              <img
                className="img-fluid w-100 d-block"
                src={boardView}
                alt={"heroImageOne"}
                width="931"
                height="1205"
              />
            </div>
          </div>

          <div className="row"></div>
        </div>
      </section>
    </section>
  );
};
