# Project Title

One Paragraph of project description goes here

## Setup: Get the final application ready to deploy
1. Install MongoDB

2. Install dependencies 
```
\mern-bootstrap\mern-bootstrap-server> npm install
```
```
\mern-bootstrap\mern-bootstrap-ui> npm install
```

## Deploy: How to deploy
1. Start MongoDB
```
mongod --dbpath=/data
```
2. Start Node.js server
```
mern-bootstrap\mern-bootstrap-server>nodemon server.js
```
or for debuggin
```
mern-bootstrap\mern-bootstrap-server>nodemon --inspect server.js
```

3. npm start
```
mern-bootstrap\mern-bootstrap-ui>npm start
```

## Debug in Visual Studio Code: How to debug Node.js

To debug in VS, we need to start our node server in debug mode with --inspect
```
nodemon --inspect server.js
```

Then we need to add configurations to .vscode/launch.json
```
{
  "version": "0.2.0",
  "configurations": [
    {
    "name": "Attach to Process",
    "type": "node",
    "request": "attach",
    "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/mern-bootstrap-server\\server.js"
    }
  ]
}
```

Now we can use VS to launch Attach to Process and debug our Node.js server via our IDE




## Step 1: Create React App

Resource: https://github.com/facebook/create-react-app#creating-an-app

First, you want to make sure that you have Node >= 6 and create-react-app on your local development machine.

Once you have these, you can execute the command the init your new react app!
```
>create-react-app mern-bootstrap
```

Once this finishes without error, open the new mern-bootstrap directory in terminal and start up your new app by running 'npm start'
```
>cd mern-bootstrap
>npm start
```

You can now see your app running at http://localhost:3000/

## Step 2: Add Material-UI
Resource: https://material-ui-next.com/getting-started/installation/

In this example, we are going to be using Material-UI v1.0.0-beta, which is the next version of Material-UI.

First we need to install Material-UI
```
>npm install material-ui@next
```

Then we will need to add Roboto Font.  
```
>npm install typeface-roboto --save
```
And import the typeface into App.js
```
import 'typeface-roboto';
```

Now we will install SVG Icons
```
>npm install material-ui-icons
```

Now to check that all is working, lets add some imports to the top of our App.js file
```
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
```

This is pulling some Material-UI components into our application so we can use them.  Lets test that by replacing the render function in App.js.
```
render() {
  return (
    <div className="App">
      <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}
```

As long as you still have your app running, you should be able to navigate to our App at http://localhost:3000/ and find that you now have a Material-UI AppBar at the top of the page.  

We now have Material-UI and it's dependencies added to our React application!

## Step 3: Add Custom Themes and Styling
Resource: https://material-ui-next.com/customization/themes/

Now that we have Material-UI, Lets customize our themes a little!

First we need import MuiThemeProvider into our App.js file
```
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
```

Then lets create an empty theme, as a place holder, above our App class.
```
const theme = createMuiTheme();
```

Now we need to wrap everything in our render method inside of our provider
```
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      ...
    </MuiThemeProvider>
  );
```

From here we can change our theme by importing some colors and throwing some options into the createMuiTheme function that we called previously
```
import teal from 'material-ui/colors/teal';
...
const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});
```

Notice how the login link at the top of the page is shifted to the left?  Let's go ahead and complete our Theme and Styling section by adding some code to shift that over a bit.

Lets start by importing withStyles into our App.js file.
```
import { withStyles } from 'material-ui/styles';
```

Now we can define some styles to add to our component
```
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
```

Now we can eddit our render function and assign some classNames to our components
```
<AppBar position="static">
  <Toolbar>
    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="title" color="inherit" className={classes.flex}>
      Title
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
```

In order to have access to the 'classes' property, we need to create it by passing the styles const into the withStyles function in our export at the bottom of App.js.
```
export default withStyles(styles)(App);
```
As well as pull the class property from this.prop in our render function in App.js
```
render() {
    const { classes } = this.props;
```

We should now have the Title showing in the center of our AppBar, as well as the Login link showing in the far right!

## Step 4: Organize Components with Import and Export

