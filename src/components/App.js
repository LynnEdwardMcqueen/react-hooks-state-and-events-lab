import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  
  const [isDark, setDark] = useState(true)

  function handleClick() {
    setDark(() => !isDark)
  }

  // Use the state variable to toggle between dark and light
  const appClass = isDark ? "App dark" : "App light"
 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
