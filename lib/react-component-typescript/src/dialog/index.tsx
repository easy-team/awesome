import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

let dialog: Dialog;
let div: HTMLDivElement;

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
  async create() {
    div = document.createElement('div')
    document.body.appendChild(div);
    await ReactDOM.render(<Dialog ref = { e => dialog = e } />, div);
  },
  destroy() {
    document.body.removeChild(div);
  },
  async show(com) {
    await this.create();
    dialog.show(com);
  },
  hide() {
    if (dialog) {
      dialog.hide();
      this.destroy();
    }
  }
}