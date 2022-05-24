import episodesActions, {
    GET_EPISODES_REQUEST
} from "../actions/episodes.actions";
import { getEpisodes } from "../../services/episodes.service";


const episodesMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_EPISODES_REQUEST:
            getEpisodes(action.listOfEpisodes).then(
                res => {
                    dispatch(episodesActions.getEpisodes.response(action.side, res.data))
                }
            ).catch(
                err => {
                    dispatch(episodesActions.getEpisodes.error(err))
                }
            )
            break;
        default:
            break;
    }
};

export default episodesMiddleware;
