import React, { useState } from "react";

function Item({ name, category, inCart }) {
  const [addCart, setAddCart] = useState(false)
  const [appClass, setAppClass] = useState('')

  function handleAddItemClick() {
  // setAddCart((addCart) => !addCart)
  // inCart = !inCart
    setAppClass((inCart) => !inCart)
  }


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={appClass ? "remove" : "add"} onClick={handleAddItemClick}>
        {appClass ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
