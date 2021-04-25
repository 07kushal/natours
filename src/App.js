import "./theme/styles/sass/main.scss";
import logoWhite from "./assets/logo-white.png"; // Tell webpack this JS file uses this image
import nat_1 from "./assets/nat-1-large.jpg";
import nat_2 from "./assets/nat-2-large.jpg";
import nat_3 from "./assets/nat-3-large.jpg";
import nat_8 from "./assets/nat-8.jpg";

import nat_9 from "./assets/nat-9.jpg";

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
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <div className="card__heading card__heading--1">
                                        <span className="card__heading-span card__heading-span--1">
                                            {"the sea explorer"}
                                        </span>
                                    </div>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 Days tours</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guide</li>
                                            <li>Sleep in cozy hotels</li>
                                            <li>Difficulty :easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">
                                                Only
                                            </p>
                                            <p className="card__price-value">
                                                $297
                                            </p>
                                        </div>
                                        <a
                                            href="#bar"
                                            className="btn btn--white"
                                        >
                                            Book Now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <div className="card__heading card__heading--2">
                                        <span className="card__heading-span card__heading-span--2">
                                            {"the forest hiker"}
                                        </span>
                                    </div>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 Days tours</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guide</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty :medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">
                                                Only
                                            </p>
                                            <p className="card__price-value">
                                                $497
                                            </p>
                                        </div>
                                        <a
                                            href="#bar"
                                            className="btn btn--white"
                                        >
                                            Book Now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <div className="card__heading card__heading--3">
                                        <span className="card__heading-span card__heading-span--3">
                                            {"the snow adventurer"}
                                        </span>
                                    </div>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 Days tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guide</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty :hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">
                                                Only
                                            </p>
                                            <p className="card__price-value">
                                                $897
                                            </p>
                                        </div>
                                        <a
                                            href="#bar"
                                            className="btn btn--white"
                                        >
                                            Book Now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-center-text u-margin-top-big">
                        <a href="#bar" className="btn btn--green u-font-weight">
                            Discover all tours
                        </a>
                    </div>
                </section>
                <section className="section-stories">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            We make people genuinely happy
                        </h2>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img
                                    src={nat_8}
                                    alt="Person on a tour"
                                    className="story__image"
                                />
                                <figcaption className="story__caption">
                                    {"Mary Smith"}
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    I had the best week ever with my family
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Voluptatem quibusdam
                                    laudantium voluptatibus veniam non facilis
                                    qui numquam sit labore architecto laboriosam
                                    corrupti sed illo, cum, excepturi, iste id.
                                    Nam, explicabo! laudantium voluptatibus
                                    veniam non facilis qui numquam sit labore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img
                                    src={nat_9}
                                    alt="Person on a tour"
                                    className="story__image"
                                />
                                <figcaption className="story__caption">
                                    {"Jack Wilson"}
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    {"WOW! My life is completely different now"}
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Voluptatem quibusdam
                                    laudantium voluptatibus veniam non facilis
                                    qui numquam sit labore architecto laboriosam
                                    corrupti sed illo, cum, excepturi, iste id.
                                    Nam, explicabo! laudantium voluptatibus
                                    veniam non facilis qui numquam sit labore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="u-center-text u-margin-top-big">
                        <a href="#bar" className="btn-text">
                            Discover all tours
                        </a>
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
