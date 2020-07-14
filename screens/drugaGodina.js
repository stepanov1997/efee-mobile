import React, {useEffect, useState} from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {MainPageGodina} from "../components/main-page-godina/main-page-godina";

export default function DrugaGodina(props) {

    const [secondYearData, setSecondYearData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/2");
            let array = await response.json();
            setSecondYearData(array);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            {
                secondYearData.length == 0? (
                    <View style={styles.noDataContainer}>
                        <Text>Nema aktivnih oglasa.</Text>
                    </View>
                ) : (
                    <MainPageGodina key={2} godina={"Druga godina"} data={secondYearData} navigation={props.navigation}/>
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