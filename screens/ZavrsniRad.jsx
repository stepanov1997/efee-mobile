import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { parseDate, promjeniNazivRada } from "../util";

export const ZavrsniRad = (props) => {

    return (
        <View style={style.oglasContainer}>
            {/*<Text style={style.naslov}>{`Završni radovi`}</Text>*/}
            <View style={style.list}>
                {
                    props.data.map(elem => {
                        //console.log(elem);
                        return (
                            <TouchableHighlight key={elem.id} underlayColor={"#aaa"} style={style.radContainer}
                                onPress={() => props.navigation.navigate('ZavrsniRadDetail', { zavrsniRad: elem })}>
                                <View style={style.oglas}>
                                    <Text style={style.naslovRada}>{elem.tema}</Text>
                                    <Text style={style.status}>
                                        {"Status rada: " + promjeniNazivRada(elem.trenutniStatus.statusZavrsnogRada.naziv)}
                                    </Text>
                                    {/*<Text style={style.vrijeme}>
                                        {"Mentor: " + elem.mentor.ime
                                        + "\nPredsjednik komisije: " + elem.predsjednikKomisije.ime
                                        + "\nČlan komisije: " + elem.clanKomisije.ime
                                        + (elem.studentIme?"\nStudent: " + elem.studentIme : null)}
                                    </Text>
                        */}
                                </View>
                            </TouchableHighlight>
                        )
                    }
                    )
                }
            </View>
        </View>);
}

const style = StyleSheet.create({
    oglasContainer: {
        paddingVertical: 0,
    },
    radContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    naslov: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    vrijeme: {
        fontSize: 16,
        marginVertical: 5,
        color: '#777',
    },
    status: {
        fontSize: 16,
        marginVertical: 5,
        color: 'black',
    },
    naslovRada: {
        fontSize: 16,
        fontWeight: 'bold',
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
