import React from 'react';
import { View, Text } from 'react-native';
import { MainPage } from '../components/main-page/main-page';


export default function Pocetna(props) {
    return (
        <View>
            <MainPage navigation={props.navigation}/>
        </View>
    )
}
