import "./App.css";
import logoWhite from "./assets/logo-white.png"; // Tell webpack this JS file uses this image

function App() {
    return (
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
                <a href="#" className="btn btn--white btn--animated">
                    Discover our tours
                </a>
            </div>
        </header>
    );
}

export default App;
