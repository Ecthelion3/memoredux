import React, { Component, PropTypes } from 'react'

class NewPlayer extends Component {
  updatePlayer(event) {
    if (event.keyCode !== 13) return

    const name = this.refs.playerName.value
    const { index } = this.props
    this.props.onChange({ name }, index)
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
          onKeyUp={ this.updatePlayer.bind(this) } />
      </div>
    )
  }
}

NewPlayer.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default NewPlayer
