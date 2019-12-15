import {combineReducers} from "redux";
import {initialSpaceIds, initialSpaces} from "./initializers";
import {MAKE_MOVE, RESTART} from "../actions/types";

function makeMove(state, action) {
    const {payload} = action;
    const {player, spaceId} = payload;

    const space = state[spaceId];

    return {
        ...state,
        [spaceId]: {
            ...space,
            owner: player
        }
    }
}

function byId(state = initialSpaces, action) {
    switch (action.type) {
        case MAKE_MOVE: return makeMove(state, action);
        case RESTART: return initialSpaces;
        default: return state;
    }
}

function allIds(state = initialSpaceIds, action) {
    switch (action.type) {
        default: return state;
    }
}

const spaces = combineReducers({
    byId,
    allIds
});

export default spaces;