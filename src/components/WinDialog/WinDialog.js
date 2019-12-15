import React, {useState} from "react";
import './styles.css';
import {restart} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as ReplayIcon} from './replay.svg';
import {Players} from "../../constants";
import {getWinner} from "../../selectors";

const WinDialog = () => {
    const winner = useSelector(state => getWinner(state));
    let className = 'win-dialog';
    let winText;
    if (winner === Players.P1) {
        className += ' win-dialog--p1 win-dialog--winner';
        winText = 'P1 WIN!'
    } else if (winner === Players.P2) {
        className += ' win-dialog--p2 win-dialog--winner';
        winText = 'P2 WIN!'
    } else if (winner === Players.TIE) {
        className += ' win-dialog--tie win-dialog--winner';
        winText = "IT'S A TIE!";
    } else {
        winText = 'NO WINNER';
    }

    const [animate, setAnimate] = useState(false);
    if (animate) {
        className += ' win-dialog--animate';
    }

    const dispatch = useDispatch();
    return (
        <div className={className} onAnimationEnd={() => {
            if (animate) {
                setAnimate(false);
                dispatch(restart());
            }
        }}>
            <div className='win-dialog__winner'>{winText}</div>
            <div className='win-dialog__play-again' onClick={() => setAnimate(true)}><ReplayIcon/></div>
        </div>
    );
};

export default WinDialog