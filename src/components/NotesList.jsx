import React, { Component } from 'react';
import NotesItem from './NotesItem';

class NotesList extends Component {
    render() {
        const { items, hendleDelete, hendleDone, hendleEditing, } = this.props;

        return (
            <>
                {items.map(item => {
                    return <NotesItem
                        title={item.title}
                        key={item.itemId}
                        done={item.done}
                        hendleDelete={() => hendleDelete(item.itemId)}
                        hendleDone={() => hendleDone(item.itemId)}
                        hendleEditing={() => hendleEditing(item.itemId)}
                    />
                })}
            </>
        );
    }
}




export default NotesList;