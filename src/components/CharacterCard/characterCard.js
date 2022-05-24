import './characterCard.scss';
import CircleIcon from '@mui/icons-material/Circle';
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useDispatch, useSelector} from "react-redux";
import charactersActions from "../../redux/actions/characters.actions";

const showStatus = (status) => {
    if(status === "Alive"){
        return <CircleIcon color="success"/>
    }
    return <CircleIcon color="error"/>
}

const CharacterCard = ({ character, side }) => {
    const characterSelected = useSelector(state => state.characters.charactersSelected[side])

    const isCharacterSelected =  characterSelected === character;

    const dispatch = useDispatch()

    const handleChangeCharacter = () => {
        if(isCharacterSelected){
            dispatch(charactersActions.selectedCharacters.remove_character(side))
        } else {
            dispatch(charactersActions.selectedCharacters.select_character(character, side))
        }
    }

    const characterButton =
        <div className="character-button">
            <IconButton onClick={handleChangeCharacter}>
                {isCharacterSelected ? <RemoveIcon color="error"/> : <AddIcon color="success"/>}
            </IconButton>
        </div>

    return(
        <div className="character-card"
             style={{
                 backgroundImage: "url(" + character.image + ")",
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
            }}
        >
            {characterButton}
            <div className="character-info">
                <div className="character-name">
                    <span className="character-name-text">
                        {character.name}
                    </span>
                </div>
                <div className="character-status">
                    <div className="character-status">
                        {showStatus(character.status)} {character.status}
                    </div>
                    <div className="character-species">
                        {character.species}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;
