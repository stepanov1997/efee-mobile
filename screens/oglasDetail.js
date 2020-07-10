import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import {parseDate} from "../util";

export default function OglasDetail(props) {
    const oglas = props.navigation.getParam('oglas');
    console.log("Potpis: ." + oglas.potpis + ".")
    return (
        <ScrollView>
            <View style={styles.centerOnScreen}>
                <Text style={styles.naslov}>{oglas.naslov}</Text>
                <Text style={styles.vrijeme}>{parseDate(oglas.vrijemeKreiranja)}</Text>
                <View style={{
                    height: 1,
                    backgroundColor: 'rgba(255, 255, 255 ,0.3)',
                    alignSelf: 'stretch'
                }}/>
                <Text style={styles.uvod}>{oglas.uvod}</Text>
                <Text style={styles.sadrzaj}>{oglas.sadrzaj}</Text>
                {
                    (oglas.oglasPrilozi.length === 0 ? <Text/> : (
                        <TouchableOpacity>
                            <View>
                                <Text style={{color: 'blue'}}
                                      onPress={() => Linking.openURL(`https://efee.etf.unibl.org:8443/api/public/oglasi/${oglas.oglasPrilozi[0].id}/download`)}>
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
    centerOnScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    naslov: {
        fontSize: 26,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    vrijeme: {
        fontSize: 18,
        margin: 10
    },
    uvod: {
        fontSize: 20,
        margin: 20
    },
    sadrzaj: {
        fontSize: 20,
        padding: 30
    },
    potpis: {
        fontSize: 20,
        padding: 30
    }
});
