import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navigation-bar ">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {this.props.name}
          </a>
          <a>
            <h5>{this.props.title}</h5>
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;
