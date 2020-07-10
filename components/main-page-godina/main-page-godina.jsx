import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MainPageGodina = (props) => {
    //const [firstYearData, setFirstYearData] = useState([]);
    //const [secondYearData, setSecondYearData] = useState([]);
    //const [thirdYearData, setThirdYearData] = useState([]);
    //const [fourthYearData, setFourthYearData] = useState([]);

    return <View>
        <Text>{`${props.godina}. godina`}</Text>
        {
            props.data.map((element, i) => (
                <Text key={i}>{element.naslov}</Text>
            ))
        }
    </View>
} 