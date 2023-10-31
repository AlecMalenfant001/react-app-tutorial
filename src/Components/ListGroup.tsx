import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //onSelectItem is just like onClick()
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //if the index of the selected item is equal to the index of the item
          >
            {item}
          </li>
        ))}{" "}
      </ul>
    </>
  );
}

export default ListGroup;
