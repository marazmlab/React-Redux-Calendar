import { LOAD_MEETINGS, SAVE_MEETING } from '../actions/calendar';

const initialState = {
    meetings: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MEETINGS:
            return {
                ...state,
                meetings: action.payload,
            };
        case SAVE_MEETING:
            return {
                ...state,
                meetings: [...state.meetings, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;