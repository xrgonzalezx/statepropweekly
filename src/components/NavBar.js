import React, {Component} from 'react';
import "../styles/App.css";
import logo from '../logo.svg';

class NavBar extends Component{
    render(){
        return(
            <div className="NavBar">
                <h1 className="header"><img src={logo} className="App-logo" alt="logo" />Play What</h1>
                </div>
        );
    }
}

export default NavBar;
