import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div className="alert alert-info signout-info"><strong>Sorry</strong> to see you go...</div>;
  }
}

export default connect(null, actions)(Signout);
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({signoutUser: signoutUser}, dispatch);
// }
// export default connect(null, mapDispatchToProps)(Signout);
