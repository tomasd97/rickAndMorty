import {get, RickAndMortyApiUrl} from "../utils/http";


export const getEpisodes = (episodesIdList) => {
    return get(`${RickAndMortyApiUrl}/episode/${episodesIdList.toString()}/`)
}
