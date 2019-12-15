import {combineReducers} from "redux";
import {MAKE_MOVE, RESTART} from "../actions/types";
import {Players} from "../constants";

function nextPlayer(state) {
    return state === Players.P2 ? Players.P1 : Players.P2;
}

function player(state = Players.P2, action) {
    switch (action.type) {
        case MAKE_MOVE: return nextPlayer(state);
        default: return state;
    }
}

function spaceId(state = null, action) {
    switch (action.type) {
        case MAKE_MOVE: return action.payload.spaceId;
        case RESTART: return null;
        default: return state;
    }
}

const lastMove = combineReducers({
    player,
    spaceId
});

export default lastMove;