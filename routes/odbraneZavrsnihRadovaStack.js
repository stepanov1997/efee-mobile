import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import PrvaGodina from '../screens/prvaGodina';
import OglasDetail from "../screens/oglasDetail";
import OdbraneRadova from '../screens/odbraneRadova';

const screens = {
    OdbraneRadova: {
        screen: OdbraneRadova,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Odbrane završnih radova' navigation={navigation} />
            }
        },
    },
    OglasDetail: {
        screen: OglasDetail,
        navigationOptions: {
            title: 'Oglas',
        }
    },
}

const PrvaGodinaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default PrvaGodinaStack;
