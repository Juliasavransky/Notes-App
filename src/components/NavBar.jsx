// import React, { useContext } from 'react';
// import { ThemeContext } from './../contexts/ThemeContext';

const NavBar = ({
    items,
    handelClearList,
    updateActiveItems,
    updateDoneItems,
    updateAllItems,
    updateItemsToShow
}) => {
    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;


    return (
        <nav
            className="container--nav"
        // style={{ background: theme.ui, color: theme.syntax, }}
        >
            <h1>Notes List</h1>
            {items.length ? (<h1>number of Notes  {items.length}</h1>) : (<h1>
                <span style={{ fontSize: 50 }}>&#128373;</span>
                Are you sure?
                <span style={{ fontSize: 50 }}>&#128527;</span></h1>)}
            <ul
                className="container--nav__items"
            >
                <li onClick={updateDoneItems}><a href="#">Show only the Done</a></li>
                <li onClick={updateActiveItems}><a href="#">Show only the Active</a></li>
                <li onClick={updateAllItems}><a href="#">Show All Notes</a></li>
                <li onClick={handelClearList}><a href="#">Claer List</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;