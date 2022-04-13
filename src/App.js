import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar';
import NotesInput from './components/NotesInput';
import NotesList from './components/NotesList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Counter from './components/Counter';
import Users from './components/Users';
import usersData from './usersData.json'
import Parent from './components/Parent';

const App = () => {
  const [item, setItem] = useState("");
  const [itemId, setItemId] = useState(uuidv4);

  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem('items');
    return localData ? JSON.parse(localData) : []
  });

  const [done, setDone] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const [status, setStatus] = useState("active");
  const [itemsToShow, setItemsToShow] = useState([]);
  // const [isFiltered, setIsFiltered] = useState(false);


  const handleChange = (event) => {
    setItem(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      itemId: uuidv4(),
      title: item,
      done: done,
      status: "active",
    };
    const updatedItems = [newItem, ...items];

    setItem("");
    setItemId(0);
    setItems(updatedItems);
    setStatus("active");

  };
  console.log('items', items);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  const handelClearList = () => {
    setItem("");
    setItemId(0);
    setItems([]);
    setDone(false);
    setEditItem(false);
    setStatus("active");

  };

  const handleDelete = (id) => {
    const filterDelete = items.filter(item => item.itemId !== id);
    setItems(filterDelete);
  };

  const handleDone = (id) => {
    setItems(items.map(item => {
      if (item.itemId === id) {
        return {
          ...item,
          done: !item.done,
          status: "complete"
        };
      } else {
        return item;
      }
    }))
  }

  const handleEditing = (id) => {
    const filterItems = items.filter(item => item.itemId !== id);
    const selectedItem = items.find(item => item.itemId === id);

    setItems(filterItems);
    setItem(selectedItem.title);
    setItemId(id);
    setEditItem(!editItem);

  }

  const updateAllItems = () => {
    const allItems = [...items];
    setItems(allItems);

  }
  const updateDoneItems = () => {
    const doneItems = [...items];
    console.log("doneItems", doneItems);
    const updateDoneItems = doneItems.filter(item => item.done === true);
    setItems(updateDoneItems);
    setItemsToShow(updateDoneItems);
    setStatus("complete")
    console.log("updateDoneItems", updateDoneItems);
  }


  const updateActiveItems = () => {
    const activeItems = [...items]
    console.log("doneItems", activeItems);
    const updateActiveItemsItems = activeItems.filter(item => item.done === false);
    setItems(updateActiveItemsItems);
    setItemsToShow(updateActiveItemsItems);
    setStatus("active")
    console.log("updateActiveItemsItems", updateActiveItemsItems);
  }

  const isEmpty = Object.keys(usersData).length === 0;

  return (
    <>
      {/* <ThemeContextProvider>
        <div
          className="container"
        >
          <NavBar
            handelClearList={handelClearList}
            updateActiveItems={updateActiveItems}
            updateDoneItems={updateDoneItems}
            updateAllItems={updateAllItems}
            items={items}
          // updateItemsToShow={updateItemsToShow}

          />
          <ThemeToggle />
          <NotesInput
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
            item={item}


          />
          <NotesList
            items={items}
            done={done}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleEditing={handleEditing}
          />
        </div>
      </ThemeContextProvider> */}
      <Counter />
      {/* {isEmpty
        ? <div>"The list is empty"</div>
        :
        usersData.map((user, index) => (
          <Users
            key={user.id}
            name={user.name}
            email={user.email}
            num={index + 1}
          />
        ))
      } */}
      <Parent />
    </>
  );
}



export default App;


