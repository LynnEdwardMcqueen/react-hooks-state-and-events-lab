import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  
  const [isDark, setDark] = useState(false)

  
  // Use the state variable to toggle between dark and light
  const appClass = isDark ? "App dark" : "App light"
  const buttonMessage = isDark ? "Dark Mode" : "Light Mode"
  
  function handleClick() {
    setDark(() => !isDark)
  }

 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>{buttonMessage}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
