export const UPDATE_PLAYER = 'UPDATE_PLAYER'

export default function updatePlayer(player, index) {
  const { name, color } = player

  return {
    type: UPDATE_PLAYER,
    payload: { name, color, index }
  }
}
