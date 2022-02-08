import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(plants=>setPlants(plants))
  }, [])

  function addNewPlant(newItem){
    setPlants([...plants, newItem])
  }
  
  function handleDeletePlant(deletedPlant){
    const updatedPlants = plants.filter(plant => plant.id !== deletedPlant.id);
    setPlants(updatedPlants);
  }
  
  const displayedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  console.log(displayedPlants)
  return (
    <main>
      <NewPlantForm onAddPlant={addNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayedPlants } onDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
