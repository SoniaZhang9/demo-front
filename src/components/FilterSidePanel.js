import React, {useState} from 'react';
import {
    Box,
    Button,
    Checkbox, Container,
    Divider,
    Drawer,
    FormControlLabel,
    FormGroup, Link,
    TextField,
    Typography
} from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import {Autocomplete} from "@mui/lab";
import {useTheme} from "@mui/material";

function FilterSidePanel(props) {
    const theme = useTheme()
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const categories = [
        {value: 1, icon: <RestaurantTwoToneIcon/>, text: 'Restaurantes', type: 'cocina', list: ['Libanesa', 'Mexicana', 'Española', 'Peruana', 'Italiana', 'Marisco', 'Pizza', 'Japonesa', 'China', 'Bar de tapas', 'India']},
        {value: 2, icon: {BeachAccessOutlinedIcon}, text: 'Lugares', type: 'lugares', list: ['Playas', 'Piscinas', 'Hoteles', 'Cabañas', 'Montañas', 'Islas', 'Polideportivos', 'Teatros', 'Cines', 'Campamentos', 'Talleres']},
        {value: 3, icon: {LocalGroceryStoreOutlinedIcon}, text: 'Comercios', type: 'comercios', list: ['Centros comerciales', 'Supermercados', 'Tiendas de ropa', 'Librerias', 'Papelerias', 'Tiendas de electrodomésticos', 'Tiendas de decoración']},
        {value: 4, icon: {SellOutlinedIcon}, text: 'Productos', type: 'productos', list: ['Alimentacón y bebidas', 'Moda y Accesorios', 'Cine, tv y musica', 'Libros', 'Deportes', 'Juegos']}
    ]

    return (
        <>
            <Button
                sx={{ml: 6}}
                color="grey"
                startIcon={<TuneRoundedIcon />}
                variant="outlined"
                onClick={() => setIsPanelOpen(true)}
            >
                Filtros</Button>
            <Drawer
                anchor='right'
                open={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
            >
                <Box width='250px'>
                <Typography
                    sx={{
                        backgroundColor: theme.palette.primary.light,
                        textAlign: 'center'
                    }}
                    variant="h5" p={3}>
                    {categories[props.category-1].text}
                </Typography>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    justifyItems: 'center'
                }}>
                    <Divider/>
                    <Autocomplete
                        disablePortal
                        options={ciudades}
                        sx={{
                            mt: 3,
                            mb: 3
                        }}
                        renderInput={(params) => <TextField
                            sx={{ display: 'flex'}}
                            {...params} label={<Box><PlaceIcon fontSize='small' /> Destino</Box>}/>}
                    />
                    <Divider/>
                    <Typography variant="h6" pt={3} pb={1}>
                        Tipos de {categories[props.category - 1].type}
                    </Typography>
                    <FormGroup sx={{fontSize: '12px'}}>
                        {categories[props.category-1].list.map((type) => {
                            return(
                                <FormControlLabel className="sidePanel" control={<Checkbox/>} label={type} />)
                        })}
                    </FormGroup>
                    <Divider sx={{mt: 3}}/>
                    <Button onClick={() => setIsPanelOpen(false)} sx={{mt: 3}} variant="contained">Aplicar</Button>
                    <Link sx={{
                        mt: 1.5,
                        textAlign: 'center',
                    }} >Restablecer</Link>
                </Container>
                </Box>
            </Drawer>
        </>
    );
}

export default FilterSidePanel;

const ciudades = ['Vitoria, Álava', 'Baladona, Barcelona', 'Pamplona, Navarra']