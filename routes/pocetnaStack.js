import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Pocetna from '../screens/pocetna';
import OglasDetail from "../screens/oglasDetail";

const screens = {
    Pocetna: {
        screen: Pocetna,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Početna' navigation={navigation} />
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

const PocetnaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default PocetnaStack;
