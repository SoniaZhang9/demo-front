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
    InputAdornment, Link,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";

function Register() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);

    // mensajes de errores de validación
    setLocale({
        string: {
            min: 'Debe tener como mínimo ${min} caracteres',
        },
    })

    // esquema de nuestro formulario
    let schema = yup.object().shape({
        name: yup.string().required("El nombre es obligatorio").min(3),
        surname: yup.string().required("Los apellidos son obligatorios").min(3),
        email: yup.string().email("El formato del correo es inválido").required("El correo es obligatorio"),
        password: yup.string().required("La contraseña es obligatoria").min(8)
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    })

    const [displayPassword, setDisplayPassword] = useState(false);

    const onSubmit = (d) => {
        setLoading(true)
        setTimeout(
            () => navigate('/dashboard', { replace: true }),
            2000)
    }

    return (
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
                Regístrate
            </Typography>
            <Typography variant='body1'
                        color= 'text.secondary'
                        component='p'
                        sx={{ mb: 4,
                            fontSize:'1.2rem'
                        }}> ¡Bienvenido a Bimbles! </Typography>

            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2.5} sx={{
                    width: '400px'
                }}>
                    <Stack spacing={2.1} direction={{ xs: 'column', sm: 'row' }}>
                        <TextField
                            {...register('name')}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            label="Nombre" />
                        <TextField
                            {...register('surname')}
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                            label="Apellidos"/>
                    </Stack>
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
                    color='secondary'>Crear cuenta</LoadingButton>
            </form>
            <Box>
                <Typography color= 'text.secondary' variant='body1'  component="span">¿Ya tienes cuenta? </Typography>
                <Link
                    color= 'secondary'
                    fontWeight='600'
                    component={RouterLink}
                    to="/login"
                    underline="none">
                    Iniciar sesión
                </Link>
            </Box>
        </Box>
    );
}

export default Register;