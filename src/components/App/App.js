import React from 'react';
import './styles.css';
import BigBoard from "../BigBoard/BigBoard";
import {useSelector} from "react-redux";
import {applyTheme} from "../../themes";
import Player from "../Player/Player";
import WinDialog from "../WinDialog/WinDialog";
import {Players} from "../../constants";

const App = () => {
    const theme = useSelector(state => state.ui.theme);
    applyTheme(theme);

    return (
        <div className='app'>
            <div className='game'>
                <Player player={Players.P1}/>
                <BigBoard/>
                <Player player={Players.P2}/>
            </div>
            <WinDialog/>
        </div>
    );
};

export default App;
