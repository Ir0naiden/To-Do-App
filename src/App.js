import "./App.css";
import { useState } from "react";
import { List } from "./components/List";
import { Form } from "./components/Form";

const App = () => {
  const [items, setItems] = useState("");

  const handleItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    newArray.splice(itemIndex, 1);
    setItems(newArray);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Daily Do's</h1>
        <p>Keep yourself on track, add and remove reminders as you go!</p>
      </div>

      <div className="wrapper">
        <Form submitFunction={handleItem} />

        {items.length > 0 && <List items={items} handleRemove={handleRemove} />}
      </div>
    </div>
  );
};

export default App;