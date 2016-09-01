import React, { Component, PropTypes } from 'react'

class NewPlayer extends Component {
  createPlayer(event) {
    if (event.keyCode !== 13) return

    const name = this.refs.playerName.value
    this.props.onChange({ name })
  }

  render() {
    const { name, color } = this.props

    return (
      <div>
        <button>Pick Color</button>
        <input type="text"
          placeholder="Player name..."
          ref="playerName"
          defaultValue={ name }
          onKeyUp={ this.createPlayer.bind(this) } />
      </div>
    )
  }
}

NewPlayer.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default NewPlayer
