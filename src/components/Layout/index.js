import React, { useState } from 'react';
import clsx from 'clsx';
import { styles } from './styles';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
//import { menus, withMenu, textTopMenu } from '../../config/menus';
//import { withAppBar } from '../../config/appBar';

export default function Layout(props) {
    console.log(props)
    const { withAppBar, menus, withMenu, textTopMenu, colors, content } = props;
    const useStyles = makeStyles(theme => styles(theme, withAppBar, colors));
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState({
        Inbox: false
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }
    const handleSubmenu = (pressed) => {
        setOpenSubmenu({
            ...openSubmenu,
            [pressed]: !openSubmenu[pressed]
        })
        return true;
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            {withAppBar ?
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        {menus.length && withMenu > 0 ?
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            :
                            <React.Fragment />
                        }
                        <Typography variant="h6" noWrap>
                            Logo
                </Typography>

                    </Toolbar>
                </AppBar>
                :
                <React.Fragment />
            }

            {menus.length && withMenu > 0 ?
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <Typography >{textTopMenu}</Typography>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />

                    <List>
                        {
                            menus.map((menu, key) => {

                                return (
                                    <React.Fragment key={menu.key}>
                                        <ListItem button onClick={() => { handleSubmenu(menu.name) }} >
                                            <ListItemIcon><Icon>{menu.icon}</Icon></ListItemIcon>
                                            <ListItemText primary={menu.name} />
                                        </ListItem>
                                        <React.Fragment>
                                            {menu.submenus.map((submenu, key) => {
                                                return (
                                                    <Collapse in={openSubmenu[menu.name]} timeout="auto" unmountOnExit key={submenu.name}>
                                                        <List component="div" style={{ paddingLeft: submenu.padding }}>
                                                            <ListItem button className={classes.nested}>
                                                                <ListItemIcon>
                                                                    <Icon>{submenu.icon}</Icon>
                                                                </ListItemIcon>
                                                                <ListItemText primary={submenu.name} />
                                                            </ListItem>
                                                        </List>
                                                    </Collapse>
                                                );
                                            })
                                            }
                                        </React.Fragment>

                                    </React.Fragment>
                                )
                            })
                        }
                    </List>
                </Drawer>
                :
                <React.Fragment />
            }

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {content}
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div>
    );
}



