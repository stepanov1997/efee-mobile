import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import DrugiCiklus from '../screens/drugiCiklus';

const screens = {
    DrugiCiklus: {
        screen: DrugiCiklus,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Drugi ciklus' navigation={navigation} />
            }
        },
    },
    OglasDetail: {
        screen: OglasDetail,
        navigationOptions: {
            title: 'Oglas',
            headerBackTitle: 'Drugi ciklus',
        }
    },
}

const DrugiCiklusStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default DrugiCiklusStack;