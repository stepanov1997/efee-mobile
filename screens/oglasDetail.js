import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { parseDate } from "../util";

export default function OglasDetail(props) {
    const oglas = props.navigation.getParam('oglas');
    console.log(oglas)
    return (
        <ScrollView>
            <View style={styles.oglasContainer}>
                <Text style={styles.vrijeme}>{parseDate(oglas.vrijemeKreiranja)}</Text>
                <Text style={styles.naslov}>
                    {oglas.naslov}
                    {
                        oglas.uvod == null || oglas.uvod.trim() === "" ? (
                            null
                        ) : (
                                <Text> - {oglas.uvod}</Text>
                            )
                    }
                </Text>
                <View style={{
                    height: 1,
                    backgroundColor: 'rgba(255, 255, 255 ,0.3)',
                    alignSelf: 'stretch'
                }} />
                <Text style={styles.sadrzaj}>{oglas.sadrzaj.trim()}</Text>
                {
                    (oglas.oglasPrilozi.length === 0 ? <Text /> : (
                        <TouchableOpacity>
                            <View>
                                <Text style={styles.prilog}
                                    onPress={() => Linking.openURL(`https://efee.etf.unibl.org:8443/api/public/oglasi/${oglas.id}/download`)}>
                                    Prilog: {oglas.oglasPrilozi[0].originalniNaziv}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                <Text style={styles.potpis}>{oglas.potpis == null ? "Sa katedre" : oglas.potpis}</Text>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    oglasContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    naslov: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    vrijeme: {
        fontSize: 16,
        marginVertical: 5,
        color: '#777',
    },
    sadrzaj: {
        fontSize: 16,
        paddingTop: 30,
    },
    potpis: {
        fontSize: 16,
    },
    prilog: {
        color: 'blue',
        fontWeight: 'bold',
        marginVertical: 15,
    }
});
