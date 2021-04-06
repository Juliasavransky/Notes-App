import React, { Component } from 'react';

class NotesItem extends Component {
    render() {
        const { title, hendleDelete, hendleDone, done, hendleEditing, } = this.props
        return (
            <div>
                <h2 onClick={hendleDone} className={done ? "done" : ""}>{title}</h2>
                <button onClick={hendleDelete}>Delet</button>
                <button onClick={hendleDone}>Done</button>
                <button onClick={hendleEditing}>Edit</button>
            </div>

        );
    }

}

export default NotesItem;