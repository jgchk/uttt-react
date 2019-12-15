import {combineReducers} from "redux";
import {initialBoardIds, initialBoards} from "./initializers";

function byId(state = initialBoards, action) {
    switch (action.type) {
        default: return state;
    }
}

function allIds(state = initialBoardIds, action) {
    switch (action.type) {
        default: return state;
    }
}

const boards = combineReducers({
    byId,
    allIds
});

export default boards;