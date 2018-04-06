import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import * as cartActions from '../Actions/cart';
import Shelf from './Shelf';

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
});

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
  render() {
    const { classes } = this.props;
    const cartList = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>;
    });

    return (
      <div className="Cart">
        <Paper className={classes.root} elevation={4}>
          <Shelf addToCart={this.props.actions.addToCart}/>
          <h2>Shopping Bag</h2>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Items</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.cart.map((item, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell>{item}</TableCell>
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
function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(cartActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cart));