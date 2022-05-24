export const GET_EPISODES_REQUEST = 'GET_EPISODES_REQUEST';
export const GET_EPISODES_RESPONSE = 'GET_EPISODES_RESPONSE';
export const GET_EPISODES_ERROR = 'GET_EPISODES_ERROR';

const episodesActions = {
    getEpisodes: {
        request: (listOfEpisodes, side ) => ({ type: GET_EPISODES_REQUEST, listOfEpisodes, side }),
        response: (side, res) => ({ type: GET_EPISODES_RESPONSE, side, res }),
        error: (err) => ({ type: GET_EPISODES_ERROR, err })
    }
}

export default episodesActions;
