import './EpisodesSection.scss';
import {Grid} from "@mui/material";
import CharacterEpisodes from "./CharacterEpisodes/CharacterEpisodes";
import { useSelector } from "react-redux";
import CommonEpisodes from "./CommonEpisodes/CommonEpisodes";
const rickAndMortyImage = require('../../../assets/rickandmorty.png')

const errorMessage =
    <div className="error-message">
        <img src={rickAndMortyImage} alt="Rick and Morty" style={{ width: "200px" }}/>
        <span className="character-non-selected-text">Select a character.</span>
    </div>

const EpisodesSection = () => {
    const leftCharacter = useSelector(state => state.characters.charactersSelected[1]);
    const rightCharacter = useSelector(state => state.characters.charactersSelected[2]);
    return(
        <div className="episodes-section-container">
           <div className="episodes-section">
               <Grid container columns={12} sx={{ padding: '10px', height: '100%' }} spacing={2}>
                   <Grid item md={4} lg={4} xs={12} sx={{ height: '100%' }}>
                       {
                           leftCharacter ? <CharacterEpisodes character={leftCharacter} side={1}/> : errorMessage
                       }
                   </Grid>
                   <Grid item md={4} lg={4} xs={12} sx={{ height: '100%' }}>
                       {
                           rightCharacter && leftCharacter && <CommonEpisodes/>
                       }
                   </Grid>
                   <Grid item md={4} lg={4} xs={12} sx={{ height: '100%' }}>
                       {
                           rightCharacter ? <CharacterEpisodes character={rightCharacter} side={2}/> : errorMessage
                       }
                   </Grid>
               </Grid>
           </div>
        </div>
    )
}

export default EpisodesSection;
