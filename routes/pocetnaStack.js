import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Pocetna from '../screens/pocetna';

const screens = {
    Pocetna: {
        screen: Pocetna,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Početna' navigation={navigation} />
            }
        },
    },
}

const PocetnaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default PocetnaStack;