We want to make sure that we are organizing our code correctly.  So far we have our AppBar in our App.js, which is not a very good place for it.  

Lets start by creating a /Components folder under our /src folder, and creating a file named MenuBar.js and creating a basic React component shell
```
/src/Components/MenuBar.js
--------------------------
import React, { Component } from 'react';

class MenuBar extends Component {
  render() {

    return (
      <div className="MenuBar">

      </div>
    );
  }
}
export default withStyles(styles)(MenuBar);
```

Now we can move our entire AppBar component, styles, and imports into our new MenuBar.js file
```
/src/Components/MenuBar.js
--------------------------
import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="MenuBar">
        <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(MenuBar);
```
We can remove these elements from the App.js file and import the component from our MenuBar.js file
```
import MenuBar from './Components/MenuBar'
```
```
/src/App.js
--------------------------
import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';

import MenuBar from './Components/MenuBar'

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MenuBar />
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
```

We can now render that component in our App.js render return.
```
return (
  <div className="App">
    <MuiThemeProvider theme={theme}>
      <MenuBar />
    </MuiThemeProvider>
  </div>
);
```

Now we have a basic construct for how we can create and use new components!


## Step 4: React Router

Resource: https://www.youtube.com/watch?v=l9eyot_IXLY

React Router will give us the ability to route our users to components in our Single Page Application.  

The first thing we will need to do is install React Router and it's dependencies.

```
npm install react-router-dom
```

Once we have react router installed, we can create our Routes.js file inside of our src directory

```
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import SimpleCard from './Components/SimpleCard';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/" component={SimpleCard} />
    </Switch>
  </BrowserRouter>
);
```

Note:  We have / defined last in the switch, with no 'exact' keyword, so that all non-matching URLs will go to our route url.

Now we need to import this router file into our App.js file.

```
...
import Routes from './Routes';
...
<MuiThemeProvider theme={theme}>
  <MenuBar />
  <Routes />
</MuiThemeProvider>
...
```

Now that we have our router setup, we need to create the Home.js and SimpleCard.js components that we specified in the Routes.js file.

Note: SimpleCard.js is a copy of the [example here](https://material-ui-next.com/demos/cards/), but with the Card style changed to:
```
card: {
    width: 275,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
```
```
/Components/Home.js
--------------------------
import React from 'react';

export default () => <div>Home</div>;
```

Now you can see that when you navigate to http://localhost:3000/home you are greeted with a text of 'Home' and when you navigate anywhere else, you can see our Simple Card from the Material-UI demo!

Now we have a construct for controlling the flow of our application.  With Router V4, we also have the ability to use the render feature to pass properties to our component to allow for history, location, etc.

## Step 5: Node.js and Express

Now that we have the shell of a React front end application, lets create go ahead and create a Node.js server using Express so we can serve some data to our React front end!

The first thing we will want to do change up our file structure a bit to account for having multiple deployable portions of our stack.
This will begin buy moving all of our existing files underneath a new directory called 'mern-bootstrap-ui'.  After moving these files, you should be able to 'npm start' inside the new directory just as you would the 'mern-bootstrap' directory.
```
/mern-bootstrap/mern-bootstrap-ui/'
```
Now lets create a new directory where our Node.js server will live
```
/mern-bootstrap/mern-bootstrap-server/'
```

Let's navigate our new server directory and create a package.json file

```
{
  "name": "mern-bootstrap-server",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "nodemon server.js"
  },
  "dependencies": {
  }
}
```

We will be using nodemon to start our Node.js server, so let's install nodemon inside of our server directory

```
>npm install nodemon
```

We can now create a very basic Node.js server.js file in our server directory

```
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
```

To be able to use Express, first we need to install it in our server directory

```
>npm install nodemon
```

We can now create a very basic Node.js server.js file in our server directory

```
>npm install express
```

Now we can npm install and npm start

```
>npm install
...
>npm start
```

You will now be able to see your endpoint return on http://localhost:5000/api/hello

before we move on, lets make sure we create a .gitignore for our new server
```
/mern-bootstrap-server/.gitignore
-------------------------------------
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
/node_modules

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
## Step 5: Refactor Node.js Services

In order to ready our Node.js server for more services, lets build a slightly different file structure.

To be mindful of how we want to separate our services in the future, lets create a HelloService.js for handling our greeting service.

```
/mern-bootstrap-server/routes/hello.js
------------------------------------------------
const express = require('express');
const router = express.Router();
const cors = require('cors');

// need this to connect to localhost
router.use(cors());

/* GET greeting. */
router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;
```

Now lets create an api.js file for gathering our separate services that we will eventually create 

```
/mern-bootstrap-server/routes/api.js
------------------------------------------------
// Import dependencies
const express = require('express');
const router = express.Router();
const hello =  require('./hello');

router.use('/hello', hello);

router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next(); 
});

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('Welcome to the Node.js server!');
});

