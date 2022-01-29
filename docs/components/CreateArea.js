import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, setIsExpanded] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const submitNote = (event) => {
        props.onAdd(note);
        event.preventDefault();
        setNote({ title: "", content: "" });
    };

    return (
        <form className="create-note">
            {isExpanded && (
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={note.title}
                />
            )}
            <textarea
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Take a note..."
                name="content"
                rows={isExpanded ? 3 : 1}
                value={note.content}
            />

            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    );
};

export default CreateArea;
