import { UPDATE_SEARCH } from "./types";

// CREATE MESSAGE
export const updateSearch = msg => {
    return {
        type: UPDATE_SEARCH,
        payload: msg
    };
};