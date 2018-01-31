export function reducer_yearFrom (state = null, action) {
    switch(action.type) {
        case 'WATCH_YEAR_FROM':
        return action.payload;
        default: return state;
    }
}

export function reducer_yearTo (state = null, action) {
    switch(action.type) {
        case 'WATCH_YEAR_TO':
        return action.payload;
        default: return state;
    }
}