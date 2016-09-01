import { ADD_PLAYER } from '../actions/add-player'

export default function updatePlayers( state = [], { type, payload } ) {
  switch (type) {
    case ADD_PLAYER :
      return state.concat([ payload ])

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
