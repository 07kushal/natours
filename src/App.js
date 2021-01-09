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
                        <span className="primary-heading--sub">
                            is where life happens
                        </span>
                    </h1>
                    <a href="#foo" className="btn btn--white btn--animated">
                        Discover our tours
                    </a>
                </div>
            </header>
            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-8">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>
                </section>
                {/* <section>
                    <div className="grid-test">
                        <div className="row">
                            <div className="col-1-of-2">col-1-of-2</div>
                            <div className="col-1-of-2">col-1-of-2</div>
                        </div>
                        <div className="row">
                            <div className="col-1-of-3">col-1-of-3</div>
                            <div className="col-1-of-3">col-1-of-3</div>
                            <div className="col-1-of-3">col-1-of-3</div>
                        </div>
                        <div className="row">
                            <div className="col-1-of-3">col-1-of-3</div>
                            <div className="col-2-of-3">col-2-of-3</div>
                        </div>
                        <div className="row">
                            <div className="col-1-of-4">col-1-of-4</div>
                            <div className="col-1-of-4">col-1-of-4</div>
                            <div className="col-1-of-4">col-1-of-4</div>
                            <div className="col-1-of-4">col-1-of-4</div>
                        </div>
                        <div className="row">
                            <div className="col-1-of-4">col-1-of-4</div>
                            <div className="col-1-of-4">col-1-of-4</div>
                            <div className="col-2-of-4">col-2-of-4</div>
                        </div>
                        <div className="row">
                            <div className="col-1-of-4">col-1-of-4</div>
                            <div className="col-3-of-4">col-3-of-4</div>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
}

export default App;
