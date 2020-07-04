'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update } from '../../store/actions';

class WrapperRoute extends Component<any, any> {

  async asynData(props, mounted) {
    const { type, locals, component, computedMatch, updateState } = props;
    if (mounted || computedMatch.url !== this.props.computedMatch.url) {
      const { asyncData } = component;
      if (asyncData) {
        const data = await asyncData(locals, { match: computedMatch });
        console.log(`>>WrapperRoute asynData update`, data, mounted);
        updateState(type, data);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.asynData(nextProps, false);
  }

  UNSAFE_componentWillMount() {
    this.asynData(this.props, true);
  }

  render() {
    const { component: Com, propKeys = [], store } = this.props;
    const state = propKeys.reduce((result, key) => { 
      result[key] = store[key]; 
      return result; 
    }, {});
    return <Com {...state} />;
  }
}

const mapStateToProps = state => {
  return {
    store: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateState: (type, data) => dispatch(update(type, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrapperRoute);
