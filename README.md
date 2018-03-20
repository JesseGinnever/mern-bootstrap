# Project Title

One Paragraph of project description goes here

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