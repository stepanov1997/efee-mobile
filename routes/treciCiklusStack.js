import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import TreciCiklus from '../screens/treciCiklus';
import OglasDetail from "../screens/oglasDetail";

const screens = {
    TreciCiklus: {
        screen: TreciCiklus,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Treći ciklus' navigation={navigation} />
            }
        },
    },
    OglasDetail: {
        screen: OglasDetail,
        navigationOptions: {
            title: 'Oglas',
        }
    }
}

const TreciCiklusStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default TreciCiklusStack;
