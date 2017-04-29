import React, {Component} from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Features extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div className="jumbotron bg-primary features-bg"><h2>{this.props.message}}</h2></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  };
}

export default connect(mapStateToProps, actions)(Features);
