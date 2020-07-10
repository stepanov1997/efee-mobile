import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainPageGodina } from '../main-page-godina/main-page-godina';

export const MainPage = () => {
    const [firstYearData, setFirstYearData] = useState([]);
    const [secondYearData, setSecondYearData] = useState([]);
    const [thirdYearData, setThirdYearData] = useState([]);
    const [fourthYearData, setFourthYearData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/all");
            let array = await response.json();
            setFirstYearData(array.filter(elem => elem.oglasnaPloca.id === 1));
            setSecondYearData(array.filter(elem => elem.oglasnaPloca.id === 2));
            setThirdYearData(array.filter(elem => elem.oglasnaPloca.id === 3));
            setFourthYearData(array.filter(elem => elem.oglasnaPloca.id === 4));
        }
        fetchData();
    }, [])
    return (
        <View>
            <MainPageGodina godina={1} data={firstYearData}></MainPageGodina>
            <MainPageGodina godina={2} data={secondYearData}></MainPageGodina>
            <MainPageGodina godina={3} data={thirdYearData}></MainPageGodina>
            <MainPageGodina godina={4} data={fourthYearData}></MainPageGodina>
        </View>
    )
} 