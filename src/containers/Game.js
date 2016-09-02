import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import WhoIsPlaying from './WhoIsPlaying'
import createGame from '../actions/create-game'

class Game extends Component {
  createGame() {
    console.log('Create Game')
    this.props.createGame()
    console.log(this.props.cards)
  }

  renderContainer() {
    if (this.props.cards.length == 0) {
      return <WhoIsPlaying onChange={this.createGame.bind(this)}/>
    } else {
      return (
        <div>
          <h2>Game</h2>
          <button type="button" onClick={this.createGame.bind(this)}>Check</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div style={{ border: '1px solid #f00'}}>
        {this.renderContainer()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
}

Game.propTypes = {
  cards: PropTypes.array.isRequired,
  createGame: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { createGame })(Game)
