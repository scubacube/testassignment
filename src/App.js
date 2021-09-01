import './App.css';
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import {ListComponent} from "./components/index";


const useStyles = makeStyles((theme) => ({
    id: {
        width: '100%',
        padding: '15px 10px',
        maxWidth: 360,
        backgroundColor: theme.palette.background.default,

    }
}));

function App() {
    const classes = useStyles();

    let [list, setList] = useState([]);

    function changeListAccordingToHash() {
        let searchParams;
        if (window.location.hash) {
            searchParams = new URLSearchParams(window.location.hash);
            setList(searchParams.get("#tags").split(','))
        }
    }

    useEffect(() => {
        window.addEventListener('hashchange', function () {
            changeListAccordingToHash();
        }, false);
        changeListAccordingToHash();
    }, [])

    return (
        <div className={classes.id}>
            <p>Add <b>#tags=red,blue,purple</b> to the URL</p>
            <ListComponent list={list} setList={setList}/>
            <ListComponent list={list} setList={setList}/>
            <ListComponent list={list} setList={setList}/>
        </div>


    );
}

export default App;
