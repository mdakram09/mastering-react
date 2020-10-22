import React from "react";
const ListGroup = (props) => {
  const {
    items,
    textProperty,
    // valueProperty,
    onItemSelect,
    selectedItem,
  } = props;
  console.log("props ", props);
  console.log("items ", items);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          className={
            item === selectedItem
              ? "list-group-item clickable active"
              : "list-group-item clickable"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
