import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.secondary.light,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        height: '48px'
    },
    input: {
        margin: "20px",
        color: 'white'
    }
}));

// let date_utils = {
//     months: ["January", "February", "March", "April", "May", "June", "July",
//         "August", "September", "October", "November", "December"],
//     days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
//         18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
//     years: [2018, 2019, 2020, 2021, 2022]
// // };
// const HOUROPTIONS = []
// const MINUTEOPTIONS = []
// for (let index = 0; index < 24; index++) {
//     HOUROPTIONS.push(
//         <MenuItem key={"hours" + index} value={`${('0' + index).slice(-2)}`}>{`${('0' + index).slice(-2)}`}</MenuItem>
//     )
// }
// for (let index = 0; index < 61; index++) {
//     MINUTEOPTIONS.push(
//         <MenuItem key={"minutes" + index} value={`${('0' + index).slice(-2)}`}>{`${('0' + index).slice(-2)}`}</MenuItem>
//     )
// }

const ItemCreation = ({ addItem, children }) => {
    const classes = useStyles();
    const [item, setItem] = useState({
        title: 'sample title',
        description: "sample description"
    })
    const handleChange = (e, property) => {
        setItem({ ...item, [property]: e.target.value })
    }
    return (
        <div>
            <Paper classes={{ root: classes.paper }} className={classes.root} p={3} m={2}>
                <FormControl classes={{ root: classes.input, base: classes.input }}>
                    <InputLabel htmlFor="title">Item: </InputLabel>
                    <Input  onChange={(e) => { handleChange(e, "title") }}
                        value={item.title} placeholder={"What do I want to do?..."}
                        input={<Input name="title" id="title" />}
                    />
                </FormControl>
                <FormControl>

                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input  onChange={(e) => { handleChange(e, "description") }}
                        value={item.description} placeholder={"What do I want to do?..."}
                        input={<Input name="description" id="description" />}
                    />
                </FormControl>
                {/* // <FormControl classes={{ root: classes.input }}>
        //     <InputLabel htmlFor="hours">Hour</InputLabel> */}    
                {/* <Select
                        value={item.time.hours}
                        onChange={(e) => { handleChange(e, "time", "hours") }}
                        input={<Input id="hours" />} autoWidth   >
                        {HOUROPTIONS}
                    </Select> */}
                {/* </FormControl>
                <FormControl classes={{ root: classes.input }} >
                    <InputLabel htmlFor="minutes">Minute</InputLabel> */}
                {/* <Select
                        value={item.time.minutes}
                        onChange={(e) => { handleChange(e, "time", "minutes") }}
                        input={<Input id="minutes" />}  >
                        {MINUTEOPTIONS}
                    </Select> */}
                {/* </FormControl> */}
                <Button classes={{ root: classes.button }} variant="contained" color="primary" onClick={() => { addItem(item) }}>Add Item</Button>
            </Paper>
            <div>{children}</div>
        </div >
    )
}
export default ItemCreation
