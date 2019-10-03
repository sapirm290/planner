import React, { useState } from 'react'
import { Paper, Button, InputLabel, Input, FormControl } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.secondary.light,
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'fixed',
        bottom: '0%',
    },
    button: {
        height: theme.spacing(6)
    },
    margin: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    input: {
        fontWeight: '500'
    }
}));


const ItemCreation = ({ addTodo, children }) => {
    const classes = useStyles();
    const [item, setItem] = useState({
        title: '',
        description: '',
        deadline: new Date()

    })
    const handleChange = (property) => (e) => {
        setItem({ ...item, [property]: e.target.value })
    }
    function handleDateChange(date) {
        setItem({ ...item, deadline: date });
    }
    const handleSubmit = () => {
        addTodo(item)
        setItem({
            title: '',
            description: '',
            deadline: new Date()
        })
    }
    return (
        <div>
            <Paper classes={{ root: classes.paper }} className={classes.root} p={1} m={2}>
                <FormControl className={classes.margin} >
                    <InputLabel htmlFor="title">Item: </InputLabel>
                    <Input className={classes.input} variant='outlined' autoFocus={true} onChange={handleChange("title")}
                        value={item.title}
                        input={<Input name="title" id="title" />}
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input className={classes.input} onChange={handleChange("description")}
                        value={item.description}
                        input={<Input name="description" id="description" />}
                    />
                </FormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className={`${classes.margin} ${classes.input}`}
                        label="Deadline date"
                        value={item.deadline}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        className={`${classes.margin} ${classes.input}`}
                        label="Deadline time"
                        value={item.deadline}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button onClick={handleSubmit} classes={{ root: classes.button }} variant="contained" color="primary">Add Item</Button>
            </Paper>
            <div>{children}</div>
        </div >
    )
}
export default ItemCreation
