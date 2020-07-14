import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import DrugaGodina from '../screens/trecaGodina';
import OglasDetail from "../screens/oglasDetail";

const screens = {
    DrugaGodina: {
        screen: DrugaGodina,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Treća godina' navigation={navigation} />
            }
        },
    },
    OglasDetail: {
        screen: OglasDetail,
        navigationOptions: {
            title: 'Oglas',
            headerBackTitle: 'Treća godina',
        }
    },
}

const DrugaGodinaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default DrugaGodinaStack;
