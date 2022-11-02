import { render } from '@testing-library/react';
import { Component } from 'react';

class CC extends Component {
  constructor() {
    super();
    this.state = { total: 0, name: '' };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', ' total=', this.state.total);
    if (prevState.total === 5) {
      this.setState({ name: 'nelson' });
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <>
        <h1>類別型元件</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h1>
      </>
    );
  }
}

export default CC;
