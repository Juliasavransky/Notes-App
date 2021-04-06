import React from 'react'
import NavBar from './components/NavBar';
import NotesInput from './components/NotesInput';
import NotesList from './components/NotesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      itemId: 0,
      items: [],
      done: false,
      editItem: false,
      itemsToShow: 'all'
    }
  }

  hendleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  };

  hendleSubmet = (event) => {
    event.preventDefault();

    const newItem = {
      itemId: this.state.itemId,
      title: this.state.item,
      done: this.state.done,
    };
    const updatedItems = [newItem, ...this.state.items];

    this.setState({
      item: "",
      itemId: this.state.itemId + 1,
      items: updatedItems,
    });
  };

  hendelClearList = () => {
    this.setState({
      item: "",
      itemId: 0,
      items: [],
      done: false,
      editItem: false,
      itemsToShow: "all",
    })
  };

  hendleDelete = (id) => {
    const filterDelete = this.state.items.filter(item => item.itemId !== id);

    this.setState({
      items: filterDelete,
    });
  };

  hendleDone = (id) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.itemId === id) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      })
    });
  }

  hendleEditing = (id) => {
    const filterItems = this.state.items.filter(item => item.itemId !== id);
    const selctedItem = this.state.items.find(item => item.itemId === id);

    this.setState({
      items: filterItems,
      item: selctedItem.title,
      itemId: id,
      editItem: !this.state.editItem,
    });
  }

  updateItemsToShow = (s) => {
    this.setState({
      itemsToShow: s,
    })

    console.log(s);
  }

  render() {
    let items = [];

    if (this.state.itemsToShow === 'all') {
      items = this.state.items;
    } else if (this.state.itemsToShow === 'active') {
      items = this.state.items.filter(item => !item.done);
    } else if (this.state.itemsToShow === 'complete') {
      items = this.state.items.filter(item => item.done);
    }
    console.log(this.state.itemsToShow);
    console.log(items);
    return (
      <div >
        <NavBar
          hendelClearList={this.hendelClearList}
          updateItemsToShow={this.updateItemsToShow}
          items={items}
          itemsToShow={this.state.itemsToShow}

        />

        <NotesInput
          hendleChange={this.hendleChange}
          hendleSubmet={this.hendleSubmet}
          editItem={this.state.editItem}
          item={this.state.item}


        />
        <NotesList
          items={items}
          done={this.state.done}
          hendleDelete={this.hendleDelete}
          hendleDone={this.hendleDone}
          hendleEditing={this.hendleEditing}
        />
      </div>
    );
  }
}

export default App;
