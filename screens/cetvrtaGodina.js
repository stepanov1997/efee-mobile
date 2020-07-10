import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {MainPageGodina} from "../components/main-page-godina/main-page-godina";

export default function CetvrtaGodina(props) {
    const [fourthYearData, setFourthYearData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/4");
            let array = await response.json();
            setFourthYearData(array);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            <MainPageGodina key={4} godina={"Četvrta godina"} data={fourthYearData} navigation={props.navigation}/>
        </ScrollView>
    )
}
