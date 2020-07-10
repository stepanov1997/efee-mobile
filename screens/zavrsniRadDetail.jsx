import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {parseDate, promjeniNazivRada} from "../util";

export default function ZavrsniRadDetail(props) {
    const zavrsniRad = props.navigation.getParam('zavrsniRad');
    return (
        <ScrollView>
            <View style={styles.centerOnScreen}>
                <Text style={styles.ciklus}>{zavrsniRad.ciklus+". ciklus"}</Text>
                <Text style={styles.naslov}>{zavrsniRad.tema}</Text>
                <Text style={styles.tipRada}>{"Status završnog rada: " + promjeniNazivRada(zavrsniRad.trenutniStatus.statusZavrsnogRada.naziv)}</Text>
                <Text style={styles.vrijeme}>{parseDate(zavrsniRad.trenutniStatus.vrijemeKreiranja)}</Text>
                <View style={{
                    height: 1,
                    backgroundColor: 'rgba(255, 255, 255 ,0.3)',
                    alignSelf: 'stretch'
                }}/>
                <Text style={styles.sadrzaj}>{zavrsniRad.obrazlozenje}</Text>
                <Text style={styles.potpis}>{zavrsniRad.studentIme == null ? "" : ("Ime studenta: " + zavrsniRad.studentIme)}</Text>
                <Text style={styles.potpis}>{"Ime mentora: " + zavrsniRad.mentor.ime}</Text>
                <Text style={styles.potpis}>{"Predsjednik komisije: " + zavrsniRad.predsjednikKomisije.ime}</Text>
                <Text style={styles.potpis}>{"Član komisije: " + zavrsniRad.clanKomisije.ime}</Text>

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
