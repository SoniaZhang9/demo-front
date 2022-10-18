import React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    IconButton,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarIcon from '@mui/icons-material/Star'
import PlaceIcon from '@mui/icons-material/Place'

function Item(props) {
    const [saved, setSaved] = React.useState(false);
    return (
        <Box width='100%' display='flex' justifyContent='space-around'>
            { [1,2,3,4].map((i )=> {
                return (
                    <>
                        <Card sx={{ width: 330, mt: 3 }}>
                            <Box position='relative'>
                                <CardMedia
                                    component="img"
                                    height="219"
                                    image="https://images.unsplash.com/photo-1657299156075-12b8c0a2da38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt="Paella dish"
                                />
                            </Box>
                            <CardContent>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb:1
                                }}>
                                    <Typography variant="h5" component="h1">
                                        Cafeteria Sol
                                    </Typography>

                                    <Stack direction="row" spacing={2}>
                                        <Stack color="text.secondary" direction="row" alignItems="Center">
                                            <StarRoundedIcon sx={{
                                                // color: '   #ffcc66',
                                                fontSize: '1rem'
                                            }} />
                                            &nbsp;4.6
                                        </Stack>

                                        <Tooltip title="Guardar en favoritos">
                                            <IconButton
                                                sx={{p:0.3}}
                                                aria-label="add to favorites"
                                                onClick={()=> setSaved(!saved)}
                                            >
                                                {saved ? <FavoriteRoundedIcon sx={{ color: '#e57373'}}/>: <FavoriteBorderRoundedIcon/> }
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>

                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    fontSize: '0.95rem',
                                    alignItems: 'center',
                                    fontFamily: "'Roboto', sans-serif",
                                    mt: 1.5,
                                }} color="text.secondary">
                                    <PlaceIcon sx={{ fontSize: '1.1rem' }}/>&nbsp;C. de Velázquez, 28001 Madrid
                                </Box>

                            </CardContent>
                        </Card>
                    </>
                )}
            )}


        </Box>
    );
}

export default Item;