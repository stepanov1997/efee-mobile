import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {MainPageGodina} from "../components/main-page-godina/main-page-godina";

export default function TrecaGodina(props) {
    const [thirdYearData, setThirdYearData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/3");
            let array = await response.json();
            setThirdYearData(array);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            {
                thirdYearData.length == 0? (
                    <View style={styles.noDataContainer}>
                        <Text>Nema aktivnih oglasa.</Text>
                    </View>
                ) : (
                    <View style={{ paddingVertical: 20 }}>
                        <MainPageGodina key={3} godina={"Treća godina"} data={thirdYearData} navigation={props.navigation}/>
                    </View>
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    noDataContainer: {
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
});