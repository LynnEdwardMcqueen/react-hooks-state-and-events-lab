import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredItems, filterFoodItems] = useState(items)

  function handleFilterChange(event) {

    let filteredFoodItems = items.filter((food) => {
      if (event.target.value === "All") {
        return true;
      } else {
        return (food.category === event.target.value)
      }
    })
    filterFoodItems(filteredFoodItems)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange= {handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
