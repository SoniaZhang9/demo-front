import React from 'react';
import {
    Box,
    Checkbox, Divider,
    FormControlLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {
    FishIcon,
    GlutenIcon,
    NutsIcon,
    CrustaceanIcon,
    CeleryIcon,
    EggIcon, MustardIcon, SesameIcon, PeanutsIcon, SulfitesIcon, SoyIcon, LupinsIcon, MilkIcon, ShellfishIcon
} from "../../../assets/icons/PreferencesIcons";


function AllergensList(props) {
    const info = props.info
    const allergensListLeft = [
        {label : "Cereales con gluten", info: "Trigo, espelta, kamut, centeno, cebada y avena.", icon: GlutenIcon() },
        {label : "Frutos de cáscara", info: "Almendras, avellanas, nueces, anacardos, pacanas, panes, postres, helados, galletas, mazapán, salsas, aceites.", icon: NutsIcon() },
        {label : "Crustáceos", info: "Cangrejos, langosta, gambas, langostinos, carabineros, cigalas etc. y también salsas, cremas, platos preparados...", icon: CrustaceanIcon() },
        {label : "Apio", info: "Sal, ensaladas, productos cárnicos, sopas, salsas...", icon: CeleryIcon() },
        {label : "Huevos", info: "Tartas, productos cárnicos, mayonesa, mousses, pastas, quiches, salsas.", icon: EggIcon() },
        {label : "Mostaza", info: "Panes, currys, marinados, productos cárnicos, aliños, salsas y sopas.", icon: MustardIcon()},
        {label : "Pescado", info: "Pizzas, cubos de sopa, aliños para ensaladas.", icon: FishIcon() },
    ];

    const allergensListRight = [
        {label : "Granos de sésamo", info: "Pastas, aceites, harinas, panes.", icon: SesameIcon() },
        {label : "Cacahuetes", info: "Mantecas, aceite, harina, galletas, chocolate, currys, postres, salsas...", icon: PeanutsIcon() },
        {label : "Sulfitos / Dióxido de azufre", info: "Conservantes en crustáceos, frutas desecadas, productos cárnicos, vegetales, vino y cervezas.", icon: SulfitesIcon() },
        {label : "Soja", info: "alsas, pastas, aceites, tofu, postres, pasta de miso, productos cárnicos y productos para vegetarianos.", icon: SoyIcon() },
        {label : "Altramuces", info: "Pan, pasteles y pastas.", icon: LupinsIcon() },
        {label : "Leche", info: "Mantequilla, queso, nata, yogures... sopas, salsas.", icon: MilkIcon() },
        {label : "Moluscos", info: " Mejillones, almejas, caracoles, ostras, bígaros, chirlas, berberechos, cremas, salsas, platos preparados.", icon: ShellfishIcon() }
    ];

    return (
        <>
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }}>

            <List sx={{
                bgcolor: 'background.paper',
                mr: 10
            }}>
                {
                    allergensListLeft.map( (item) =>
                        {
                            return (
                                <ListItem>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={
                                            <FormControlLabel
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'space-between'
                                                }}
                                                labelPlacement="start"
                                                label={item.label}
                                                control={<Checkbox/>}
                                            />}
                                        secondary={ info ? item.info : null}
                                    />
                                </ListItem>
                            )
                        }
                    )
                }
            </List>

            {/*<Divider sx={{ mr: '10%'}} orientation="vertical" flexItem />*/}

            <List sx={{
                bgcolor: 'background.paper'
            }}>
                {
                        allergensListRight.map( (item) =>
                        {
                            return (
                                <ListItem >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={
                                            <FormControlLabel
                                                labelPlacement="start"
                                                label={item.label}
                                                control={<Checkbox/>}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'space-between'
                                                }}
                                            />}
                                        secondary={ info ? item.info : null}
                                    />
                                </ListItem>
                            )
                        }
                    )
                }
            </List>
        </Box>
        </>
    );
}

export default AllergensList;