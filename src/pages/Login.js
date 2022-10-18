import React, {useEffect, useState} from 'react'
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {setLocale} from "yup";
import * as yup from 'yup';
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment, LinearProgress, Link, Snackbar,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Alert, LoadingButton} from "@mui/lab";

function Login() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [displayPassword, setDisplayPassword] = useState(false)
    const [redirection, setRedirection] = useState(false)
    const [alertAuth, setAlertAuth] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertAuth(false);
    };

    // mensajes de errores de validación
    setLocale({
        string: {
            min: 'Debe tener como mínimo ${min} caracteres',
        },
    })

    // esquema de nuestro formulario
    let schema = yup.object().shape({
        email: yup.string().email("El formato del correo es inválido").required("El correo es obligatorio"),
        password: yup.string().required("La contraseña es obligatoria").min(8)
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        if (data.email === 'hola@hola.es' && data.password === '12341234') {
            setLoading(true)
            setTimeout(
                () => {
                    navigate('/dashboard', { replace: true }) },
                2000)
        } else setAlertAuth(true)
    }

    return (
        <>
            {redirection && <LinearProgress color="secondary" />}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '65vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant='h3' sx={{
                    fontFamily: 'Nunito Sans',
                    color: 'text.primary',
                    mb: 0.5
                }} component='h1'>
                    Iniciar sesión
                </Typography>
                <Typography variant='body1'
                    color= 'text.secondary'
                    component='p'
                    sx={{ mb: 4,
                        fontSize:'1.2rem'
                    }}> Introduce tus datos </Typography>

                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2.5} sx={{
                        width: '400px'
                    }}>
                        <TextField
                            {...register('email')}
                            id="email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            label="Correo electrónico"/>
                        <FormControl>
                            <TextField
                                id="password"
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                type={displayPassword ? 'text' : 'password'}
                                label="Contraseña"
                                InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                        <IconButton
                                        onClick={()=> setDisplayPassword(!displayPassword)}
                                        edge="end">
                                    {displayPassword ? <Visibility/> :  <VisibilityOff/>}
                                        </IconButton>
                                        </InputAdornment>
                                        )
                                }}
                            />
                        </FormControl>
                    </Stack>
                    <LoadingButton
                        loading={loading}
                        type='submit'
                        fullWidth size='large'
                        variant="contained"
                        sx={{
                            mt: 4,
                            mb: 5,
                            p: 1.4
                        }}
                        color='secondary'>Iniciar sesión</LoadingButton>
                </form>
                <Box>
                    <Typography color= 'text.secondary' variant='body1'  component="span">¿No tienes cuenta? </Typography>
                    <Link
                        color= 'secondary'
                        fontWeight='600'
                        component={RouterLink}
                        to="/register"
                        underline="none"
                        onClick={()=> setRedirection(true)}
                    >
                        Regístrate aquí
                    </Link>
                </Box>
                <Snackbar
                    open={alertAuth}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    anchorOrigin={
                        {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }
                    }>
                    <Alert onClose={handleClose} severity="error">
                        El email o la contraseña son incorrectos. hola@hola.es 12341234
                    </Alert>
                </Snackbar>
            </Box>
        </>
    );
}

export default Login;