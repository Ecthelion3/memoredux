export const ADD_PLAYER = "ADD_PLAYER"

export default function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    payload: player
  }
}
