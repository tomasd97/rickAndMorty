import axios from 'axios';

export const RickAndMortyApiUrl = "https://rickandmortyapi.com/api"

export const get = async (url, config={}) => axios.get(url);
