import React, { useState, Fragment } from 'react'
import { Box, ListItem, ListItemIcon, ListItemText, Drawer, List, Input, FormControl, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox';
import { connect } from 'react-redux'
import { updateSearch } from '../../actions/nav'

const useStyles = makeStyles(theme => ({

    drawer: {
        backgroundColor: theme.palette.secondary.light,
        paddingTop: 64,
        maxWidth: '14%'
    },

    margin: {
        margin: theme.spacing(1)
    }

}));
const NavDrawer = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState('')
    const searchChange = (e) => {
        setSearch(e.target.value);
        props.updateSearch(e.target.value);
    }
    return (
        <Fragment>

            <Drawer
                elevation={16}
                // className={classes.drawer}
                classes={{
                    paper: classes.drawer,
                }}
                variant="permanent">
                <List>
                    <FormControl>
                        <InputLabel htmlFor="search">Search</InputLabel>
                        <Input className={classes.margin} onChange={searchChange}
                            value={search}
                            input={<Input name="search" />}
                        />
                    </FormControl>
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
                </List>
            </Drawer>
        </Fragment>
    )


}
export default connect(null,
    { updateSearch }
)(NavDrawer)