
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

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
        screen: PocetnaStack,
    },
    Prva: {
        screen: PrvaGodinaStack,
    },
    Druga: {
        screen: DrugaGodinaStack,
    },
    Treca: {
        screen: TrecaGodinaStack,
    },
    Cetvrta: {
        screen: CetvrtaGodinaStack,
    },
    DrugiCiklus: {
        screen: DrugiCiklusStack,
    },
    TreciCiklus: {
        screen: TreciCiklusStack,
    },
    ZavrsniRadovi: {
        screen: ZavrsniRadoviStack,
    },
});

export default createAppContainer(RootDrawerNavigator);