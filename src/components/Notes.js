import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {

    function handleDelete(event) {
        console.log(event.target.value);
        props.onDeleteNote(props.note.id)
    }

    // NEED TO IMPLEMENT DELETE

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {props.notes.map((note) =>
                <form onSubmit={handleDelete}>
                    <div className="box-border self-auto m-4 shadow-2xl fit-content w-96 p-4 bg-gradient-to-r from-[#FFFF70] to-[#FFFF99]">
                        <p className="break-words text-m font-bold">{note.title}</p>
                        <p className="break-words text-sm">{note.message}</p>
                        <div className="flex justify-end">
                            <div className="bg-[#9DBBD0] rounded-full w-12 h-12 hover:bg-[#5d9cc9]">
                                <button className=" text-white text-3xl h-[100%] text-center" ><DeleteIcon /></button>
                            </div>
                        </div>
                    </div>
                </form>
            )
            }
        </div>
    )
}

export default Notes;