import React from 'react'
import { ListItem, Collapse, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { isToday, format } from 'date-fns'
const useStyles = makeStyles(theme => ({
    li: {
        display: "block"
    },
    text: { textDecoration: "line-through" },
    timeAddedText: { marginLeft: '200px' },
    leftMargin: {
        marginLeft: 'auto'
    },
    div: { margin: theme.spacing(0.5), borderRadius: theme.spacing(1.2), backgroundColor: theme.palette.secondary.main }
}));


const TodoItem = ({ item, deleteTodo }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const itemDeadline = new Date(item.deadline)
    const itemCreateDate = new Date(item.time_added)
    const deadlineForShow = isToday(itemDeadline) ? `Today at ${format(itemDeadline, 'HH:mm')}` : format(itemDeadline, 'MM/dd/yyyy')
    const createDateForShow = isToday(itemCreateDate) ? `Today at ${format(itemCreateDate, 'HH:mm')}` : format(itemCreateDate, 'MM/dd/yyyy')
    function handleClick() {
        setOpen(!open);
    } return (
        <div className={classes.div}>
            <ListItem button classes={{ container: classes.li }} onClick={handleClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemText primary={`${item.title} `} secondary={`Deadline: ${deadlineForShow}`} />
                {/* <ListItemText className={classes.leftMargin} primary={`Deadline: ${deadlineForShow}`} /> */}
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete" onClick={() => deleteTodo(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <Button variant="contained" color="primary" onClick={(item) => (setItemDone(item))}>"Done!"</Button> */}
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem button onClick={handleClick} classes={{ container: classes.li }}>
                    <ListItemText primary={`${item.description},  Created: ${createDateForShow}`} />
                    {/* <ListItemText className={classes.timeAddedText} primary={` Added at: ${item.time_added.slice(0, 10)}`} /> */}
                    {/* <ListItemSecondaryAction>
                        <IconButton onClick={() => (item.id)}>
                        </IconButton>
                    </ListItemSecondaryAction> */}
                </ListItem>
            </Collapse>
        </div>
    );
}

export default TodoItem
