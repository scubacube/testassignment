import {List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import React, {Fragment} from "react";
import {Form} from "./index";

const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        flexDirection: "column"
    }
}));

export const ListComponent = ({list, setList}) => {
    const classes = useStyles();

    function deleteItem(element) {
        let index = list.indexOf(element)
        if (index !== -1) {
            list.splice(index, 1);
            new URLSearchParams(window.location.hash = 'tags=' + list);
            setList(list)
        }
    }

    return (
        <Fragment>
            <List>
                {
                    list ? list.map((element, index) => {
                        return (
                            <ListItem key={index} button className={classes.item} onClick={() => deleteItem(element)}>
                                <ListItemText primary={element}/>
                            </ListItem>
                        )

                    }) : ""
                }

            </List>
            <Form />
        </Fragment>
    )
}
