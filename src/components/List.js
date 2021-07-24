import { Card } from "./Card";

export const List = ({ items, handleRemove }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <Card key={index} rmFunction={() => handleRemove(index)}>
            {item}
          </Card>
        );
      })}
    </ul>
  );
};