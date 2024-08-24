## React Component Test

export umd and esm lib


## Usage

```js
import { Dialog, Toast } from 'easyjs-react-component-lib';
// import * as EasyComponentLib from 'easyjs-react-component-lib';

export default class ReactComponentTest extends Component {

  componentDidMount() {
    Toast.info('React Component Toast Test');
    Dialog.show(<h1>Dialog</h1>);
  }

  render() {
    return <div>React Toast, Dialog Component Test</div>
  }
}
```