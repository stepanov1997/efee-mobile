import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import ZavrsniRadovi from '../screens/zavrsniRadovi';
import ZavrsniRadDetail from "../screens/zavrsniRadDetail";

const screens = {
    ZavrsniRadovi: {
        screen: props => <ZavrsniRadovi {...props} type="slobodni" />,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Slobodni završni radovi' navigation={navigation} />
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

const ZavrsniRadoviSlobodniStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default ZavrsniRadoviSlobodniStack;
