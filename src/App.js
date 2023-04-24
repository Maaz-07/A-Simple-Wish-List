import React, { useState } from 'react';
import './App.css';

const WishList = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPriority, setItemPriority] = useState('');

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemPriorityChange = (event) => {
    setItemPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemName || !itemPriority) return;
    const newItem = {
      name: itemName,
      priority: itemPriority,
    };
    setItems([...items, newItem]);
    setItemName('');
    setItemPriority('');
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleUpdatePriority = (index, newPriority) => {
    const newItems = [...items];
    newItems[index].priority = newPriority;
    setItems(newItems);
  };

  const handleMoveToTop = (index) => {
    const newItems = [...items];
    const itemToMove = newItems.splice(index, 1)[0];
    newItems.unshift(itemToMove);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            style={{ marginLeft: "25px" }}
            type="text"
            value={itemName}
            onChange={handleItemNameChange}
          />
        </label>
        <label>
          Priority:
          <input
            type="text"
            value={itemPriority}
            onChange={handleItemPriorityChange}
          />
        </label>
        <button type="submit" style={{ marginLeft: "200px" }}>
          Add
        </button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.priority}</span>
            <button onClick={() => handleRemove(index)}>Remove</button>
            <button onClick={() => handleMoveToTop(index)}>Move to top</button>
            <input
              type="text"
              value={item.priority}
              onChange={(event) =>
                handleUpdatePriority(index, event.target.value)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
