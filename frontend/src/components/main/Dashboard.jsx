import React, { useEffect, Fragment } from 'react'
import { Box, Container, ListItem, ListItemIcon, ListItemText, Drawer, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox';
import ItemLogic from '../item/ItemContainer'
import AddItemLogic from '../createItem/AddItemContainer';
import NavDrawer from '../navDrawer/NavDrawer'
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles(theme => ({
    root: {

        color: "white"
    },
    title: {
        fontWeight: 550
    },
    headerMargin: {
        marginTop: theme.spacing(8)
    }
}));

function Dashboard({ getTodos, items }) {
    const classes = useStyles();
    useEffect(getTodos, []);

    return (
        <Fragment>
            <CssBaseline />
            <NavDrawer />
            <Container className={`${classes.root} ${classes.headerMargin}`} maxWidth="md" >
                <Box variant="contained" color="secondary" p={3} >
                    {items.map(item => <ItemLogic item={item} key={item.id} />)}
                    <AddItemLogic />

                </Box>
            </Container>
        </Fragment>
    )
}

export default Dashboard
