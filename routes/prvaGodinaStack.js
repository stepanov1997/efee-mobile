import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import PrvaGodina from '../screens/prvaGodina';

const screens = {
    PrvaGodina: {
        screen: PrvaGodina,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Prva Godina' navigation={navigation} />
            }
        },
    },
}

const PrvaGodinaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default PrvaGodinaStack;