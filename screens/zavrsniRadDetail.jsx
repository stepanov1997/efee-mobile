import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { parseDate, promjeniNazivRada } from "../util";

export default function ZavrsniRadDetail(props) {
    const zavrsniRad = props.navigation.getParam('zavrsniRad');
    return (
        <ScrollView>
            <View style={styles.radContainer}>
                <Text style={styles.naslov}>{zavrsniRad.tema}</Text>
                <Text style={styles.vrijeme}>
                    {zavrsniRad.ciklus + ". ciklus"
                        + "\nStatus završnog rada: " + promjeniNazivRada(zavrsniRad.trenutniStatus.statusZavrsnogRada.naziv)}
                </Text>
                <Text style={styles.sadrzaj}>{zavrsniRad.obrazlozenje}</Text>
                <Text style={styles.komisija}>
                    {"Mentor: " + zavrsniRad.mentor.ime
                        + "\nPredsjednik komisije: " + zavrsniRad.predsjednikKomisije.ime
                        + "\nČlan komisije: " + zavrsniRad.clanKomisije.ime
                        + (zavrsniRad.studentIme ? "\nStudent: " + zavrsniRad.studentIme : null)}
                </Text>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    radContainer: {
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
    komisija: {
        fontSize: 16,
        marginVertical: 15,
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
