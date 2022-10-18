import React from 'react';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Button, Container, Fab, Tab} from "@mui/material";
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import FilterSidePanel from "./FilterSidePanel";
import Item from "./Item";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

function Browser() {
    const [value, setValue] = React.useState("1");

    const handleChange = (e: React.SyntheticEvent, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value} >
            <Box sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%", bgcolor: "background.paper",
                borderBottom: 1, borderColor: 'divider',
            }}>
                <TabList
                    sx={{
                        p: 2
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label="preferences tabs"
                    centered
                >
                    <Tab
                        label="Restaurantes"
                        value="1"
                        icon={<RestaurantTwoToneIcon/>}
                    />
                    <Tab
                        label="Lugares"
                        value="2"
                        icon={<BeachAccessOutlinedIcon/>}
                    />
                    <Tab
                        label="Comercios"
                        value="3"
                        icon={<LocalGroceryStoreOutlinedIcon/>}
                    />
                    <Tab
                        label="Productos"
                        value="4"
                        icon={<SellOutlinedIcon/>}
                    />
                </TabList>
                <FilterSidePanel category={value}/>
            </Box>
            <Box width={'80%'} margin={'auto'}>
                <TabPanel value='1' index={1}>
                    <Item/>
                    <br/>
                    <Item/>
                </TabPanel>
                <TabPanel value='2' index={2}>
                    <Item/>
                    <br/>
                    <Item/>
                </TabPanel>
                <TabPanel value='3' index={3}>
                    <Item/>
                    <br/>
                    <Item/>
                </TabPanel>
                <TabPanel value='4' index={4}>
                    <Item/>
                    <br/>
                    <Item/>
                </TabPanel>
                <Fab color="primary" href="#final" variant="extended" size="large" aria-label="add"
                     sx={{
                         color:"white",
                         position: 'absolute',
                         mr: 10,
                         right: '5em',
                     }}
                >
                    <ArrowForwardOutlinedIcon/>
                    Ver más
                </Fab>
            </Box>

        </TabContext>
    );
}

export default Browser;