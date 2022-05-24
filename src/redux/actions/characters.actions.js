export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_RESPONSE = 'GET_CHARACTERS_RESPONSE';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';


const characterActions = {
    getCharacters: {
        request: (page) => ({ type: GET_CHARACTERS_REQUEST, page }),
        response: (res) => ({ type: GET_CHARACTERS_RESPONSE, res }),
        error: (err) => ({ type: GET_CHARACTERS_ERROR, err })
    },
    selectedCharacters: {
        select_character: (character, side) => ({ type: SELECT_CHARACTER, character, side }),
        remove_character: (side) => ({ type: REMOVE_CHARACTER, side }),
    }
}

export default characterActions;
