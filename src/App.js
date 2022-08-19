import "./styles.css";
import Nav from "./components/Nav";

//brands logos
import Databiz from "./images/client-databiz.svg";
import Audiophile from "./images/client-audiophile.svg";
import Meet from "./images/client-meet.svg";
import Maker from "./images/client-maker.svg";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="mainContent">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <div className="brands">
            <img src={Databiz} alt="Databiz" />
            <img src={Audiophile} alt="Audiophile" />
            <img src={Meet} alt="Meet" />
            <img src={Maker} alt="Maker" />
          </div>
        </div>
        <div className="mainImg"></div>
      </main>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/younessoub">Youness</a>.
      </div>
    </div>
  );
}
