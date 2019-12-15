import React from "react";
import PropTypes from 'prop-types';
import Space from "../Space/Space";
import './styles.css';
import {Players} from "../../constants";
import {useSelector} from "react-redux";

const getSpaceIds = (state, boardId) => {
    const board = state.game.boards.byId[boardId];
    return board.spaceIds;
};

const SmallBoard = ({boardId, owner, playable}) => {
    const spaceIds = useSelector(state => getSpaceIds(state, boardId));

    let className = 'board';
    if (owner === Players.P1) {
        className += ' board--p1';
    } else if (owner === Players.P2) {
        className += ' board--p2';
    } else if (owner === Players.TIE) {
        className += ' board--tie';
    }

    if (playable && owner === Players.NONE) {
        className += ' board--playable';
    } else {
        className += ' board--unplayable';
    }

    return (
        <div className={className}>
            {spaceIds.map(spaceId => <Space spaceId={spaceId} playable={playable}/>)}
        </div>
    );
};

SmallBoard.propTypes = {
    boardId: PropTypes.number.isRequired
};

export default SmallBoard