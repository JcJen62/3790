import { Card } from "@material-ui/core";

const VehicleCard = (props) => {
const {name, crew, id} = props

    return (<Card key={id}>
        {name} {crew}
    </Card>
    )
}

export default VehicleCard