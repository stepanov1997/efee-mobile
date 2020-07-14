import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, StatusBar } from 'react-native';
import { parseDate } from '../../util'

export const MainPageGodina = (props) => {
    return (
        <>
            {props.data.length == 0 ? (
                null
            ) : (
                    <View style={style.godinaContainer}>
                        <Text style={style.godinaHeading}>{`${props.godina}`}</Text>
                        <View style={style.list}>
                            {
                                props.data.map(elem =>
                                    (
                                        <TouchableHighlight key={elem.id} underlayColor={"#aaa"}
                                            onPress={() => props.navigation.navigate('OglasDetail', { oglas: elem })}>
                                            <View style={style.oglasContainer} >
                                                <Text style={style.oglasHeading}>
                                                    {elem.naslov}
                                                    {
                                                        elem.uvod == null || elem.uvod.trim() === "" ? (
                                                            null
                                                        ) : (
                                                                <Text style={style.uvod}> - {elem.uvod}</Text>
                                                            )
                                                    }
                                                </Text>
                                                <Text style={style.timestamp}>{parseDate(elem.vrijemeKreiranja)}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                )
                            }
                        </View>
                    </View>
                )
            }
        </>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    godinaContainer: {
        marginVertical: 20,
    },
    godinaHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    list: {
    },
    oglasContainer: {
        marginVertical: 6,
        paddingHorizontal: 15,
    },
    oglasHeading: {
        fontSize: 16,
    },
    uvod: {
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    timestamp: {
        marginTop: 3,
        color: '#777',
    },
})
