import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";

export const Form = () => {
    let [newItem, setNewItem] = useState('');

    function onChange(e) {
        setNewItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        function searchParams() {
            return new URLSearchParams()
        }

        if (newItem) {
            if (window.location.hash === '#tags=') {
                searchParams(window.location.hash += newItem);
            } else {
                searchParams(window.location.hash += "," + newItem);
            }
            setNewItem('');
        }
    }

    return (
        <form className="myForm">
            <TextField type="text" id="outlined-basic" label="Add an item" variant="outlined" value={newItem}
                       onChange={onChange}/>
            <Button onClick={e => handleSubmit(e)} variant="contained" color="primary">
                Send
            </Button>
        </form>
    )
}
