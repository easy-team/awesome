// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'

let i = 0;
class About extends Component<any> {

  state = {
    title: 'Egg React Server Side Render'
  };

  handleClick = () => {
    i++;
    this.setState({ title: `Egg React Server Side Render Document- ${i}` });
  }

  render() {
    const styleTitle: any = {
      marginTop: '40px', marginBottom: '40px', textAlign: 'center'
    };
    const styleSub: any = {
      marginBottom: '40px', textAlign: 'center', color: '444444'
    };
    return <div>
      <h2 style={{...styleTitle}} onClick={this.handleClick}>{this.state.title}</h2>
      <h4 style={{...styleSub}}><a href="https://github.com/easy-team/egg-react-typescript-boilerplate">egg-react-typescript-boilerplate</a></h4>
      <h4 style={{...styleSub}}><a href="https://yuque.com/easy-team/egg-react">https://yuque.com/easy-team/egg-react</a></h4>
      <h4 style={{...styleSub}}><a href="https://easyjs.cn/egg-react">https://easyjs.cn/egg-react</a></h4>
    </div>;
  }
}

export default EASY_ENV_IS_DEV ? hot(About) : About
