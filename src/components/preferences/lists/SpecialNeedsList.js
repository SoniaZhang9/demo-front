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
    AdhdIcon,
    AutismIcon, BehaviorIcon,
    BlindIcon, CommunicationIcon, DeafIcon,
    DevelopmentIcon, DiseaseIcon, IntellectualIcon, WheelchairIcon

} from "../../../assets/icons/PreferencesIcons";
import {Blind} from "@mui/icons-material";


function SpecialNeedsList(props) {
    const info = props.info
    const allergensList = [
        {label : "Trastornos graves del desarrollo ", info: "limitación en el funcionamiento cognitivo o adaptativo que se inicia en la infancia y produce alteraciones de conducta en diversas áreas de la vida diaria, como el hogar o la escuela.", icon: DevelopmentIcon() },
        {label : "Discapacidad visual", info: "discapacidad sensorial que consiste en la pérdida total o parcial del sentido de la vista. ", icon: BlindIcon() },
        {label : "Discapacidad intelectual", info: " alteración en el desarrollo del ser humano caracterizada por limitaciones significativas tanto en el funcionamiento intelectual como en las conductas adaptativas y que se evidencia antes de los 18 años de edad. ", icon: IntellectualIcon() },
        {label : "Discapacidad auditiva", info: "dificultad o la imposibilidad de usar el sentido del oído debido a una pérdida de la capacidad auditiva parcial (hipoacusia) o total (cofosis), y unilateral o bilateral. ", icon: DeafIcon() },
        {label : "Trastornos de la comunicación", info: "Trastorno del discurso y del lenguaje que se refieren a problemas en la comunicación y áreas relacionadas, como la función motora oral. Los retrasos y trastornos pueden ir desde la sustitución de sonidos simples a la incapacidad de comprender o utilizar su lengua materna.", icon: CommunicationIcon() },
        {label : "Discapacidad física", info: "deficiencia que provoca en el individuo que la padece alguna disfunción en el aparato locomotor.", icon: WheelchairIcon()},
        {label : "Trastornos del Espectro Autista", info: "Abarcan un amplio espectro de trastornos que, en su manifestación fenotípica, se caracterizan por deficiencias persistentes en la comunicación social y en la interacción social en diversos contextos, unidas a patrones restrictivos y repetitivos de comportamiento, intereses o actividades.", icon: AutismIcon() },
        {label : "Trastornos graves de conducta", info: "Es una serie de problemas conductuales y emocionales que se presentan en niños y adolescentes. Los problemas pueden involucrar comportamiento desafiante o impulsivo, consumo de drogas o actividad delictiva.", icon: BehaviorIcon() },
        {label : "Trastorno por Déficit de Atención con/sin Hiperactividad", info: "trastorno crónico del desarrollo neuropsiquiátrico que afecta el desarrollo y funcionamiento de las funciones ejecutivas.", icon: AdhdIcon() },
        {label : "Enfermedades raras y crónicas", info: "Enfermedades que afectan a una proporción reducida de la población.", icon: DiseaseIcon() },
    ];

    return (
        <>
            <List >
                {
                    allergensList.map( (item) =>
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
                                                  sx={{
                                                      width: '230px',
                                                      display: 'flex',
                                                      justifyContent: 'space-between',
                                                      alignItems: 'center'
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
        </>
    );
}

export default SpecialNeedsList;