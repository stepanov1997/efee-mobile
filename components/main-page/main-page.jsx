import React, {useState, useEffect, useReducer} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MainPageGodina } from '../main-page-godina/main-page-godina';
import { ScrollView } from 'react-native-gesture-handler';

export const MainPage = (props) => {
    const [firstYearData, setFirstYearData] = useState([]);
    const [secondYearData, setSecondYearData] = useState([]);
    const [thirdYearData, setThirdYearData] = useState([]);
    const [fourthYearData, setFourthYearData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [phdData, setPhdData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const numberOfOglasi = 3;
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/all");
            let array = await response.json();
            setFirstYearData(array.filter(elem => elem.oglasnaPloca.id === 1).splice(0, numberOfOglasi));
            setSecondYearData(array.filter(elem => elem.oglasnaPloca.id === 2).splice(0, numberOfOglasi));
            setThirdYearData(array.filter(elem => elem.oglasnaPloca.id === 3).splice(0, numberOfOglasi));
            setFourthYearData(array.filter(elem => elem.oglasnaPloca.id === 4).splice(0, numberOfOglasi));
            setMasterData(array.filter(elem => elem.oglasnaPloca.id === 21).splice(0, numberOfOglasi));
            setPhdData(array.filter(elem => elem.oglasnaPloca.id === 22).splice(0, numberOfOglasi));
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            <MainPageGodina key={1} godina={"Prva godina"} data={firstYearData} navigation={props.navigation}/>
            <MainPageGodina key={2} godina={"Druga godina"} data={secondYearData} navigation={props.navigation}/>
            <MainPageGodina key={3} godina={"Treća godina"} data={thirdYearData} navigation={props.navigation}/>
            <MainPageGodina key={4} godina={"Četvrta godina"} data={fourthYearData} navigation={props.navigation}/>
            <MainPageGodina key={4} godina={"Drugi ciklus"} data={masterData} navigation={props.navigation}/>
            <MainPageGodina key={4} godina={"Treci ciklus"} data={phdData} navigation={props.navigation}/>
        </ScrollView>
    )
}
