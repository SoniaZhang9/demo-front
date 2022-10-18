import React, {useEffect, useState} from 'react';
import {AppBar, Box, Menu, Link, MenuItem, Toolbar, Avatar, IconButton} from "@mui/material";
import {Link as RouterLink, useLocation} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from "@mui/material/styles";

function Navbar() {
    // const [auth, setAuth] = useState(false) //autenticado o no
    const [displayEntryIcon, setDisplayEntryIcon] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null)
    const [navbarTop, setNavbarTop] = useState(true)

    const theme = useTheme()
    const location = useLocation()


    useEffect(() => {
        if(location.pathname === '/login' || location.pathname === '/register') setDisplayEntryIcon(false)
    }, [location.pathname])
    //cada vez que la location canbie

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeNavBar = () => {
        if(window.scrollY > 60)  {
            setNavbarTop(false)
            console.log(window.scroll)
        } else setNavbarTop(true)
    }

    window.addEventListener('scroll', changeNavBar)

    const top = {
        boxShadow: 'none',
        backgroundColor: 'transparent'
    }

    return(
        <Box>
            <AppBar
                color="" sx={navbarTop ? top : ''}
                    position="fixed" >
                <Toolbar sx={{
                    justifyContent: 'space-between'
                }}>
                    <Link
                        component={RouterLink}
                        to="/"
                        underline="none"
                        sx={{
                            display: 'block',
                            color: 'primary.700',
                            fontSize: '2.2em',
                            fontFamily: 'Comfortaa',
                            marginLeft: '1.7rem',
                            marginTop: '0.5rem',
                        }}>
                        Bimbles
                    </Link>
                    {displayEntryIcon && (
                        <div>
                            <IconButton
                                aria-label="avatar"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                size='small'
                                sx={{
                                    bgcolor: '#fff',
                                    outline: `solid 1px ${theme.palette.grey["500"]}`,
                                    mr: 3,
                                }}
                            >
                                <PersonIcon
                                    sx={{
                                    color: `${theme.palette.grey["500"]}`,
                                }}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Link component={RouterLink} to="/login" underline="none" color="text.primary">
                                    <MenuItem onClick={handleClose}>
                                     Iniciar sesión
                                    </MenuItem>
                                </Link>

                                <Link component={RouterLink} to="/register" underline="none" color="text.primary">
                                    <MenuItem onClick={handleClose}>Registrarse
                                    </MenuItem>
                                </Link>

                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar
