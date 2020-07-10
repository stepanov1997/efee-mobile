import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, StatusBar} from 'react-native';
import {parseDate} from '../../util'

export const MainPageGodina = (props) => {
    return (<View>
            <Text style={style.naslov}>{`${props.godina}`}</Text>
            <View style={style.list}>
                {
                    props.data.map(elem =>
                        (
                            <TouchableHighlight key={elem.id} underlayColor={"#2196f3"}
                                                onPress={() => props.navigation.navigate('OglasDetail', {oglas:elem})}>
                                <View style={style.oglas} >
                                    <Text style={style.text}>{elem.naslov}</Text>
                                    <Text style={style.text}>{parseDate(elem.vrijemeKreiranja)}</Text>
                                    {
                                        (
                                            style.uvod !== "" ?
                                                (<Text style={style.uvod}>{elem.uvod}</Text>) :
                                                ""
                                        )
                                    }
                                </View>
                            </TouchableHighlight>
                        )
                    )
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    godina: {
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    naslov: {
        color: "whitesmoke",
        backgroundColor: "#2196f3",
        textAlign: 'center',
        padding: 3
    },
    list: {
        margin: 12
    },
    oglas: {
        borderColor: "#2196f3",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uvod: {
        fontStyle: "italic",
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
