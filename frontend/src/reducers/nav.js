import { UPDATE_SEARCH } from "../actions/types";

const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return (state = action.payload);
        default:
            return state;
    }
}