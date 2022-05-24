import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import episodesActions from "../../../../redux/actions/episodes.actions";
import {getEpisodesIdList} from "../../../../utils/parsers";
import './CharacterEpisodes.scss';
import EpisodesListCard from "../../../../components/EpisodesListCard/EpisodesListCard";
import Loader from "../../../../components/Loader/Loader";

const CharacterEpisodes = ({ character, side }) => {
    const isLoading = useSelector(state => state.episodes.getEpisodesLoading)
    const episodes = useSelector(state => state.episodes.episodesList[side])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(episodesActions.getEpisodes.request(getEpisodesIdList(character.episode), side))
    }, [character, side, dispatch])

    return(
        <div style={{ height: '100%' }}>
            {isLoading ? <Loader/> : <EpisodesListCard episodes={episodes} title={`Participation of ${character.name} in episodes`}/>}
        </div>
    )
}

export default CharacterEpisodes;
