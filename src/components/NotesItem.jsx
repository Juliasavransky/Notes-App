// import React, { useContext } from 'react';
// import { ThemeContext } from './../contexts/ThemeContext';

// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faTrashAlt, faCheck ,faPencilAlt } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

const NotesItem = ({ title, hendleDelete, hendleDone, done, hendleEditing, }) => {
    // const { isLightTheme, light, dark } = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;
    // style={{ background: theme.bg, color: theme.syntex, }}
    return (
        <div id="paper">
            <div id="pattern">
                <div id="content">
                    <div
                        className="card__item"
                    >
                        
                        <h2
                            onClick={hendleDone} className={done ? "done" : ""}>{title}</h2>
                        <button onClick={hendleDelete}>Delet</button>
                        <button onClick={hendleDone}>Done</button>
                        <button onClick={hendleEditing}>Edit</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NotesItem;