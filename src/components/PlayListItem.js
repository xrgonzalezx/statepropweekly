import React, { Component } from "react";
import "../styles/App.css";

const styleWhite = {
  color: 'white',
  textShadow: '2px 2px #808080'
}

class PlayList extends Component {
  render() {
    let songs = this.props.songs.map( songs => {
      return (
        <div className="songs" key={songs._id}>
          <p className="songContent">
            <span style={styleWhite} className="songLabel">User: </span>
            {songs.userName}
          </p>
          <p className="songContent">
            <span style={styleWhite} className="songLabel">Artist: </span>
            {songs.songArtist}
          </p>
          <p className="songContent">
            <span style={styleWhite} className="songLabel">Title: </span>
            {songs.songTitle}
          </p>
          <p className="songContent">
            <span style={styleWhite} className="songLabel">Notes: </span>
            {songs.songNotes}
          </p>
        </div>
      );
    });
    return (
      <div className="songItem">
        {songs}
      </div>
    );
  }
}

export default PlayList;
