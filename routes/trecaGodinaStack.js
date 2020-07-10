import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import DrugaGodina from '../screens/trecaGodina';

const screens = {
    DrugaGodina: {
        screen: DrugaGodina,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Treća godina' navigation={navigation} />
            }
        },
    },
}

const DrugaGodinaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default DrugaGodinaStack;