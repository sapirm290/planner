import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Collapse, List } from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { deleteItem } from '../../actions/itemsActions';

const useStyles = makeStyles(theme => ({
    li: {
        display: "block"
    },
    text: { textDecoration: "line-through" },
    timeAddedText: { marginLeft: '200px' }
}));
const DIVSTYLE = { margin: "4px", borderRadius: "10px", backgroundColor: "#b0bec5" }


const TodoItem = ({ item, deleteItem }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    } return (
        <div style={DIVSTYLE}>
            <ListItem button classes={{ container: classes.li }} onClick={handleClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemText primary={`${item.title}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete" onClick={() => deleteItem(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <Button variant="contained" color="primary" onClick={(item) => (setItemDone(item))}>"Done!"</Button> */}
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem button onClick={handleClick} classes={{ container: classes.li }}>
                    <ListItemText primary={`${item.description}`} />
                    <ListItemText className={classes.timeAddedText} primary={` Added at: ${item.time_added.slice(0, 10)}`} />
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
