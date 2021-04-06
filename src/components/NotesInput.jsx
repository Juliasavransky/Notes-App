import React, { Component } from 'react';

class NotesInput extends Component {
    render() {
        const { hendleChange, item, hendleSubmet, editItem, } = this.props;

        return (
            <form >
                <textarea
                    value={item}
                    onChange={hendleChange}
                    placeholder="Add a note">
                </textarea>

                <button
                    className={editItem ? "edit" : ""}
                    onClick={hendleSubmet}
                >
                    {editItem ? "Edit Item" : 'Add Item'}
                </button>
            </form>
        );
    }

}

export default NotesInput;