module.exports = router;
```

Now lets change up our server.js a little to account for this new structure

```
/mern-bootstrap-server/server.js
------------------------------------------------
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/api');

const app = express();

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '5000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
```

One last thing we will need to do before this call will work locally is make some CORS changes so we can call from UI to API while deployed locally.

To do this, we will need to install CORS in our server directory

```
>npm install cors
```

## Step 6: Connect React and Node.js

Now that our service is fleshed out and our UI is ready, lets feed data from our service into our front end.

Let's start by creating a service in react to call our Node.js API

```
/mern-bootstrap-ui/src/Services/HelloService.js
-----------------------------------------------

const apiEndpoint = "http://localhost:5000"
var HelloService = {};

HelloService.getGreeting = function() {
    return fetch(apiEndpoint + "/api/hello");
}

export default HelloService
```

Now we just need to modify our Home.js component to call this service and render the results

```
/mern-bootstrap-ui/src/Components/Home.js
-----------------------------------------------
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
```

Now when we refresh the UI and Server and visit http://localhost:3000/home we will see 'Hello From Express' on our Home component!

## Step 7: Connect Node.js with MongoDB

Now that we have Node.js feeding our React UI dynamically, we want a database to feed our Node.js server.

Let's start by installing Mongoose
```
npm install mongoose
```
We will also want to install body-parser to handle some Express POST requests for filling our database
```
npm install body-parser
```

Now let's go ahead and start up our mongo database
```
mongod --dbpath=/data
```

First we want to connect our server to MongoDB, and then we want to add some basic functionality, lets add some methods to create and delete Greetings from our mongo database

We will connect to MongoDB, add the Body-Parser so we can read post properties, and add some get some removal methods to hello.js

```
hello.js
------------------------------------
const express = require('express');
const router = express.Router();
const cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// need this to connect to localhost
router.use(cors());
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true }));

//Set up default mongoose connection
var dbHost = 'mongodb://127.0.0.1/my_database';

const options = {
};
// Connect to mongodb
mongoose.connect(dbHost, options);

// create mongoose schema
const greetingSchema = new mongoose.Schema({
  text: String
});

// create mongoose model
const Greeting = mongoose.model('Greetings', greetingSchema);

//remove all greetings
Greeting.remove({}, function (err) {
  if (err) return handleError(err);
});

/* GET greeting. */
router.get('/', (req, res) => {
  Greeting.find({}, (err, greeting) => {
    if (err) res.status(500).send(error)

    res.status(200).json(greeting);
  });
});

router.post('/create', (req, res) => {
  let greeting = new Greeting({
    text: req.body.text
  })

  greeting.save(error => {
      if (error) res.status(500).send(error);
      res.status(201).json({
          message: 'greeting created successfully'
      });
  });
});

router.delete('/', (req, res) => {
  Greeting.remove({}, function (err) {
    if (err) return handleError(err);
    res.status(201).json({
      message: 'all greetings removed!'
  });
  });
});

router.delete('/:greetingId', (req, res) => {
  Greeting.remove({_id: req.params.greetingId}, function (err) {
    if (err) return handleError(err);
    res.status(201).json({
      message: 'greeting removed!'
    });
  });
});

module.exports = router;
```

How that we have new services on our server, let's create matching services on our React application in HelloService.js
```
const apiEndpoint = "http://localhost:5000"
var HelloService = {};

