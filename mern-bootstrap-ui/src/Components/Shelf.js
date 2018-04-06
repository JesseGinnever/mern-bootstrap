import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
    this.state = {
      shelfItems: [
        'Shampoo',
        'Chocolate',
        'Yogurt',
        'Mechanical Keyboard'
      ]
    }
  }
  onAddItemToCart(item) {
    this.props.addToCart(item);
  }
  render() {
    const { classes } = this.props;

    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}><button onClick={() => this.onAddItemToCart(item)}>[+]</button>{item}</li>
    });
    return (
      <div>
          <h2>Store Shelf:</h2>
            {this.state.shelfItems.map((item, idx) => {
                return (
                  <Button 
                    color="secondary"
                      label="Label before"
                      labelPosition="before"
                      primary={true}
                      onClick={() => this.onAddItemToCart(item)}>
                    {item}
                    <AddShoppingCartIcon className={classes.button}/>
                  </Button>
                );
              })}
      </div>
    );
  }
}

export default withStyles(styles)(Shelf);