import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { MainPageGodina } from "../components/main-page-godina/main-page-godina";

export default function TreciCiklus(props) {
    const [phdData, setPhdData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/30");
            let array = await response.json();
            setPhdData(array);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            {
                phdData.length == 0 ? (
                    <View style={styles.noDataContainer}>
                        <Text>Nema aktivnih oglasa.</Text>
                    </View>
                ) : (
                        <View style={{ paddingVertical: 20 }}>
                            <MainPageGodina key={21} godina={"Treći ciklus"} data={phdData} navigation={props.navigation} />
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
