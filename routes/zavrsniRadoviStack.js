import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import ZavrsniRadovi from '../screens/zavrsniRadovi';
import ZavrsniRadDetail from "../screens/zavrsniRadDetail";

const screens = {
    ZavrsniRadovi: {
        screen: ZavrsniRadovi,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Završni radovi' navigation={navigation} />
            }
        },
    },
    ZavrsniRadDetail: {
        screen: ZavrsniRadDetail,
        navigationOptions: {
            title: 'Završni rad',
            headerBackTitle: 'Završni radovi',
        }
    }
}

const ZavrsniRadoviStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default ZavrsniRadoviStack;
