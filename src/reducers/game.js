import {combineReducers} from "redux";
import spaces from "./spaces";
import lastMove from "./lastMove";
import boards from "./boards";

const game = combineReducers({
    spaces,
    boards,
    lastMove
});

export default game;