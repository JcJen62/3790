import { vehicles } from "../data/vehicles";
import VehicleCard from "./VehicleCard";

const VehicleContainer = () => {
    return vehicles.map((vehicle) => {
        return (<VehicleCard
            name= {vehicle.name}
            crew= {vehicle.crew}
            id= {vehicle.id}>
        </VehicleCard>)
    })
}

export default VehicleContainer