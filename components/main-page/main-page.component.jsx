import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MainPage = () => {
    const [firstYearData, setFirstYearData] = useState([]);
    const [secondYearData, setSecondYearData] = useState([]);
    const [thirdYearData, setThirdYearData] = useState([]);
    const [fourthYearData, setFourthYearData] = useState([]);

    useEffect(() => {

    }, [])
    return <View><Text>"MainPage"</Text></View>
} 