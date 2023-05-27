import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  
  const [isDark, setDark] = useState(true)

  
  // Use the state variable to toggle between dark and light
  const appClass = isDark ? "App dark" : "App light"
  
  function handleClick() {
    setDark(() => !isDark)
  }

 
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
