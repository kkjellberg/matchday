import React from "react";
import { Roster06Academy, Roster06DPL } from "../adapters/getRosterGirls";
// import {
//   threeFourThree,
//   fourThreeThree,
//   fourFourTwo,
// } from "../components/formations";
import Navbar from "../components/Navbar";
import SoccerLineUp from "react-soccer-lineup";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./teamsheet.css";

export default class Teamsheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: "",
      formation: "",
      gkName: "",
      cb1Name: "",
      cb2Name: "",
      cb3Name: "",
      rbName: "",
      lbName: "",
      cdmName: "",
      cm1Name: "",
      cm2Name: "",
      rmName: "",
      lmName: "",
      rwName: "",
      lwName: "",
      st1Name: "",
      st2Name: "",
    };
  }

  handleDownload() {
    const input = document.getElementById("divToDownload");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("starting-lineup.pdf");
    });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      roster,
      formation,
      gkName,
      cb1Name,
      cb2Name,
      cb3Name,
      rbName,
      lbName,
      cdmName,
      cm1Name,
      cm2Name,
      lmName,
      rmName,
      rwName,
      lwName,
      st1Name,
      st2Name,
    } = this.state;

    const threeFourThree = {
      squad: {
        gk: { name: gkName },
        df: [{ name: cb1Name }, { name: cb2Name }, { name: cb3Name }],
        cm: [
          { name: rmName },
          { name: cm1Name },
          { name: cm2Name },
          { name: lmName },
        ],
        fw: [{ name: rwName }, { name: st1Name }, { name: lwName }],
      },
    };

    const fourThreeThree = {
      squad: {
        gk: { name: gkName },
        df: [
          { name: rbName },
          { name: cb1Name },
          { name: cb2Name },
          { name: lbName },
        ],
        cm: [{ name: cm1Name }, { name: cdmName }, { name: cm2Name }],
        fw: [{ name: rwName }, { name: st1Name }, { name: lwName }],
      },
    };

    const fourFourTwo = {
      squad: {
        gk: { name: gkName },
        df: [
          { name: rbName },
          { name: cb1Name },
          { name: cb2Name },
          { name: lbName },
        ],
        cm: [
          { name: rmName },
          { name: cm1Name },
          { name: cm2Name },
          { name: lmName },
        ],
        fw: [{ name: st1Name }, { name: st2Name }],
      },
    };

    let MyRoster;
    let form;
    let eleven;
    if (this.state.formation === "3-4-3") {
      form = threeFourThree;
      eleven = [
        <li key={0}>
          GK:
          <input
            type="text"
            name="gkName"
            value={gkName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={1}>
          CB:
          <input
            type="text"
            name="cb1Name"
            value={cb1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={2}>
          CB:
          <input
            type="text"
            name="cb2Name"
            value={cb2Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={3}>
          CB:
          <input
            type="text"
            name="cb3Name"
            value={cb3Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={4}>
          RM:
          <input
            type="text"
            name="rmName"
            value={rmName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={5}>
          CM:
          <input
            type="text"
            name="cm1Name"
            value={cm1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={6}>
          CM:
          <input
            type="text"
            name="cm2Name"
            value={cm2Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={7}>
          LM:
          <input
            type="text"
            name="lmName"
            value={lmName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={8}>
          RW:
          <input
            type="text"
            name="rwName"
            value={rwName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={9}>
          ST:
          <input
            type="text"
            name="st1Name"
            value={st1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={10}>
          LW:
          <input
            type="text"
            name="lwName"
            value={lwName}
            onChange={this.changeHandler}
          />
        </li>,
      ];
    } else if (this.state.formation === "4-3-3") {
      form = fourThreeThree;
      eleven = [
        <li key={0}>
          GK:
          <input
            type="text"
            name="gkName"
            value={gkName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={1}>
          RB:
          <input
            type="text"
            name="rbName"
            value={rbName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={2}>
          CB:
          <input
            type="text"
            name="cb1Name"
            value={cb1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={3}>
          CB:
          <input
            type="text"
            name="cb2Name"
            value={cb2Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={4}>
          LB:
          <input
            type="text"
            name="lbName"
            value={lbName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={5}>
          CM:
          <input
            type="text"
            name="cm1Name"
            value={cm1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={6}>
          CDM:
          <input
            type="text"
            name="cdmName"
            value={cdmName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={7}>
          CM:
          <input
            type="text"
            name="cm2Name"
            value={cm2Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={8}>
          RW:
          <input
            type="text"
            name="rwName"
            value={rwName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={9}>
          ST:
          <input
            type="text"
            name="st1Name"
            value={st1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={10}>
          LW:
          <input
            type="text"
            name="lwName"
            value={lwName}
            onChange={this.changeHandler}
          />
        </li>,
      ];
    } else if (this.state.formation === "4-4-2") {
      form = fourFourTwo;
      eleven = [
        <li key={0}>
          GK:
          <input
            type="text"
            name="gkName"
            value={gkName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={1}>
          RB:
          <input
            type="text"
            name="rbName"
            value={rbName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={2}>
          CB:
          <input
            type="text"
            name="cb1Name"
            value={cb1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={3}>
          CB:
          <input
            type="text"
            name="cb2Name"
            value={cb2Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={4}>
          LB:
          <input
            type="text"
            name="lbName"
            value={lbName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={5}>
          RM:
          <input
            type="text"
            name="rmName"
            value={rmName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={6}>
          CM:
          <input
            type="text"
            name="cm1Name"
            value={cm1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={7}>
          CM:
          <input
            type="text"
            name="cm2Name"
            value={cm2Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={8}>
          LM:
          <input
            type="text"
            name="lmName"
            value={lmName}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={9}>
          ST:
          <input
            type="text"
            name="st1Name"
            value={st1Name}
            onChange={this.changeHandler}
          />
        </li>,
        <li key={10}>
          ST:
          <input
            type="text"
            name="st2Name"
            value={st2Name}
            onChange={this.changeHandler}
          />
        </li>,
      ];
    }
    if (this.state.roster === "06DPL") {
      MyRoster = <Roster06DPL />;
    } else if (this.state.roster === "06Academy") {
      MyRoster = <Roster06Academy />;
    }
    return (
      <div className="Teamsheet">
        <Navbar />
        <form>
          <div className="teamsheet-header">
            <select name="roster" value={roster} onChange={this.changeHandler}>
              <option value="0">Choose your team</option>
              <option value="06DPL">B-Elite 06 DPL</option>
              <option value="06Academy">B-Elite 06 Premier</option>
            </select>
            <select
              name="formation"
              value={formation}
              onChange={this.changeHandler}
            >
              <option value="0">Formation</option>
              <option value="3-4-3">3-4-3</option>
              <option value="4-3-3">4-3-3</option>
              <option value="4-4-2">4-4-2</option>
            </select>
          </div>
          <div className="lineup">
            {MyRoster}
            <ul className="starters">{eleven}</ul>
          </div>
          <div id="divToDownload">
            <div className="field">
              <SoccerLineUp
                size={"normal"}
                color={"#20b2aa"}
                pattern={"lines"}
                awayTeam={form}
              />
            </div>
          </div>
          <div className="send-sheet">
            <button type="button" onClick={this.handleDownload}>
              Download Lineup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
