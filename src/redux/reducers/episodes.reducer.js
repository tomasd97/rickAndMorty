import {
    GET_EPISODES_REQUEST,
    GET_EPISODES_RESPONSE,
    GET_EPISODES_ERROR
} from "../actions/episodes.actions";

const initialState = {
    episodesList:{
        1: [],
        2: []
    },
    getEpisodesLoading: false,
    getEpisodesError: false,
};

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EPISODES_REQUEST:
            return {
                ...state,
                getEpisodesLoading: true,
                getEpisodesError: false
            }
        case GET_EPISODES_RESPONSE:
            state.episodesList[action.side] = action.res.length > 0 ? action.res : [action.res]
            return {
                ...state,
                getEpisodesLoading: false,
                getEpisodesError: false,
            }
        case GET_EPISODES_ERROR:
            return {
                ...state,
                getEpisodesLoading: false,
                getEpisodesError: true,
            }
        default:
            return state;
    }
};

export default episodesReducer;
