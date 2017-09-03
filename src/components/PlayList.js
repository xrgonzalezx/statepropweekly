import React, { Component } from "react";
import "../styles/App.css";
import PlayListItem from "./PlayListItem";

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("songs from clicking 'update button':", this.state.songs)
      })
  }

  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("SONGS:", this.state.songs);
      });
  }

//render form
  render() {
    return (
      <div className="width">
        <button>
          <input className="updateButton" type="button"  value="Update" onClick={this.fetchData}/>
        </button>
        <div>
          <PlayListItem songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default PlayList;

// The state for your PlayList should just have one key value pair, songs, in order to properly function with the fetch function from the tinylasagna.js file that you will copy into the PlayListComponent (follow the directions in that file).
//   render() {
//     return (
//       <div className="class-maker">
//         <h3>Create Your Class List Here: </h3>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" onChange={this.handleName} value={this.state.name}/>
//           <input type="submit" value="Add Student" />
//         </form>
//         <StudentList students={this.state.students}/>
//       </div>
//     );
//   }
// }
