import React from "react";
import AddIcon from '@mui/icons-material/Add';

function AddButton() {
    return (
        <div className="bg-red-900 mx-auto my-auto rounded-full w-12 h-12 border-2 border-red-900 hover:border-red-200">
            <p className="text-white text-3xl text-center "><AddIcon /></p>
        </div>
    )
}

export default AddButton;