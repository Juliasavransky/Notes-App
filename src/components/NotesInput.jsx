// import React, { useContext } from 'react';
// import { ThemeContext } from './../contexts/ThemeContext';


const NotesInput = ({ handleChange, item, handleSubmit, editItem, }) => {

    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;
    return (
        <form
            className=""
        // style={{ background: theme.bg, color: theme.ui, }}
        >
            <input
                required
                value={item}
                type="text"
                onChange={handleChange}
                placeholder="Add a note">
            </input>

            <button
                className={editItem ? "edit" : ""}
                onClick={handleSubmit}
                type="submit"
            >
                {editItem ? "Edit Item" : 'Add Item'}
            </button>
        </form>
    );
}


export default NotesInput;

