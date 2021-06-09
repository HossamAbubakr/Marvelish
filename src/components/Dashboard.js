import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="hero-list">
      <div className="hero-list-header">
        <p>Welcome To Marvelish. The Comic Catalog App</p>
        <p>View Your Favorite Comics With A Click</p>
      </div>
      <div className="dashboard">
        <img src="/images/dashboard-logo.png" alt="oowlish-marvel logo" id="marvelish-logo" />
        <p>Your One Stop Comic App</p>
        <p>Browse, Discover, Enjoy</p>
        <h3>Marvelish is the best place to find your favorite comics, discover new ones and get the latest prices!</h3>
        <Link to="/characters">
          <button className="hero-submit-alt begin-button">Begin</button>
        </Link>
      </div>
    </div>
  );
}
