import React from 'react'
import {Icon} from "@mui/material";
import egg from "./allergens/egg.svg";
import celery from "./allergens/celery.svg";
import crustacean from "./allergens/crustacean.svg";
import fish from "./allergens/fish.svg";
import gluten from "./allergens/gluten.svg";
import lupins from "./allergens/lupins.svg";
import milk from "./allergens/milk.svg";
import mustard from "./allergens/mustard.svg";
import nuts from "./allergens/nuts.svg";
import peanuts from "./allergens/peanuts.svg";
import sesame from "./allergens/sesame.svg";
import shellfish from "./allergens/shellfish.svg";
import soy from "./allergens/soy.svg";
import sulfites from "./allergens/sulfites.svg";
import glutenfree from "./diets/glutenfree.svg";
import vegetarian from "./diets/vegetarian.svg";
import vegan from "./diets/vegan.svg";
import adhd from  "./special-needs/adhd.svg";
import autism from "./special-needs/autism.svg"
import behavior from "./special-needs/behavior.svg"
import blind from "./special-needs/blind.svg"
import communication from "./special-needs/communication.svg"
import deaf from "./special-needs/deaf.svg"
import development from "./special-needs/development.svg"
import intellectual from "./special-needs/intellectual.svg"
import disease from "./special-needs/disease.svg"
import wheelchair from "./special-needs/wheelchair.svg"


const fontSize = 55;
const fontSizeSpecialeNeeds = 37;

export const AdhdIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={adhd}
             alt="adhdIcon"/>
    </Icon>
)
export const AutismIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={autism}
             alt="autismIcon"/>
    </Icon>
)
export const BehaviorIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={behavior}
             alt="behaviorIcon"/>
    </Icon>
)
export const BlindIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={blind}
             alt="blindIcon"/>
    </Icon>
)
export const CommunicationIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={communication}
             alt="communicationIcon"/>
    </Icon>
)
export const DeafIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={deaf}
             alt="deafIcon"/>
    </Icon>
)
export const DevelopmentIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={development}
             alt="developmentIcon"/>
    </Icon>
)
export const IntellectualIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={intellectual}
             alt="intellectualIcon"/>
    </Icon>
)
export const DiseaseIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={disease}
             alt="diseaseIcon"/>
    </Icon>
)
export const WheelchairIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds}}>
        <img src={wheelchair}
             alt="wheelchairIcon"/>
    </Icon>
)

export const GlutenFreeIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={glutenfree}
             alt="glutenFreeIcon"/>
    </Icon>
)

export const VegetarianIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={vegetarian}
             alt="vegetarianIcon"/>
    </Icon>
)

export const VeganIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={vegan}
             alt="veganIcon"/>
    </Icon>
)


export const FishIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={fish}
             alt="fishIcon"/>
    </Icon>
)

export const CrustaceanIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={crustacean}  alt="crustaceanIcon"/>
    </Icon>
)

export const CeleryIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={celery}  alt="celeryIcon"/>
    </Icon>
)

export const EggIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={egg}  alt="eggIcon"/>
    </Icon>
)

export const GlutenIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={gluten}  alt="glutenIcon"/>
    </Icon>
)

export const MilkIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={milk}  alt="milkIcon"/>
    </Icon>
)

export const MustardIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={mustard}  alt="mustardIcon"/>
    </Icon>
)

export const NutsIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={nuts}  alt="nutsIcon"/>
    </Icon>
)

export const PeanutsIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={peanuts}  alt="peanutsIcon"/>
    </Icon>
)

export const SesameIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={sesame}  alt="sesameIcon"/>
    </Icon>
)

export const ShellfishIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={shellfish}  alt="shellfishIcon"/>
    </Icon>
)

export const SoyIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={soy}  alt="soyIcon"/>
    </Icon>
)

export const SulfitesIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={sulfites}  alt="sulfitesIcon"/>
    </Icon>
)

export const LupinsIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={lupins}  alt="lupinsIcon"/>
    </Icon>
)