import './EpisodesListCard.scss';

const EpisodesListCard = ({ episodes, title }) => {
    return(
        <div className="episodes-list-container">
            <div className="episodes-list-title">
                <span className="episodes-title-text">{title}</span>
            </div>
            <div className="episodes-list">
                {episodes.length > 0 ?
                    episodes.map(episode =>
                            <>
                                <div className="episode-item">
                            <span>
                                {episode.name} broadcast on {episode.air_date}
                            </span>
                                </div>
                            </>
                        )
                    : 'No match found.'
                }
            </div>
        </div>
    )
}

export default EpisodesListCard;
