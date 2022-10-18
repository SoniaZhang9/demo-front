import React, { useState} from 'react';
import {
    AppBar,
    Link,
    Toolbar,
    Divider,
    Drawer,
    Box,
    CssBaseline,
    Button,
    IconButton,
    List,
    ListItemButton, ListItemIcon, ListItemText, styled, Typography, Container
} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {

    const top = {
        boxShadow: 'none',
        backgroundColor: 'white'
    }

    const ListItemButtonStyle ={
        display: 'flex',
        flexDirection: 'column'
    }


    const ListItemIconVertical = styled(ListItemIcon) ({
        minWidth: "unset"
    })

    const [drawerOpen, setDraweOpen] = useState(false)

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }

    const handleDrawer = () => {
        setDraweOpen(!drawerOpen)
    }

    return(
        <Box sx={{ display: 'flex'}}>
            <AppBar
                color="primary" sx={ top }
                position="fixed" >
                <Toolbar sx={{
                    justifyContent: ''
                }}>
                    <Link
                        component={RouterLink}
                        to="/dashboard"
                        underline="none"
                        sx={{
                            display: 'block',
                            color: 'primary.700',
                            fontSize: '2.2em',
                            fontFamily: 'Comfortaa',
                            marginLeft: '1.7rem',
                            marginTop: '0.5rem',
                            marginRight: '3.9rem'
                        }}>
                        Bimbles
                    </Link>
                    <IconButton
                        sx={{
                            color: 'rgba(0,0,0,0.6)',
                            backgroundColor: 'rgba(186, 182, 83, 0.35)',
                            '&:hover': {
                                backgroundColor: '#c5ccaf'}
                        }}
                        onClick={handleDrawer}>
                        {drawerOpen ? <MenuIcon/> : <MenuOpenIcon/>}
                    </IconButton>
                </Toolbar>
                <Divider/>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                sx={{ zIndex: 1}}>
                <Toolbar/>
                <CssBaseline />
                <Box boxShadow="10px 10px lightblue" width='240px' height='100%'>
                    <List component="nav" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                        <Box>
                            <ListItemButton
                                component={RouterLink}
                                to="/dashboard"
                                sx={ ListItemButtonStyle }
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                            >
                                <ListItemIconVertical>
                                    <HomeRoundedIcon />
                                </ListItemIconVertical>
                                <ListItemText primary="Página principal" />
                            </ListItemButton>
                            <ListItemButton
                                component={RouterLink}
                                to="/dashboard/favs"
                                sx={ ListItemButtonStyle }
                                selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, 1)}
                            >
                                <ListItemIconVertical>
                                    <FavoriteRoundedIcon />
                                </ListItemIconVertical>
                                <ListItemText primary="Favoritos" />
                            </ListItemButton>
                            <ListItemButton
                                component={RouterLink}
                                to="/dashboard/preferences"
                                sx={ ListItemButtonStyle }
                                selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)}
                            >
                                <ListItemIconVertical>
                                    <SettingsRoundedIcon />
                                </ListItemIconVertical>
                                <ListItemText primary="Preferencias" />
                            </ListItemButton>
                            <ListItemButton
                                sx={ ListItemButtonStyle }
                                selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)}
                            >
                                <ListItemIconVertical>
                                    <PersonRoundedIcon />
                                </ListItemIconVertical>
                                <ListItemText primary="Perfil" />
                            </ListItemButton>
                            <ListItemButton
                                sx={ ListItemButtonStyle }
                                selected={selectedIndex === 4}
                                onClick={(event) => handleListItemClick(event, 4)}
                            >
                                <ListItemIconVertical>
                                    <AddCircleRoundedIcon/>
                                </ListItemIconVertical>
                                <ListItemText primary="Añadir item" />
                            </ListItemButton>
                            <Divider/>
                        </Box>
                        <ListItemButton
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                mb: 6
                            } }>
                            <ListItemIconVertical>
                                <LogoutIcon/>
                            </ListItemIconVertical>
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
            <Toolbar/>
        </Box>
    )
}

export default Navbar
