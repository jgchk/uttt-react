import game from "./game";
import {combineReducers} from "redux";
import ui from "./ui";

const rootReducer = combineReducers({
    game,
    ui
});

export default rootReducer

