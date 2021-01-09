import "./theme/styles/sass/main.scss";
import logoWhite from "./assets/logo-white.png"; // Tell webpack this JS file uses this image

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" alt="logo" src={logoWhite} />
        </div>
        <div className="header__text-box">
          <h1 className="primary-heading">
            <span className="primary-heading--main">Outdoors</span>
            <span className="primary-heading--sub">is where life happens</span>
          </h1>
          <a href="#foo" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </section>
      </main>
    </>
  );
}

export default App;
