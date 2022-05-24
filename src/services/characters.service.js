import {get, RickAndMortyApiUrl} from "../utils/http";


export const getAllCharacters = (page) => {
    return get(`${RickAndMortyApiUrl}/${page ? page : 'character'}`)
}
