import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import PostdiplomskiStudij from '../screens/postdiplomskiStudij';
import OglasDetail from "../screens/oglasDetail";

const screens = {
    PostdiplomskiStudij: {
        screen: PostdiplomskiStudij,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Postdiplomski studij' navigation={navigation} />
            }
        },
    },
    OglasDetail: {
        screen: OglasDetail,
        navigationOptions: {
            title: 'Oglas',
            headerBackTitle: 'Postdiplomski studij',
        }
    },
}

const PrvaGodinaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default PrvaGodinaStack;
