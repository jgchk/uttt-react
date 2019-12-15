import {Players} from "../constants";

const spaceIndex = (r, c) => (r * 3) + c;
const playerIndex = (space) => space === Players.P1 ? 0 : space === Players.P2 ? 1 : -1;

export default function calculateWinner(spaces) {

    let rows = [
        [0, 0],
        [0, 0],
        [0, 0]
    ];

    let cols = [
        [0, 0],
        [0, 0],
        [0, 0]
    ];

    let diags = [
        [0, 0],
        [0, 0]
    ];

    let playCount = 0;

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const space = spaces[spaceIndex(r, c)];
            const p = playerIndex(space);

            if (p !== -1) {
                playCount++;
                rows[r][p]++;
                cols[c][p]++;
                if (r === c) diags[0][p]++;
                if ((2 - r) === c) diags[1][p]++;
            }
        }
    }

    for (let count of [...rows, ...cols, ...diags]) {
        if (count[0] === 3) return Players.P1;
        else if (count[1] === 3) return Players.P2;
    }

    if (playCount === 9) return Players.TIE;
    return Players.NONE;
}