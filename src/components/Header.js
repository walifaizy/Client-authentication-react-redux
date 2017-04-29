import React, {Component} from "react";
import { Link } from "react-router";
import { connect } from "react-redux";


class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      // Show a link to signout

       return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign out</Link>
      </li>
    } else {
      // Show a signin or signup
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps)(Header);
