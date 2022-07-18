import React from "react";
import axios from "axios";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Roster06DPL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  setRef(ref) {
    this.ref = ref;
    this.props.innerRef(ref);
  }
  componentDidMount() {
    axios.get("http://localhost:6060/api/girls_06DPL").then((res) => {
      this.setState({ players: res.data });
    });
  }
  render() {
    return (
      <div>
      <ul className="player-list">
          {
              this.state.players.map(player => <li key={player.id}>{player.first_name}</li>)
          }
      </ul>
      <ul className="starters">

      </ul>
      <ul className="bench">

      </ul>
      </div>
    //   <div>
    //     <DragDropContext>
    //       <Droppable droppableId="players">
    //         {(provided) => {
    //           <ul
    //             className="player-list"
    //             {...provided.droppableProps}
    //             ref={this.setRef}
    //           >
    //             {this.state.players.map((player) => (
    //               <li key={player.id}>{player.first_name}</li>
    //             ))}
    //           </ul>;
    //         }}
    //       </Droppable>
    //     </DragDropContext>
    //     <ul className="starters"></ul>
    //     <ul className="bench"></ul>
    //   </div>
    );
  }
}

class Roster06Academy extends React.Component {
  state = {
    players: [],
  };
  componentDidMount() {
    axios.get("http://localhost:6060/api/girls_06Premier").then((res) => {
      this.setState({ players: res.data });
    });
  }
  render() {
    return (
      <ul>
        {this.state.players.map((player) => (
          <li key={player.id}>{player.first_name}</li>
        ))}
      </ul>
    );
  }
}

export { Roster06DPL, Roster06Academy };
