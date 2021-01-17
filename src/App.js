import "./theme/styles/sass/main.scss";
import logoWhite from "./assets/logo-white.png"; // Tell webpack this JS file uses this image
import nat_1 from "./assets/nat-1-large.jpg";
import nat_2 from "./assets/nat-2-large.jpg";
import nat_3 from "./assets/nat-3-large.jpg";

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
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Voluptatem quibusdam
                                laudantium voluptatibus veniam non facilis qui
                                numquam sit labore architecto laboriosam
                                corrupti sed illo, cum, excepturi, iste id. Nam,
                                explicabo!
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live adventures life you never have before
                            </h3>
                            <p className="paragraph">
                                {`Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Voluptatem quibusdam
                                laudantium voluptatibus veniam non facilis qui
                                numquam sit`}
                            </p>
                            <a href="#foo" className="btn-text">
                                Learn More &rarr;
                            </a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img
                                    src={nat_1}
                                    alt="Photo 1"
                                    className="composition__photo composition__photo--p1"
                                />
                                <img
                                    src={nat_2}
                                    alt="Photo 2"
                                    className="composition__photo composition__photo--p2"
                                />
                                <img
                                    src={nat_3}
                                    alt="Photo 3"
                                    className="composition__photo composition__photo--p3"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Explore the world
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Voluptatem quibusdam
                                    laudantium
                                </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-compass"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Meet Nature
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Voluptatem quibusdam
                                    laudantium
                                </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Find your way
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Voluptatem quibusdam
                                    laudantium
                                </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-heart"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    live a healthier life
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Voluptatem quibusdam
                                    laudantium
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-tour">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Most popular tours
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    FRONT
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    BACK
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    FRONT
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    BACK
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    FRONT
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    BACK
                                </div>
                            </div>
                        </div>
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
