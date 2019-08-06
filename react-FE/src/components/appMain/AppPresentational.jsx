import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppHeader from "../AppHeader"
import TodoItemWrapper from '../item/TodoItemContainer'
import ItemCreationContainer from '../itemCreation/ItemCreationContainer';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        color: "white"
    },
    title: {
        fontWeight: 550
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },

}));

function AppPresentational({ listsForRendering, saveItems, loadItems }) {
    const classes = useStyles();

    //     const Box = styled.div`
    //   ${palette}
    //   ${spacing}
    // `;
    console.log("current lists:");
    console.log(listsForRendering)
    const logicLists = { todoList: listsForRendering[0], doneList: listsForRendering[1] };
    const lists = {};
    for (const key in logicLists) {
        lists[key] = [];
        for (let index = 0; index < logicLists[key].length; index++) {
            lists[key].push(
                <TodoItemWrapper index={logicLists[key][index]} key={logicLists[key][index]} />
            )
        }
    }

    return (
        <React.Fragment>
            <AppHeader />
            {/* <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent">
                <List>
                    DSAKfnjakj
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
                {/* </List>
            </Drawer> */}
            <ItemCreationContainer>
                <Button onClick={saveItems}>Save in local storage</Button>
                <Button onClick={loadItems}>Load</Button>
            </ItemCreationContainer>
            <Container className={classes.root} maxWidth="md" >

                <Box variant="contained" color="secondary" p={3} >
                    <Typography variant="h5" color="primary" className={classes.title}> To-do :</Typography>
                    {lists["todoList"]}
                </Box>
                <List>

                </List>
                <Divider />
                <Box color="secondary" p={3} >
                    <Typography variant="h5" color="primary" className={classes.title}> Done :</Typography>

                    {lists["doneList"]}
                </Box>

            </Container>
        </React.Fragment>
    )
}

export default AppPresentational
