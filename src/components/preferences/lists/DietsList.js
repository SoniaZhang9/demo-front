import React from 'react';
import {
    Checkbox,
    FormControlLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {
    GlutenFreeIcon, VeganIcon, VegetarianIcon

} from "../../../assets/icons/PreferencesIcons";


function DietsList(props) {
    const info = props.info
    const dietsList = [
        {label : "Sin gluten", info: "La dieta sin gluten (DSG) consiste en eliminar de forma estricta de la alimentación todos los productos que contengan o se cocinen con trigo, centeno, cebada y avena, o cualquiera de sus variedades e híbridos (espelta, escanda, kamut, triticale...), y productos derivados", icon: GlutenFreeIcon() },
        {label : "Vegetariano", info: "La dieta vegetariana se enfoca a la alimentación con verduras.", icon: VegetarianIcon() },
        {label : "Vegano", info: "La dieta vegana consiste en la abstención del uso de productos de origen animal en la alimentación.", icon: VeganIcon() },
    ];

    return (
        <>
            <List sx={{
                width: '100%',
                bgcolor: 'background.paper'
            }}>
                {
                    dietsList.map( (item) =>
                        {
                            return (
                                <ListItem>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={
                                            <FormControlLabel
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
        </>
    );
}

export default DietsList;