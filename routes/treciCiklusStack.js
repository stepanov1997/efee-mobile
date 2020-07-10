import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import TreciCiklus from '../screens/treciCiklus';

const screens = {
    TreciCiklus: {
        screen: TreciCiklus,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Treći ciklus' navigation={navigation} />
            }
        },
    },
}

const TreciCiklusStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default TreciCiklusStack;