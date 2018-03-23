import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';

const styles = {
};

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    HelloService.getGreeting()
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          response: responseJson.express,
        });
        console.log(responseJson.express)
        console.log("test")
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Home">
        {this.state.response}
      </div>
    );
  }
}
export default withStyles(styles)(Home);