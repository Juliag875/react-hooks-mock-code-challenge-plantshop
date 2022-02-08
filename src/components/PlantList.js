import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant}) {
  const plantCards = plants.map(plant => 
    <PlantCard 
      key={plant.id}
      id={plant.id}
      name={plant.name} 
      image={plant.image} 
      price={plant.price}
      onDeletePlant={onDeletePlant}
    />
    )
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
