import {initialUiState} from "./initializers";
import {SET_THEME} from "../actions/types";

export default function ui(state = initialUiState(), action) {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state
    }
}