import React from "react";
import axios from "axios";

export default class Reports extends React.Component {
  constructor(props){
    super(props);
    this.state = {reports: [], open: false};
    this.viewReport = this.viewReport.bind(this);
  };

  viewReport() {
      this.setState({open: !this.state.open});
  };

  componentDidMount() {
    axios.get("http://localhost:6060/api/all_reports").then((res) => {
      this.setState({ reports: res.data });
    });
  };
  
  render() {
    return (
      <div className="table-container">
        {this.state.reports.map((report) => (
          <div key={report.id}>
              <button className="report" onClick={this.viewReport}>
                <p>{report.opponent_team}</p>
                <p>
                  {report.opponent_score}-{report.home_score}
                </p>
                <p>{report.home_team}</p>
              </button>
              {this.state.open ? (
                  <div className="summary">
                    <h4>Formations</h4>
                    <p>Opponent:{report.opponent_formation} You:{report.home_formation}</p>
                    <h3>First Half</h3>
                    <p>{report.first_half}</p>
                    <h3>Second Half</h3>
                    <p>{report.second_half}</p>
                  </div>
                ): null}
          </div>
        ))}
      </div>
    );
  }
}
