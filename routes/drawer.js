import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Text, View } from 'react-native'
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
import ZavrsniRadoviSviStack from './zavrsniRadoviSviStack';
import ZavrsniRadoviSlobodniStack from './zavrsniRadoviSlobodniStack';
import ZavrsniRadoviZauzetiStack from './zavrsniRadoviZauzetiStack';
import ZavrsniRadoviOdbranjeniStack from './zavrsniRadoviOdbranjeniStack';
import OuterDrawerItem from './outterDrawerItem';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Pocetna: {
        navigationOptions: {
            drawerLabel: "Početna"
        },
        screen: PocetnaStack,
    },
    Oglasi: {
        navigationOptions: {
            drawerLabel: "Oglasi"
        },
        screen: PrvaGodinaStack,
    },
    Prva: {
        navigationOptions: {
            drawerLabel: "\tPrva godina"
        },
        screen: PrvaGodinaStack,
    },
    Druga: {
        navigationOptions: {
            drawerLabel: "\tDruga godina"
        },
        screen: DrugaGodinaStack,
    },
    Treca: {
        navigationOptions: {
            drawerLabel: "\tTreća godina"
        },
        screen: TrecaGodinaStack,
    },
    Cetvrta: {
        navigationOptions: {
            drawerLabel: "\tČetvrta godina"
        },
        screen: CetvrtaGodinaStack,
    },
    DrugiCiklus: {
        navigationOptions: {
            drawerLabel: "\tDrugi ciklus"
        },
        screen: DrugiCiklusStack,
    },
    TreciCiklus: {
        navigationOptions: {
            drawerLabel: "\tTreći ciklus"
        },
        screen: TreciCiklusStack,
    },
    PostdiplomskiStudij: {
        navigationOptions: {
            drawerLabel: "\tPostdiplomski studij"
        },
        screen: PostdiplomskiStudijStack,
    },
    OdbraneRadova: {
        navigationOptions: {
            drawerLabel: "\tOdbrane završnih radova"
        },
        screen: OdbraneRadovaStack,
    },
    ZavrsniRadovi: {
        navigationOptions: {
            drawerLabel: "Završni radovi",
            drawerLockMode: 'locked',
        },
        screen: ZavrsniRadoviStack
    },
    ZavrsniRadoviSvi: {
        navigationOptions: {
            drawerLabel: "\tSvi"
        },
        screen: ZavrsniRadoviSviStack,
    },
    ZavrsniRadoviSlobodni: {
        navigationOptions: {
            drawerLabel: "\tSlobodni"
        },
        screen: ZavrsniRadoviSlobodniStack,
    },
    ZavrsniRadoviZauzeti: {
        navigationOptions: {
            drawerLabel: "\tZauzeti"
        },
        screen: ZavrsniRadoviZauzetiStack,
    },
    ZavrsniRadoviOdbranjeni: {
        navigationOptions: {
            drawerLabel: "\tOdbranjeni"
        },
        screen: ZavrsniRadoviOdbranjeniStack,
    }
});

export default createAppContainer(RootDrawerNavigator);
