import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
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
            {
                fourthYearData.length == 0? (
                    <View style={styles.noDataContainer}>
                        <Text>Nema aktivnih oglasa.</Text>
                    </View>
                ) : (
                    <View style={{ paddingVertical: 20 }}>
                        <MainPageGodina key={4} godina={"Četvrta godina"} data={fourthYearData} navigation={props.navigation}/>
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