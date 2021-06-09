import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class HeroList extends Component {
  state = {
    selectedHero: 0,
  };

  handleChange = (e) => {
    this.setState({ selectedHero: e.target.value });
  };

  handleLoadComics = () => {
    const { selectedHero } = this.state;
    if (selectedHero === 0) {
      alert("Please select a hero from the list to continue");
    } else {
      this.props.history.push(`/characters/${selectedHero}`);
    }
  };
  render() {
    return (
      <div className="hero-list">
        <div className="hero-list-header">
          <p>Welcome To Marvelish. The Comic Catalog App</p>
          <p>View Your Favorite Comics With A Click</p>
        </div>
        <div className="hero-list-content">
          <span id="hero-list-form">
            <p className="hero-list-heading">Hero Selection</p>
            <p>Please Choose Your Favorite Hero</p>
            <p>Click On An Icon Below</p>
            <form id="character-selector" onChange={this.handleChange}>
              <input id="characterOne" type="radio" name="characters" value="1009187" />
              <label className="user-character" htmlFor="characterOne"></label>
              <input id="characterTwo" type="radio" name="characters" value="1009220" />
              <label className="user-character" htmlFor="characterTwo"></label>
              <input id="characterThree" type="radio" name="characters" value="1009268" />
              <label className="user-character" htmlFor="characterThree"></label>
              <input id="characterFour" type="radio" name="characters" value="1009288" />
              <label className="user-character" htmlFor="characterFour"></label>
              <input id="characterFive" type="radio" name="characters" value="1009368" />
              <label className="user-character" htmlFor="characterFive"></label>
              <input id="characterSix" type="radio" name="characters" value="1009610" />
              <label className="user-character" htmlFor="characterSix"></label>
              <input id="characterSeven" type="radio" name="characters" value="1009664" />
              <label className="user-character" htmlFor="characterSeven"></label>
              <input id="characterEight" type="radio" name="characters" value="1009697" />
              <label className="user-character" htmlFor="characterEight"></label>
              <input id="characterNine" type="radio" name="characters" value="1010365" />
              <label className="user-character" htmlFor="characterNine"></label>
            </form>
            <button className="hero-submit" onClick={this.handleLoadComics}>
              Load Comics
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(HeroList);
