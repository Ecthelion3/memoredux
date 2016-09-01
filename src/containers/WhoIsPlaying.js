import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import addPlayer from '../actions/add-player'
import NewPlayer from '../components/NewPlayer'

class WhoIsPlaying extends Component {
  renderPlayer(player, index) {
    const { name, color } = player

    return <NewPlayer
      key={index}
      onChange={ this.createPlayer.bind(this) }
      { ...player } />
  }

  createPlayer(player) {
    this.props.addPlayer(player)
  }

  render() {
    const { players } = this.props

    return (
      <div style={{ border: '1px solid #f00'}}>
        <h2>Who's Playing?</h2>
        { players.map(this.renderPlayer.bind(this)) }
        { this.renderPlayer({}, players.length) }
        <div>
          <button>More Players</button>
        </div>
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
