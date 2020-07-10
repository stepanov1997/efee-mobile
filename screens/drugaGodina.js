import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DrugaGodina({navigation}) {
    
    const pressHandler = () => {
        navigation.navigate('OglasDetail');
    }

    return (
        <View>
            <Text>DrugaGodina screen</Text>
            <Button title='vidi oglas detaljno' onPress={pressHandler}/>
        </View>
    )
}