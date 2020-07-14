import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainPage } from '../components/main-page/main-page';


export default function Pocetna(props) {
    return (
        <View>
            <MainPage navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    noDataContainer: {
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
});