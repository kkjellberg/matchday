import React from "react";
import axios from "axios";
import SoccerLineUp from "react-soccer-lineup";
import {
  threeFourThree,
  fourThreeThree,
  fourFourTwo,
} from "../components/formations";

export default class NewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opponent_team: "",
      opponent_formation: "",
      opponent_score: "",
      home_team: "",
      home_formation: "",
      home_score: "",
      first_half: "",
      second_half: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6061/api/add_report", this.state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      opponent_team,
      opponent_score,
      opponent_formation,
      home_team,
      home_score,
      home_formation,
      first_half,
      second_half,
    } = this.state;
    let hForm;
    if (this.state.home_formation === "3-4-3") {
      hForm = threeFourThree;
    } else if (this.state.home_formation === "4-3-3") {
      hForm = fourThreeThree;
    } else if (this.state.home_formation === "4-4-2") {
      hForm = fourFourTwo;
    }
    let oForm;
    if (this.state.opponent_formation === "3-4-3") {
      oForm = threeFourThree;
    } else if (this.state.opponent_formation === "4-3-3") {
      oForm = fourThreeThree;
    } else if (this.state.opponent_formation === "4-4-2") {
      oForm = fourFourTwo;
    }
    return (
      <div className="report-container">
        <form id="report" onSubmit={this.submitHandler}>
          <div className="report-header">
            <div className="opponent">
              <input
                type="text"
                id="opponent_team"
                name="opponent_team"
                placeholder="Opponent"
                value={opponent_team}
                onChange={this.changeHandler}
              />
              <input
                type="text"
                id="opponent_score"
                name="opponent_score"
                placeholder="0"
                value={opponent_score}
                onChange={this.changeHandler}
              />
            </div>
            <div className="home">
              <input
                type="text"
                id="home_score"
                name="home_score"
                placeholder="0"
                value={home_score}
                onChange={this.changeHandler}
              />
              <input
                type="text"
                id="home_team"
                name="home_team"
                placeholder="Your Team"
                value={home_team}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="field-view">
            <div className="formation-select">
              <select
                name="opponent_formation"
                value={opponent_formation}
                onChange={this.changeHandler}
              >
                <option value="0">Formation</option>
                <option value="3-4-3">3-4-3</option>
                <option value="4-3-3">4-3-3</option>
                <option value="4-4-2">4-4-2</option>
              </select>
              <select
                name="home_formation"
                value={home_formation}
                onChange={this.changeHandler}
              >
                <option value="0">Formation</option>
                <option value="3-4-3">3-4-3</option>
                <option value="4-3-3">4-3-3</option>
                <option value="4-4-2">4-4-2</option>
              </select>
            </div>
            <SoccerLineUp
              size={"small"}
              color={"#20b2aa"}
              pattern={"lines"}
              homeTeam={oForm}
              awayTeam={hForm}
            />
          </div>
          <div className="summary">
            <textarea
              name="first_half"
              placeholder="1st half summary..."
              rows="7"
              value={first_half}
              onChange={this.changeHandler}
            />
            <textarea
              name="second_half"
              placeholder="2nd half summary..."
              rows="7"
              value={second_half}
              onChange={this.changeHandler}
            />
          </div>
          <div className="save-report">
            <button type="submit">Save Report</button>
          </div>
        </form>
      </div>
    );
  }
}
