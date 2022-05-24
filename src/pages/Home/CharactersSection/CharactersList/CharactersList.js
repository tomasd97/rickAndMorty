import {useDispatch, useSelector} from "react-redux";
import { Grid } from "@mui/material";
import CharacterCard from "../../../../components/CharacterCard/characterCard";
import './CharactersList.scss';
import { useRef } from "react";
import characterActions from "../../../../redux/actions/characters.actions";

const CharactersList = ({ side, allCharacters }) => {
    const nextPage = useSelector(state => state.characters.nextPage);
    const dispatch = useDispatch();
    const listInnerRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                if(nextPage){
                    dispatch(characterActions.getCharacters.request(nextPage))
                }
            }
        }
    };

    return(
        <div className="characters-list-container">
            <div className="character-list-header">
                <span className="character-list-header-text">
                    Character {side}
                </span>
            </div>
            <div className="characters-list" onScroll={onScroll} ref={listInnerRef}>
                <Grid container spacing={4} sx={{ padding: '15px' }}>
                    {
                        allCharacters.map(character =>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <CharacterCard character={character} side={side}/>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </div>
    )
}

export default CharactersList;
