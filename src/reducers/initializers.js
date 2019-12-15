import {Players} from "../constants";
import {range} from "../helpers";

const numSpaces = 9;

const emptySpace = (id, boardId) => ({
    id,
    boardId,
    owner: Players.NONE
});

const emptyBoard = (boardId, spaceIds) => ({
    id: boardId,
    spaceIds
});

export const initialBoardIds = range(numSpaces);
export const initialSpaceIds = range(numSpaces * numSpaces);

export const initialSpaces = initialSpaceIds.map((spaceId, index) => {
    const boardIndex = Math.floor(index / numSpaces);
    const boardId = initialBoardIds[boardIndex];
    return emptySpace(spaceId, boardId);
});

export const initialBoards = initialBoardIds.map((boardId, index) => {
    const boardSpaceIds = initialSpaceIds.slice(index * numSpaces, (index + 1) * numSpaces);
    return emptyBoard(boardId, boardSpaceIds);
});

export const initialUiState = (defaultTheme = 'neon') => ({
    theme: defaultTheme
});