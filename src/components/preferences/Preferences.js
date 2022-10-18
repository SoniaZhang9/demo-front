import React, {useEffect} from 'react'
import {Box, Checkbox, Container, Fab, FormControlLabel, Link, styled, Tab, Tooltip} from "@mui/material"
import {TabContext, TabList, TabPanel} from "@mui/lab"
import NoFoodTwoToneIcon from '@mui/icons-material/NoFoodTwoTone'
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone'
import AccessibleTwoToneIcon from '@mui/icons-material/AccessibleTwoTone'
import AllergensList from "./lists/AllergensList";
import DietsList from "./lists/DietsList";
import SpecialNeedsList from "./lists/SpecialNeedsList";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {useLocation} from "react-router-dom";

function Preferences() {
    const [value, setValue] = React.useState("2");
    const [enableInfo, setEnableInfo] = React.useState(false)
    const [displayButton, setDisplayButton] = React.useState(true)

    const location = useLocation()
    useEffect(() => {
        if(location.pathname === '/dashboard/preferences') setDisplayButton(false)
    }, [location.pathname])

    const handleChange = (e: React.SyntheticEvent, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{
            bgcolor: "background.paper",
            borderRadius: '10px',
            position: "relative",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxHeight: '99%'
        }}>
            <Tooltip title="Pulsa para ver más información">
                <Checkbox
                    sx={{
                        position: 'absolute',
                        right: 55,
                        top: 15,
                        fontWeight: '400'
                    }}
                    checked={enableInfo}
                    onChange={(event) => setEnableInfo(event.target.checked)}
                    icon={<InfoOutlinedIcon  sx={{ fontSize: 30 }} />}
                    checkedIcon={<InfoRoundedIcon  sx={{ fontSize: 30 }} />}
                />
            </Tooltip>
            <TabContext value={value} >
                <Box sx={{
                    width: "100%", bgcolor: "background.paper",
                    borderBottom: 1, borderColor: 'divider',
                    p: 2
                }}>
                    <TabList
                        value={value}
                        onChange={handleChange}
                        aria-label="preferences tabs"
                        centered
                    >
                        <Tab
                            label="Dietas especiales"
                            value="1"
                            icon={<SetMealTwoToneIcon/>}
                        />
                        <Tab
                            label="Alergias alimentarias"
                            value="2"
                            icon={<NoFoodTwoToneIcon/>}
                        />
                        <Tab
                            label="Necesidades especiales"
                            value="3"
                            icon={<AccessibleTwoToneIcon/>}
                        />

                    </TabList>
                </Box>
                <Box sx={{
                    display: 'flex',
                }}>
                    <TabPanel value='1' index={1}>
                        <DietsList info={enableInfo}/>
                    </TabPanel>
                    <TabPanel value='2' index={2}>
                        <AllergensList info={enableInfo}/>
                    </TabPanel>
                    <TabPanel sx={{maxHeight: '80vh', overflow: 'auto' }} value='3' index={3}>
                        <SpecialNeedsList info={enableInfo}/>
                    </TabPanel>
                </Box>
            </TabContext>
            {displayButton && <Fab color="primary" href="#recomendations" variant="extended" size="large" aria-label="add"
                  sx={{
                      color: "white",
                      position: 'sticky',
                      alignSelf: 'flex-end',
                      mt: -9,
                      mr: 8,
                      mb: '3em',
                      bottom: '3em'
                  }}>
                <ArrowForwardOutlinedIcon sx={{mr: 1}}/>
                Siguiente
            </Fab>}
        </Container>
    );
}

export default Preferences;