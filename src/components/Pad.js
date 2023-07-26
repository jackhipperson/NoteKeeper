import React from "react";
import Title from "./Title";
import Message from "./Message";
import AddButton from "./AddButton";
import Card from "./Card";

function Pad() {
    return (
        <Card>
            <Title />
            <Message />
            <AddButton />
        </Card>
    )
}

export default Pad;