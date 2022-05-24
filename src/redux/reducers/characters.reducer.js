import {
    GET_CHARACTERS_REQUEST,
    GET_CHARACTERS_RESPONSE,
    GET_CHARACTERS_ERROR,
    SELECT_CHARACTER,
    REMOVE_CHARACTER
} from "../actions/characters.actions";
import {getLastItem} from "../../utils/parsers";

const initialState = {
    allCharacters: [],
    allCharactersLoading: false,
    allCharactersError: false,
    charactersSelected: {
        1: null,
        2: null,
    },
    nextPage: ""
};

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS_REQUEST:
            return {
                ...state,
                allCharactersLoading: true,
                allCharactersError: false
            }
        case GET_CHARACTERS_RESPONSE:
            state.allCharacters.push(...action.res.results)
            return {
                ...state,
                allCharactersLoading: false,
                allCharactersError: false,
                nextPage: getLastItem(action.res.info.next),
            }
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                allCharactersLoading: false,
                allCharactersError: true
            }
        case SELECT_CHARACTER:
            state.charactersSelected[action.side] = action.character
            return {
                ...state,
            }
        case REMOVE_CHARACTER:
            state.charactersSelected[action.side] = null
            return {
                ...state
            }
        default:
            return state;
    }
};

export default charactersReducer;
