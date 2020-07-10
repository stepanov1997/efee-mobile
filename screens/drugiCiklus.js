import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {MainPageGodina} from "../components/main-page-godina/main-page-godina";
import {set} from "react-native-reanimated";

export default function DrugiCiklus(props) {
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/20");
            let array = await response.json();
            setMasterData(array);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            <MainPageGodina key={20} godina={"Drugi ciklus"} data={masterData} navigation={props.navigation}/>
        </ScrollView>
    )
}
