
export default function reducer_type (state = null, action) {
    switch(action.type) {
        case 'WATCH_TYPE':
        return action.payload;
        default: return state;
    }
}