import { vehicles } from "../data/vehicles"
import { Card } from "@material-ui/core"

const VehicleCard = () => {
    return vehicles.map((vehicles) => {
        return (<Card key={vehicles.model}>
            <h1>{vehicles.name + ' ' + vehicles.crew}</h1>
            </Card>)
    })
}

export default VehicleCard