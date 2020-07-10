import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions,ScrollView} from 'react-native';
import {MainPageGodina} from "../components/main-page-godina/main-page-godina";
import ZavrsniRadDetail from "./zavrsniRadDetail";
import {ZavrsniRad} from "./ZavrsniRad";

export default function ZavrsniRadovi(props) {
    const [zavrsniRadovi, setZavrsniRadovi] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const filterQuery = {
                where: [],
                    orderBy: [{operator: "desc", field: "trenutniStatus.vrijemeKreiranja"}],
                fetchSize: pageLimit,
                fetchOffset: ((currentPage - 1) * pageLimit)
            }
            const encoded = encodeURI(encodeURI(JSON.stringify(filterQuery)));
            let response = await fetch(`https://efee.etf.unibl.org:8443/api/public/zavrsni-radovi?filter=${encoded}`);
            let array = await response.json();
            setZavrsniRadovi(array.content);
            setTotal(array.total);
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight }}>
            <ZavrsniRad data={zavrsniRadovi} navigation={props.navigation}/>
        </ScrollView>
    )
}
