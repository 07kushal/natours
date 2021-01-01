import "./App.css";
import logoWhite from "./assets/logo-white.png"; // Tell webpack this JS file uses this image

function App() {
    return (
        <header className="header">
            <div className="logo-box">
                <img className="logo" alt="logo" src={logoWhite} />
            </div>
            <div className="text-box">
                <h1 className="primary-heading">
                    <span className="primary-heading-main">Outdoors</span>
                    <span className="primary-heading-sub">
                        is where life happens
                    </span>
                </h1>
                <a href="#" className="btn btn-white">
                    Discover our tours
                </a>
            </div>
        </header>
    );
}

export default App;
