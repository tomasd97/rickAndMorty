import {
    GET_CHARACTERS_REQUEST
} from "../actions/characters.actions";
import characterActions from "../actions/characters.actions";
import { getAllCharacters } from "../../services/characters.service";

const charactersMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_CHARACTERS_REQUEST:
            getAllCharacters(action.page).then(
                res => {
                    dispatch(characterActions.getCharacters.response(res.data))
                }
            ).catch(
                err => {
                    dispatch(characterActions.getCharacters.error(err))
                }
            )
            break;
        default:
            break;
    }
};

export default charactersMiddleware;
