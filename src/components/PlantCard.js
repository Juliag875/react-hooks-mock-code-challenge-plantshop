import React, {useState} from "react";

function PlantCard({id, name, image, price, onDeletePlant}) {
  const[buyStatus, setBuyStatus] = useState(true)

  function handleDeleteClick(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeletePlant({id}))
  }

  function changeBuyStatus(){
    setBuyStatus(false)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {buyStatus ? ( <button onClick={changeBuyStatus} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button style={{backgroundColor:"darkgreen", color:"white"}}
      onClick={handleDeleteClick}
      >Delete</button>
    </li>
  );
}

export default PlantCard;
