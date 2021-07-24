export const Card = ({ children, rmFunction }) => {
    return (
      <li className="card">
        <span className="toDoItem">{children}</span>
        <button onClick={rmFunction} className="removeBtn">x</button>
      </li>
    );
  };