import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions


// Components

// Material UI Components
import mui from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material UI Colors
import {
  red700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red700,
    accent1Color: grey400,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1>Memory</h1>
          <div style={{ border: '1px solid #f00'}}>
            <h2>Who's Playing?</h2>
            <div>
              <button>Pick Color</button>
              <input type="text" placeholder="Player name..." />
            </div>
            <div>
              <button>Pick Color</button>
              <input type="text" placeholder="Player name..." />
            </div>
            <div>
              <button>More Players</button>
            </div>
            <div>
              <button>Start Playing</button>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

App.propTypes = {}

export default connect(mapStateToProps, {})(App)
