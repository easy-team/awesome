import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <h3 className="spa-title">React+Redux+React Router SPA Server Side Render Example</h3>
    );
  }
}


const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, {})(Home);
