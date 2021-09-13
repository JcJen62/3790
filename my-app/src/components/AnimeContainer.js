import { anime } from "../data/anime";
import AnimeCard from "./AnimeCard";

const AnimeContainer = () => {
    return anime.map((anime) => {
        return (<AnimeCard
            title= {anime.title}
            rank= {anime.rank}
            id= {anime.mal_id}>
        </AnimeCard>)
    })
}

export default AnimeContainer