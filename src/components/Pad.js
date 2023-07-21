import React from "react";
import Title from "./Title";
import Message from "./Message";
import AddButton from "./AddButton";

function Pad() {
    return (
        <div class="box-border mx-auto self-auto rounded-lg shadow-2xl fit-content w-96 p-4 bg-red-300">
            <Title />
            <Message />
            <AddButton />
        </div>
    )
}

export default Pad;