import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import addPlayer from '../actions/add-player'
import NewPlayer from '../components/NewPlayer'

const MAX_PLAYERS = 3

class WhoIsPlaying extends Component {
  renderPlayer(player, index) {
    const { name, color } = player

    return <NewPlayer
      key={index}
      onChange={ this.createPlayer.bind(this) }
      { ...player } />
  }

  maxPlayersReached() {
    return (this.props.players.length === MAX_PLAYERS)
  }

  createPlayer(player) {
    if (this.maxPlayersReached()) return
    this.props.addPlayer(player)
  }

  renderEmptyPlayer() {
    const { players } = this.props
    if (this.maxPlayersReached()) return

    return this.renderPlayer({}, players.length)
  }

  render() {
    const { players } = this.props

    return (
      <div style={{ border: '1px solid #f00'}}>
        <h2>Who's Playing?</h2>
        { players.map(this.renderPlayer.bind(this)) }
        { this.renderEmptyPlayer() }
        <div>
          <button>Start Playing</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
  }
}

WhoIsPlaying.propTypes = {
  players: PropTypes.array.isRequired,
  addPlayer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { addPlayer })(WhoIsPlaying)
