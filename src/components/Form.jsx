import {Button, makeStyles, TextField} from "@material-ui/core";
import React, {useState} from "react";

const useStyles = makeStyles((theme) => ({
    myForm: {
        display: "flex"
    }
}));

export const Form = () => {
    const classes = useStyles();

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
            } else if (window.location.hash === "") {
                searchParams(window.location.hash += "#tags=" + newItem);
            }
            else {
                searchParams(window.location.hash += "," + newItem);
            }
            setNewItem('');
        }
    }

    return (
        <form className={classes.myForm}>
            <TextField type="text" id="outlined-basic" label="Add an item" variant="outlined" value={newItem}
                       onChange={onChange}/>
            <Button onClick={e => handleSubmit(e)} variant="contained" color="primary">
                Send
            </Button>
        </form>
    )
}
