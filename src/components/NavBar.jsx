import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        const { items, hendelClearList, updateItemsToShow, } = this.props;

        return (
            <>
                <h1>Notes List</h1>
                <h2> number of Notes   {items.length}</h2>
                <button onClick={() => updateItemsToShow('complete')}>Show only the Done </button>
                <button onClick={() => updateItemsToShow('active')}>Show only the Active </button>
                <button onClick={() => updateItemsToShow('all')}>Show All Notes </button>
                <button onClick={hendelClearList}>Claer List</button>
            </>
        );
    }
}

export default NavBar;