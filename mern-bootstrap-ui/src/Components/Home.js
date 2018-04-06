import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: '40%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  deleteButton: {
    margin: theme.spacing.unit,
    float: 'right',
  }
});

class Home extends Component {
  state = {
    greetings: ['404 Greetings Not Found!'],
    greeting: ''
  };

  componentDidMount() {
    this.getAllGreetings();
  }

  getAllGreetings() {
    HelloService.getGreeting()
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          greetings: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  postGreetingAndReset() {
    HelloService.postGreeting(this.state.greeting).then((response) => response.json())
      .then((responseJson) => {
        this.getAllGreetings()
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clearGreetingAndReset() {
    HelloService.deleteGreetings().then((responseJson) => {
      this.getAllGreetings()
    })
    .catch((error) => {
      console.error(error);
    });
  }

  deleteGreetingAndReset(greetingId) {
    HelloService.deleteGreeting(greetingId).then((responseJson) => {
      this.getAllGreetings()
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Home">
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
              Enter Greetings!
            </Typography>
          <Grid container spacing={24}>
            <Grid item sm={12}>
              <TextField
                id="greeting-input"
                label="Greeting"
                placeholder="Hello, Ladie!"
                className={classes.textField}
                margin="normal"
                value={this.state.greeting}
                onChange={(event) => this.setState({greeting: event.target.value})}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <Button variant="raised" color="primary" className={classes.button} onClick={(e) => HelloService.postGreeting(this.state.greeting)}>
              Submit
              </Button>
            </Grid>
              <Grid item sm={12} md={4}>
              <Button variant="raised" color="primary" className={classes.button} onClick={this.postGreetingAndReset.bind(this)}>
              Submit and Reset
              </Button>
            </Grid>
            <Grid item sm={12} md={4}>
              <Button variant="raised" color="secondary" className={classes.button} onClick={this.clearGreetingAndReset.bind(this)}>
              Clear and Reset
              </Button> 
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.root} elevation={4}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Greeting</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.greetings.map(n => {
                return (
                  <TableRow key={n._id}>
                    <TableCell>{n.text}</TableCell>
                    <TableCell>
                      <Button variant="raised" color="secondary" className={classes.deleteButton} onClick={(e) => this.deleteGreetingAndReset(n._id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Home);