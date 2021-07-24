import { useState } from "react";

export const Form = ({ submitFunction }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunction(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="formInput">
      <input
        className="textInput"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="inputButton">
        +
      </button>
    </form>
  );
};
