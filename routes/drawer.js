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
import OdbraneRadovaStack from './odbraneZavrsnihRadovaStack';
import PostdiplomskiStudijStack from './postdiplomskiStack';
import ZavrsniRadoviStack from './zavrsniRadoviStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Pocetna: {
        navigationOptions: {
            drawerLabel: "Početna"
        },
        screen: PocetnaStack,
    },
    Prva: {
        navigationOptions: {
            drawerLabel: "Prva godina"
        },
        screen: PrvaGodinaStack,
    },
    Druga: {
        navigationOptions: {
            drawerLabel: "Druga godina"
        },
        screen: DrugaGodinaStack,
    },
    Treca: {
        navigationOptions: {
            drawerLabel: "Treća godina"
        },
        screen: TrecaGodinaStack,
    },
    Cetvrta: {
        navigationOptions: {
            drawerLabel: "Četvrta godina"
        },
        screen: CetvrtaGodinaStack,
    },
    DrugiCiklus: {
        navigationOptions: {
            drawerLabel: "Drugi ciklus"
        },
        screen: DrugiCiklusStack,
    },
    TreciCiklus: {
        navigationOptions: {
            drawerLabel: "Treći ciklus"
        },
        screen: TreciCiklusStack,
    },
    OdbraneRadova: {
        navigationOptions: {
            drawerLabel: "Odbrane završnih radova"
        },
        screen: OdbraneRadovaStack,
    },
    PostdiplomskiStudij: {
        navigationOptions: {
            drawerLabel: "Postdiplomski studij"
        },
        screen: PostdiplomskiStudijStack,
    },
    ZavrsniRadovi: {
        navigationOptions: {
            drawerLabel: "Završni radovi"
        },
        screen: ZavrsniRadoviStack,
    },
});

export default createAppContainer(RootDrawerNavigator);
