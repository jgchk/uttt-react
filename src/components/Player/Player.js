import React from "react";
import {useSelector} from "react-redux";
import './styles.css';
import {Players} from "../../constants";
import {getWinner} from "../../selectors";

const Player = ({player}) => {
    let className = 'player';
    let playerName;
    if (player === Players.P1) {
        className += ' player--p1';
        playerName = 'Player 1';
    } else if (player === Players.P2) {
        className += ' player--p2';
        playerName = 'Player 2';
    }

    const winner = useSelector(state => getWinner(state));
    const lastMove = useSelector(state => state.game.lastMove);
    if (winner === Players.NONE && lastMove.player !== player) {
        className += ' player--move';
    } else {
        className += ' player--wait';
    }

    return (
        <div className='player-container'>
            <div className={className}>
                <div className='player__name'>{playerName}</div>
            </div>
        </div>
    );
};

export default Player