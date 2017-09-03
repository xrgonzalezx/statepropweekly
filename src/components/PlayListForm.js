
import React, { Component } from 'react';
import "../styles/App.css";

 class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  handleUserName = (e) => {
    this.setState({userName: e.target.value});
  }

  handleSongArtist = (e) => {
    this.setState({songArtist: e.target.value});
  }

  handleSongTitle = (e) => {
    this.setState({songTitle: e.target.value});
  }

  handleSongNotes =(e) => {
    this.setState({songNotes: e.target.value});
  }

    addToList = (e) => {
        e.preventDefault();
        this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
//stringify method converts a js value to a json string
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })

    .then(response => {
      console.log(response, "yesss");
    })

    .catch(err => {
      console.log(err, "noooot");
    });


    // line below //>>>>>We also update the value of state.name back to an empty string. This clears our input box since its value is the value of this.state.name.
    //     this.setState({students: this.state.students, name: ""});
    this.setState({
      userName: '',
       songNotes: '',
       songArtist: '',
       songTitle:''
     });
}

render() {
  return (
    <form className="formData width" onSubmit={this.addToList}>
      <div className="formDiv">
        <label className="formLabel">User Name:</label>
        <br />
        <input className="formInput" type="text" placeholder="Enter UserName" onChange={this.handleUserName} value={this.state.username} required />
      </div>
      <div className="formDiv">
        <label className="formLabel">Artist/Band:</label>
        <br />
        <input className="formInput" type="text" placeholder="Enter Artist/Band" onChange={this.handleSongArtist} value={this.state.songArtist} />
      </div>
      <div className="formDiv">
        <label className="formLabel">Song Title:</label>
        <br />
        <input className="formInput" type="text" placeholder="Enter Song Title" onChange={this.handleSongTitle} value={this.state.songTitle} />
      </div>
      <div className="formDiv">
        <label className="formLabel">Notes About Song:</label>
        <br />
        <input className="formNotes" type="text" onChange={this.handleSongNotes} value={this.state.songNotes} />
      </div>
      <input className="submitForm" type="submit" onClick={this.updateTrack}/>
    </form>
   );
  }
 }

export default PlayListForm;



// example
//     this.handleNameChange = this.handleNameChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
// }
// handleNameChange(event){
// console.log(event.target.value);
// this.setState({
// pilot: event.target.value
// })
// }
//
// handleSubmit(event){
// event.preventDefault()
//   this.setState({
//       pilot: this.state.pilot,
//       value: ""
//     })
//   }
