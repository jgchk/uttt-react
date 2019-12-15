export const replace = (array, index, element) => [
    ...array.slice(0, index),
    element,
    ...array.slice(index + 1)
];

export function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export const chunkArray = (array, chunkSize) => Array(Math.ceil(array.length / chunkSize))
    .map((_, index) => index * chunkSize)
    .map(begin => array.slice(begin, begin + chunkSize));