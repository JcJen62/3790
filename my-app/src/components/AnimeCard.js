import { Card } from "@material-ui/core";

const AnimeCard = (props) => {
const {title, rank, mal_id} = props

    return (<Card key={mal_id}>
        {title} {rank}
    </Card>
    )
}

export default AnimeCard