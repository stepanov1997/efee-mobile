import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {parseDate, promjeniNazivRada} from "../util";

export const ZavrsniRad = (props) => {

    return (<View>
        <Text style={style.naslov}>{`Završni radovi`}</Text>
        <View style={style.list}>
            {
                props.data.map(elem =>{
                    console.log(elem)
                    return (
                        <TouchableHighlight key={elem.id} underlayColor={"#2196f3"}
                                            onPress={() => props.navigation.navigate('ZavrsniRadDetail', {zavrsniRad: elem})}>
                            <View style={style.oglas}>
                                <Text style={style.text}>{elem.tema}</Text>
                                <Text style={style.text}>{parseDate(elem.trenutniStatus.vrijemeKreiranja)}</Text>
                                <Text style={style.text}>{promjeniNazivRada(elem.trenutniStatus.statusZavrsnogRada.naziv)}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                )
            }
        </View>
    </View>);
}

const style = StyleSheet.create({
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
