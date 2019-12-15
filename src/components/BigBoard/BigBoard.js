import React from "react";
import SmallBoard from "../SmallBoard/SmallBoard";
import './styles.css';
import {shallowEqual, useSelector} from "react-redux";
import {getBoardIds, getBoardOwners, getWinner} from "../../selectors";
import {Players} from "../../constants";

const BigBoard = () => {
    const boardIds = useSelector(state => getBoardIds(state));
    const boardOwners = useSelector(state => getBoardOwners(state, boardIds), shallowEqual);
    const winner = useSelector(state => getWinner(state));
    const boardsPlayable = useSelector(state => {
        if (winner !== Players.NONE) return Array(boardIds.length).fill(false);

        const lastSpaceId = state.game.lastMove.spaceId;
        if (lastSpaceId === null) return Array(boardIds.length).fill(true);

        const lastSpace = state.game.spaces.byId[lastSpaceId];
        const lastBoard = state.game.boards.byId[lastSpace.boardId];
        const lastSpaceIndex = lastBoard.spaceIds.indexOf(lastSpaceId);
        const nextBoardId = state.game.boards.allIds[lastSpaceIndex];
        const nextBoardIndex = boardIds.indexOf(nextBoardId);
        const nextBoardOwner = boardOwners[nextBoardIndex];

        if (nextBoardOwner !== Players.NONE) return Array(boardIds.length).fill(true);
        return boardIds.map(boardId => nextBoardId === boardId);
    }, shallowEqual);

    return (
        <div className='big-board'>
            {boardIds.map((boardId, index) => <SmallBoard boardId={boardId} owner={boardOwners[index]}
                                                          playable={boardsPlayable[index]}/>)}
        </div>
    );
};

export default BigBoard