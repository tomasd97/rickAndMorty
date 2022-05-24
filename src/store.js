import { combineReducers, configureStore } from "@reduxjs/toolkit";
import middlewares from './redux/middlewares';
import charactersReducer from "./redux/reducers/characters.reducer";
import episodesReducer from "./redux/reducers/episodes.reducer";

const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
});

export default store;
