import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

let dialog = null;
let div = null;

class Dialog extends Component {

  state = {
    com: null,
    display: 'none',
  }

  show(com) {
    this.setState({
      com,
      display: 'flex',
    })
  }

  hide() {
    this.setState({
      display: 'none',
    });
  }

  render() {
    return <div className="easy-dialog" style= { { display: this.state.display } }>
      <div className="easy-dialog-content">
        { this.state.com }
      </div>
    </div>
  }
}

export default {
  create() {
    div = document.createElement('div')
    document.body.appendChild(div);
    ReactDOM.render(<Dialog ref = {dialog} />, div);
  },
  destroy() {
    document.body.removeChild(div);
  },
  show(com) {
    this.create();
    dialog.show(com);
  },
  hide() {
    if (dialog) {
      dialog.hide();
      dialog = null;
      this.destroy();
    }
  }
}