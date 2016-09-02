import { ADD_PLAYER } from '../actions/add-player'
import { UPDATE_PLAYER } from '../actions/update-player'

export default function updatePlayers( state = [], { type, payload } ) {
  switch (type) {
    case ADD_PLAYER :
      return state.concat([ payload ])
      console.log(state)

    case UPDATE_PLAYER :
      const { index, name, color } = payload

      return state.slice(0, index)
        .concat([Object.assign({}, state[index], { name, color })])
        .concat(state.slice(index + 1))

    default :
      return state
  }
}

// {
//   players: [
//     {
//       name: "",
//       color: "",
//       pairs: []
//     }
//   ],
//   cards: [
//     {
//       symbol: "",
//       flipped: false
//     }
//   ],
// }
