import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function Pad(props) {

    const [currentNote, setCurrentNote] = useState({
        title: "",
        message: ""
    })

    function onInputHandler(event) {
        if (event.target.id === 'title') {
            setCurrentNote(prevValues => {
                return {
                    ...prevValues,
                    title: event.target.value
                }
            })
        } else {
            setCurrentNote(prevValues => {
                return {
                    ...prevValues,
                    message: event.target.value
                }
            })
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        if (currentNote.message === "") {
            return
        }
        props.onAddNote(currentNote)
        setCurrentNote({
            title: "",
            message: ""
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="box-border mx-auto self-auto m-8 shadow-2xl fit-content w-96 p-4 bg-gradient-to-r from-[#FFFF70] to-[#FFFF99]">
                <input type="text" className="text-bold text-xl bg-inherit outline-none w-full mb-2" placeholder="Enter title..." value={currentNote.title} id="title" onChange={onInputHandler} />
                <input type="text" className="bg-inherit text-l outline-none w-full mb-2" placeholder="Enter note..." value={currentNote.message} id="message" onChange={onInputHandler} />
                <div className="bg-[#9DBBD0] mx-auto my-auto rounded-full w-12 h-12 hover:bg-[#5d9cc9]">
                    <button type="submit" className="w-12 h-12 text-white text-3xl"><AddIcon /></button>
                </div>
            </div>
        </form>
    )
}

export default Pad;