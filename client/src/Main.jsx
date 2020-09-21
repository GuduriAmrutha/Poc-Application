import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Dashboard from "./Dashboard";
import About from "./About";
import Team from "./Team";
import './Main.css';
//import Weather from "./Weather";
//import NewTeamMember from "./NewTeamMember";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className='menu-postion'>
          <div className='menu-left-part'>
            <h1><NavLink to="/dashboard">Dashboard</NavLink></h1>
            <div className="ui divider"></div>
            <h1  id="about"><NavLink to="/about">About</NavLink></h1>
            <div className="ui divider"></div>
            <h1><NavLink to="/team">Team</NavLink></h1>
            <div className="ui divider"></div>
           
          </div>

          <div className='detail-right-part'>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;