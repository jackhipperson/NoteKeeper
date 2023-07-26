import React, {useState} from "react";

function Message() {
    return (
        <div>
            <textarea className="bg-inherit outline-none w-full resize-none h-48" placeholder="Enter note..."></textarea>
        </div>
    )
}

export default Message;