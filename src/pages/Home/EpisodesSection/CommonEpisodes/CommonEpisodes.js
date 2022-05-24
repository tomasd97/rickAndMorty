import { useSelector } from "react-redux";
import EpisodesListCard from "../../../../components/EpisodesListCard/EpisodesListCard";
import Loader from "../../../../components/Loader/Loader";

const CommonEpisodes = () => {
    const leftCharacterEpisodes = useSelector(state => state.episodes.episodesList[1])
    const rightCharacterEpisodes = useSelector(state => state.episodes.episodesList[2])
    const commonEpisodes = leftCharacterEpisodes.filter(episode => rightCharacterEpisodes.some(ep => ep.id === episode.id));
    const isLoading = useSelector(state => state.episodes.getEpisodesLoading)
    return(
            isLoading ? <Loader/> : <EpisodesListCard episodes={commonEpisodes} title="Common episodes"/>
    )
}

export default CommonEpisodes;
