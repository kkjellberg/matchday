import React from "react";
import { Roster06Academy, Roster06DPL } from "../adapters/getRosterGirls";
import {
  threeFourThree,
  fourThreeThree,
  fourFourTwo,
} from "../components/formations";
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
      formation: ""
    };
    this.printRef = React.createRef();
  };

handleDownload(){
    const element = this.printRef.current;
    const canvas = html2canvas(element);
    const data = canvas.toDataUrl("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { roster, formation } = this.state;
    let MyRoster;
    let form;
    if (this.state.formation === "3-4-3") {
      form = threeFourThree;
    } else if (this.state.formation === "4-3-3") {
      form = fourThreeThree;
    } else if (this.state.formation === "4-4-2") {
      form = fourFourTwo;
    }
    if (this.state.roster === "06DPL") {
      MyRoster = <Roster06DPL />;
    } else if (this.state.roster === "06Academy") {
      MyRoster = <Roster06Academy />;
    }
    return (
      <div className="Teamsheet">
        <Navbar/>
        <form>
          <div className="teamsheet-header">
          <select name="roster" value={roster} onChange={this.changeHandler}>
            <option value="0">Choose your team</option>
            <option value="06DPL">06 DPL</option>
            <option value="06Academy">06 Premier</option>
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
          </div>
          <div className="field" ref={this.printRef}>
            <SoccerLineUp
              size={"normal"}
              color={"#20b2aa"}
              pattern={"lines"}
              awayTeam={form}
            />
          </div>
          <div className="send-sheet">
            <button type="button" onClick={this.handleDownload}>Download Lineup</button>
          </div>
        </form>
      </div>
    );
  }
}
