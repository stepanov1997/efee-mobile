import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import ZavrsniRadovi from '../screens/zavrsniRadovi';

const screens = {
    ZavrsniRadovi: {
        screen: ZavrsniRadovi,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Završni radovi' navigation={navigation} />
            }
        },
    },
}

const ZavrsniRadoviStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default ZavrsniRadoviStack;