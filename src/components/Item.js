import React, {useState} from "react";

function Item({ name, category }) {

  const [inShoppingList, processShoppingList] = useState(false)

  function handleClick() {
    processShoppingList(() => !inShoppingList)
  }

  const itemClass = inShoppingList ? "in-cart" : ""
  const buttonTitle = inShoppingList ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleClick}>{buttonTitle}</button>
    </li>
  );
}

export default Item;
