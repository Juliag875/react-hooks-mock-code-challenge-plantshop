import React, {useState} from "react";

function PlantCard({id, name, image, price, onDeletePlant, onUpdatePlant}) {
  const[buyStatus, setBuyStatus] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(price);

  function handleDeleteClick(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeletePlant({id}))
  }

  function handlePriceChangeSubmit(e) {
    e.preventDefault();
    fetch (`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({price : updatedPrice})
  })
      .then(r=>r.json())
      .then(updatedPlant => onUpdatePlant(updatedPlant))
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
      <form onSubmit={handlePriceChangeSubmit}>
       <input type="number" 
          name="price" 
          step="0.01" 
          placeholder="New Price" 
          value={updatedPrice}
          onChange={(e)=>setUpdatedPrice(parseFloat(e.target.value))}
          />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
