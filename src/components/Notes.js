import React from "react";
import Card from "./Card";

function Notes(props) {


    return (
        <div className="flex flex-col">
            {props.notes.map((note) =>
                <Card>
                    <p className="text-sm font-bold">{note.title}</p>
                    <p className="text-sm">{note.message}</p>
                </Card>
                )
            }
        </div>
    )
}

export default Notes;