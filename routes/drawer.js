import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

// stacks
import PocetnaStack from './pocetnaStack';
import PrvaGodinaStack from './prvaGodinaStack';
import DrugaGodinaStack from './drugaGodinaStack';
import TrecaGodinaStack from './trecaGodinaStack';
import CetvrtaGodinaStack from './cetvrtaGodinaStack';
import DrugiCiklusStack from './drugiCiklusStack';
import TreciCiklusStack from './treciCiklusStack';
import ZavrsniRadoviStack from './zavrsniRadoviStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Pocetna: {
        displayName: "Početna strana",
        screen: PocetnaStack,
    },
    Prva: {
        displayName: "Prva godina",
        screen: PrvaGodinaStack,
    },
    Druga: {
        displayName: "Druga godina",
        screen: DrugaGodinaStack,
    },
    Treca: {
        displayName: "Treća godina",
        screen: TrecaGodinaStack,
    },
    Cetvrta: {
        displayName: "Četvrta godina",
        screen: CetvrtaGodinaStack,
    },
    DrugiCiklus: {
        displayName: "Drugi ciklus",
        screen: DrugiCiklusStack,
    },
    TreciCiklus: {
        displayName: "Treći ciklus",
        screen: TreciCiklusStack,
    },
    ZavrsniRadovi: {
        displayName: "Završni radovi",
        screen: ZavrsniRadoviStack,
    },
});

export default createAppContainer(RootDrawerNavigator);
