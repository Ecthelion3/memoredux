# React Starter

## Installation

```bash
npm install
npm start
open http://localhost:3000
```


## Assignments

- [x] Remove the button to add more players
- [x] Add a check to see if we're not adding more than 3 players
- [x] Also make sure that we don't show the form to add another player if we reached the player limit of 3
- Create an action + reducer to update a player (name and/or color) by their index
  - Create an action that emits `UPDATE_PLAYER`, with the new player object as a payload
  - Create a case statement in the players reducer to process the `UPDATE_PLAYER` action **Make sure to not change the immutable state object directly!**
  - Return the new state from the reducer
- Add a check to see if we don't try to start a game with less than 2 players

------------------

Simplified version of [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) for the
traineeship program.
