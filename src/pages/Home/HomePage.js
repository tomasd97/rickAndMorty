import CharactersSection from "./CharactersSection/CharactersSection";
import EpisodesSection from "./EpisodesSection/EpisodesSection";
import './HomePage.scss'

const HomePage = () => {
    return(
        <div className="home-container">
            <CharactersSection/>
            <EpisodesSection/>
        </div>
    )
}

export default HomePage;
