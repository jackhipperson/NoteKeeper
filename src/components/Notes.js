import React from "react";

function Notes(props) {
    return (
        {props.notes.map((note) =>
            {
                <div>
                    <p>{note.title}</p>
                    <p>{note.message}</p>
                </div>
            })
        }
    )
}

export default Notes;