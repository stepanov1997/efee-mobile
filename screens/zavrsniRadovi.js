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

    const resetSearchHandler = () => {
        setSearchTerm(null);
    }

    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            <Modal visible={modalVisible} animationType='slide'>
                <ZavrsniRadoviSearchForm searchOnPress={searchOnPressHandler} setModalVisible={setModalVisible} />
            </Modal>

            <View style={styles.searchContainer} >
                <TouchableOpacity style={styles.searchButton} onPress={() => setModalVisible(!modalVisible)} >
                    <Text style={{ flex: 1, textAlign: 'center' }}>
                        {searchTerm == null || searchTerm == "" ? ("Pretraži radove") : searchTerm}
                    </Text>
                    {searchTerm == null || searchTerm == "" ? (
                        null
                    ) : (
                            /*<Text style={{fontWeight: 'bold', marginHorizontal: 10}}>Poništi</Text>*/
                            <TouchableOpacity onPress={resetSearchHandler} style={{ width: 50 }}>
                                <MaterialIcons
                                    name='close'
                                    size={24}
                                    onPress={() => setModalVisible(false)}
                                    style={styles.resetSearchButton}
                                />
                            </TouchableOpacity>
                        )}
                </TouchableOpacity>
            </View>
            {
                zavrsniRadovi.length == 0 ? (
                    <View style={styles.noDataContainer}>
                        <Text>Nema aktivnih radova.</Text>
                    </View>
                ) : (
                        <>
                            {/*<MaterialIcons name='search' size={28} onPress={() => setModalVisible(!modalVisible)} style={styles.icon} />*/}

                            <ZavrsniRad data={zavrsniRadovi} navigation={props.navigation} />
                            <View style={styles.paginationContainer}>
                                {currentPage == 1 ? (
                                    <MaterialIcons name='navigate-before' size={40} style={styles.disabledIcon} />
                                ) : (
                                        <MaterialIcons name='navigate-before' size={40} onPress={() => setCurrentPage(currentPage - 1)} style={styles.icon} />
                                    )}
                                <Text style={styles.pageCounter}>strana {currentPage} od {Math.ceil(total / pageLimit)}</Text>
                                {currentPage == Math.ceil(total / pageLimit) ? (
                                    <MaterialIcons name='navigate-next' size={40} style={styles.disabledIcon} />
                                ) : (
                                        <MaterialIcons name='navigate-next' size={40} onPress={() => setCurrentPage(currentPage + 1)} style={styles.icon} />
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
        paddingVertical: 20,
        textAlign: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    disabledIcon: {
        marginHorizontal: 10,
        color: '#ddd',
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
    },
    searchContainer: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 15,
    },
    searchButton: {
        backgroundColor: '#ddd',
        borderRadius: 5,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    resetSearchButton: {
        marginHorizontal: 5,
        marginLeft: 'auto',
    }
})