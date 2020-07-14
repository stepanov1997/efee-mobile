import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Modal, TextInput, Button } from 'react-native';
import { MainPageGodina } from "../components/main-page-godina/main-page-godina";
import ZavrsniRadDetail from "./zavrsniRadDetail";
import { ZavrsniRad } from "./ZavrsniRad";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { ZavrsniRadoviSearchForm } from '../components/zavrsni-radovi-search-form/zavrsni-radovi-search-form';

export default function ZavrsniRadovi(props) {
    const [zavrsniRadovi, setZavrsniRadovi] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [total, setTotal] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState();
    const [searchField, setSearchField] = useState("tema");

    useEffect(() => {
        async function fetchData() {
            let filterQuery = {
                where: [],
                orderBy: [{ operator: "desc", field: "trenutniStatus.vrijemeKreiranja" }],
                fetchSize: pageLimit,
                fetchOffset: ((currentPage - 1) * pageLimit)
            }

            if (searchTerm != null && searchTerm !== "") {
                filterQuery['where'] = [{
                    "operator": searchField === "trenutniStatus.statusZavrsnogRada.naziv" ? "like" : "ilike",
                    "field": searchField,
                    "value": searchTerm
                }];
            }

            const encoded = encodeURI(encodeURI(JSON.stringify(filterQuery)));
            let response = await fetch(`https://efee.etf.unibl.org:8443/api/public/zavrsni-radovi?filter=${encoded}`);
            let array = await response.json();
            setZavrsniRadovi(array.content);
            setTotal(array.total);
        }
        fetchData();
    }, [currentPage, searchTerm, searchField])
    const screenHeight = Dimensions.get('window').height

    const searchOnPressHandler = (term, field) => {
        setModalVisible(false);
        setSearchTerm(term);
        setSearchField(field);
        setCurrentPage(1);
    }
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            {
                zavrsniRadovi.length == 0 ? (
                    <View style={styles.noDataContainer}>
                        <Text>Nema aktivnih radova.</Text>
                    </View>
                ) : (
                        <>
                            <Modal visible={modalVisible} animationType='slide'>
                                <MaterialIcons name='close' size={28} onPress={() => setModalVisible(false)} style={styles.iconCloseModal} />
                                <ZavrsniRadoviSearchForm searchOnPress={searchOnPressHandler} />
                            </Modal>

                            <MaterialIcons name='search' size={28} onPress={() => setModalVisible(!modalVisible)} style={styles.icon} />

                            <ZavrsniRad data={zavrsniRadovi} navigation={props.navigation} />
                            <View style={styles.paginationContainer}>
                                {currentPage == 1 ? (
                                    null
                                ) : (
                                        <MaterialIcons name='navigate-before' size={28} onPress={() => setCurrentPage(currentPage - 1)} style={styles.icon} />
                                    )}
                                <Text style={styles.pageCounter}>strana {currentPage} od {Math.ceil(total / pageLimit)}</Text>
                                {currentPage == Math.ceil(total / pageLimit) ? (
                                    null
                                ) : (
                                        <MaterialIcons name='navigate-next' size={28} onPress={() => setCurrentPage(currentPage + 1)} style={styles.icon} />
                                    )}
                            </View>
                            <Text style={styles.totalCounter}>ukupno {total} završnih radova</Text>
                        </>
                    )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    totalCounter: {
        paddingVertical: 10,
        textAlign: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
    },
    pageCounter: {

    },
    iconCloseModal: {
        margin: 20,
    },
    noDataContainer: {
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
})