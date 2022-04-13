// import React, { useContext } from 'react';
// import { ThemeContext } from './../contexts/ThemeContext';
import NotesItem from './NotesItem';
import Masonry from 'react-masonry-css'

const NotesList = ({ items, handleDelete, handleDone, handleEditing, }) => {
    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    // style={{ color: theme.syntax, background: theme.bg, }}

    const breakpointColumnsObj = {
        default: 5,
        1600: 4,
        1100: 3,
        800: 2,
        600: 1
    };
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {items.map(item => {
                return <NotesItem
                    title={item.title}
                    key={item.itemId}
                    done={item.done}
                    handleDelete={() => handleDelete(item.itemId)}
                    handleDone={() => handleDone(item.itemId)}
                    handleEditing={() => handleEditing(item.itemId)}
                />
            })}
        </Masonry>
    );
}



export default NotesList;