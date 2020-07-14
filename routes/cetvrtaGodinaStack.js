import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import CetvrtaGodina from '../screens/cetvrtaGodina';
import OglasDetail from "../screens/oglasDetail";

const screens = {
    CetvrtaGodina: {
        screen: CetvrtaGodina,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Četvrta godina' navigation={navigation} />
            }
        },
    },
    OglasDetail: {
        screen: OglasDetail,
        navigationOptions: {
            title: 'Oglas',
            headerBackTitle: 'Četvrta godina',
        }
    }
}

const CetvrtaGodinaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default CetvrtaGodinaStack;
