import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './TestIt.styles';

class TestIt extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("TestIt will mount");
  };

  componentDidMount = () => {
    console.log("TestIt mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("TestIt will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("TestIt will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("TestIt did update");
  };

  componentWillUnmount = () => {
    console.log("TestIt will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div className="TestItWrapper">Test content</div>;
  }
}

TestIt.propTypes = {
  // bla: PropTypes.string,
};

TestIt.defaultProps = {
  // bla: 'test',
};

export default TestIt;
