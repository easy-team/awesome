import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.css';

let toast = null;

class Toast extends Component {

  state = {
    display: 'none',
    msg: ''
  }

  componentDidMount() {}

  show(msg) {
    this.setState({
      msg,
      display: 'flex',
    })
  }

  hide() {
    this.setState({
      display: 'none',
    });
  }

  render() {
    return <div className="easy-toast" style= { { display: this.state.display } }>
      <div className="easy-toast-text">{this.state.msg}</div>
    </div>
  }
}

export default {
  async create() {
    if (!toast) {
      const div = document.createElement('div')
      document.body.appendChild(div);
      await ReactDOM.render(<Toast ref = { e => toast = e } />, div);
    }
    return toast;
  },
  async info(msg, duration = 1500) {
    const toast = await this.create();
    toast.show(msg);
    setTimeout(() => {
      toast.hide();
    }, duration);
  },
}