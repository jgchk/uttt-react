import calculateWinner from "../reducers/winCalc";
import {createSelector} from "reselect";

export const getBoardIds = state => state.game.boards.allIds;

const getBoardOwner = (state, boardId) => {
    const spaceIds = state.game.boards.byId[boardId].spaceIds;
    const spaceOwners = spaceIds.map(spaceId => state.game.spaces.byId[spaceId].owner);
    return calculateWinner(spaceOwners);
};

export const getBoardOwners = state => getBoardIds(state).map(boardId => getBoardOwner(state, boardId));

export const getWinner = createSelector(
    [getBoardOwners],
    boardOwners => calculateWinner(boardOwners)
);