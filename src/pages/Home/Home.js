import React from 'react';
import "./Home.css"
import Earth from '../../assets/illustrations/earth.svg'
import Mushroom from '../../assets/illustrations/mushroom.svg'
import Plants from '../../assets/illustrations/plants.svg'
import {Box, Button, Divider, IconButton, Snackbar, Typography} from "@mui/material"
import Typewriter from "typewriter-effect"
import Preferences from "../../components/preferences/Preferences";
import CloseIcon from '@mui/icons-material/Close';
import {Alert} from "@mui/lab";
import Browser from "../../components/Browser";
import {Link} from "react-router-dom";

function Home() {

    const [open, setOpen] = React.useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <section id='welcome'>
                <div className="light-background"></div>
                <img className="main-img" src={Earth} alt="earth"/>
                <img className="mushroom-img" src={Mushroom} alt="mushroom"/>
                <Box
                    component="header"
                    className="bienvenida"
                    sx={{
                        fontSize: { xs:  "30px", xl: "40px" }
                    }}
                >
                    <h1>Encuentra el
                        <Typewriter
                            options={{loop: true}}
                            onInit={(typewriter) =>
                            typewriter
                                .typeString("restaurante")
                                .pauseFor(1200)
                                .deleteAll()
                                .typeString("comercio")
                                .pauseFor(1200)
                                .deleteAll()
                                .typeString("producto")
                                .pauseFor(1200)
                                .deleteAll()
                                .typeString("lugar")
                                .pauseFor(1500)
                                .deleteAll()
                                .start()
                        }
                        />
                        que mejor se adapta a tus necesidades</h1>
                    <Button
                        href="#preferences"
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={() =>
                            setOpen(true)}
                        sx={{
                            mt: { xs:  2.3, xl: 0.8 },
                            fontWeight: 800,
                            position: 'absolute',
                            right: '13%',
                            color: '#fff',
                            fontSize: { xs:  "21px", xl: "24px" }
                        }}
                    >
                        Empieza ahora
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        action={action}
                        anchorOrigin={
                            {
                                vertical: 'top',
                                horizontal: 'left'
                            }
                        }>
                        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                            Selecciona tus preferencias
                        </Alert>
                    </Snackbar>
                </Box>
            </section>
            <section id="preferences">
                <Preferences/>
            </section>
            <section id="recomendations">
                <Browser/>
            </section>
            <section id="final">
                <img className="plants-img" src={Plants} alt="plants"/>
                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    variant='h4'>Regístrate para poder acceder a todas la funcionalidades
                    <Button component={Link} to="/register" sx={{
                        mt: 2.5
                    }}  color='lightOrange' size="large" variant="contained">Registrarse</Button>
                </Typography>
            </section>
        </>
    );
}

export default Home;