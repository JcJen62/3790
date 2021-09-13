import { Card } from "@material-ui/core";

const AnimeCard = (props) => {
const {title, rank, id} = props

    return (<Card key={id}>
        {title} {rank}
    </Card>
    )
}

export default AnimeCard