HelloService.getGreeting = function() {
    return fetch(apiEndpoint + "/api/hello");
}

HelloService.postGreeting = function(greeting) {
    let greetingJson = {
        text: greeting
    }
    return fetch(apiEndpoint + "/api/hello/create", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(greetingJson)
    });
}

HelloService.deleteGreetings = function(greeting) {
    return fetch(apiEndpoint + "/api/hello", {
        method: 'DELETE'
    });
}

HelloService.deleteGreeting = function(greetingId) {
    return fetch(apiEndpoint + "/api/hello/" + greetingId, {
        method: 'DELETE'
    });
}

export default HelloService
```

This will add some services for our React application to call into our Node.js server to create and delete Greetings

Finally, let's add some input, a table, and some service calls to our Home.js so we can manage our greetings in our MongoDB!

```
import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';

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
          <TextField
            id="greeting-input"
            label="Greeting"
            placeholder="Hello, Ladie!"
            className={classes.textField}
            margin="normal"
            value={this.state.greeting}
            onChange={(event) => this.setState({greeting: event.target.value})}
          />
          <Button variant="raised" color="primary" className={classes.button} onClick={(e) => HelloService.postGreeting(this.state.greeting)}>
           Submit
          </Button>
          <Button variant="raised" color="primary" className={classes.button} onClick={this.postGreetingAndReset.bind(this)}>
           Submit and Reset
          </Button>
          <Button variant="raised" color="secondary" className={classes.button} onClick={this.clearGreetingAndReset.bind(this)}>
           Clear and Reset
          </Button>
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
```

We have added a few buttons here to demonstrate adding a greeting, adding a greeting and fetching on the callback, removing all greetings and fetching on the callback, and deleting a specific greeting.  This shows the several ways to handle onClicks and Callbacks.

## Step 8: Add Basic Redux
https://www.penta-code.com/how-to-add-redux-to-create-react-app/
Resource: https://www.youtube.com/watch?v=bzI7SKBeZmQ

Now that we have a basic functioning application with all of our components, lets add some example Redux for helping us manage our state.

First we want to install redux and react-redux

```
npm install redux --save
```
```
npm install react-redux --save
```

Now lets have some new components to show some very basic redux code

First, let's add our Action in our UI under /src/Actions/cart.js
```
export const addToCart = (item) => {
  return {
      type: 'addToCard',
      item
  };
}
```

Now we can create our reducer structure under /src/Reducers
```
cart.js
------------------
export default(state = [], payload) => {
  switch (payload.type) {
      case 'addToCard':
          return [...state, payload.item];
      default:
          return state;
  }
};

```
```
index.js
------------------
import cart from './cart';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cart
});
export default rootReducer;
```

now let's create our store under our src directory
```
store.js
------------------
import { createStore } from 'redux';
import rootReducer from  './Reducers';
export default(initialState) => {
    return createStore(rootReducer, initialState);
}
```

Now we can include our store and provide it to our application in src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
```

Finally, lets create some basic components to interact with our store and add a route to them.
```
src/Components/Cart.js
------------------
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../Actions/cart';
import Shelf from './Shelf';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const cartList = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>;
    });
    return (
      <div className="Cart">
        <Shelf addToCart={this.props.actions.addToCart}/>
        <h2>Shopping Bag</h2>
        <ol>
            {cartList}
        </ol>
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
```

```
src/Components/Shelf.js
------------------
import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
    this.state = {
      shelfItems: [
        'shampoo',
        'chocolate',
        'yogurt'
      ]
    }
  }
  onAddItemToCart(item) {
    this.props.addToCart(item);
  }
  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}><button onClick={() => this.onAddItemToCart(item)}>[+]</button>{item}</li>
    });
    return (
      <div>
          <h2>Store Shelf:</h2>
          <ul>
            {shelfItems}
          </ul>
      </div>
    );
  }
}

export default Shelf;
```

```
src/Routes.js
------------------
....
import Cart from './Components/Cart'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/" component={Cart} />
    </Switch>
  </BrowserRouter>
);

```
