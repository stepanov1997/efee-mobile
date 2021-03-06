import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { MainPageGodina } from "../components/main-page-godina/main-page-godina";

export default function PrvaGodina(props) {
    const [firstYearData, setFirstYearData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/1");
            let array = await response.json();
            setFirstYearData(array);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            <MainPageGodina key={1} godina={"Prva godina"} data={firstYearData} navigation={props.navigation} />
        </ScrollView>
    )
}
