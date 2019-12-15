import React from "react";
import PropTypes from 'prop-types';
import './styles.css';
import {Players} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {makeMove} from "../../actions";

const Space = ({spaceId, playable}) => {
    const {owner} = useSelector(state => state.game.spaces.byId[spaceId]);

    let className = 'board__space';
    if (owner === Players.P1) {
        className += ' board__space--p1';
    } else if (owner === Players.P2) {
        className += ' board__space--p2';
    } else {
        className += ' board__space--none'
    }

    const dispatch = useDispatch();
    const onClick = playable ? () => dispatch(makeMove(spaceId)) : () => {};

    return <div className={className} onClick={onClick}/>;
};

Space.propTypes = {
    spaceId: PropTypes.number.isRequired
};

export default Space