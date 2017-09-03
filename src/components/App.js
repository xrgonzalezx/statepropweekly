import React, { Component } from "react";
import "../styles/App.css";
import "../styles/index.css";
//add import js files
import NavBar from "./NavBar";
import PlayListForm from "./PlayListForm";
import PlayList from "./PlayList";

class App extends Component {
  //add NavBar, PlayListForm, PlayList render imort
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="musicData">
          <PlayListForm className="width" addToDb={this.addToList} />
          <PlayList className="width" />
        </div>
      </div>
    );
  }
}

export default App;


// this is from ReactJS: Children Components reading
// export default class App extends Component {
//   constructor(props){
//     super(props);
//
//     this.handleName = this.handleName.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//     this.state = {
//       students: [],
//       name: "",
//     };
//   }
//   handleName(e){
//     this.setState({name: e.target.value});
//
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.state.students.push({studentName: this.state.name});
