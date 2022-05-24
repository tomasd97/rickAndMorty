import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import characterActions from "../../../redux/actions/characters.actions";
import './CharactersSection.scss';
import CharactersList from "./CharactersList/CharactersList";
import { Grid } from "@mui/material";

const CharactersSection = () => {
    const allCharacters = useSelector(state => state.characters.allCharacters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(characterActions.getCharacters.request())
    }, [dispatch])
    return(
        <div className="characters-section-container">
            <Grid container columns={12} spacing={2}>
                <Grid item md={6} xs={12} lg={6} >
                    <CharactersList side="1" allCharacters={allCharacters}/>
                </Grid>
                <Grid item md={6} xs={12} lg={6}>
                    <CharactersList side="2" allCharacters={allCharacters}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default CharactersSection;
