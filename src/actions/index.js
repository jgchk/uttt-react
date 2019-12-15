import {MAKE_MOVE, RESTART, SET_THEME} from "./types";
import {Players} from "../constants";

const makeMoveWithoutCheck = (player, spaceId) => ({
    type: MAKE_MOVE,
    payload: {
        player,
        spaceId
    }
});

export const makeMove = (spaceId) => (dispatch, getState) => {
    const {game} = getState();
    const lastPlayer = game.lastMove.player;
    const player = lastPlayer === Players.P2 ? Players.P1 : Players.P2;
    dispatch(makeMoveWithoutCheck(player, spaceId));
};

export const restart = () => dispatch => dispatch({type: RESTART});

export const setTheme = theme => dispatch => dispatch({
    type: SET_THEME,
    payload: theme
});