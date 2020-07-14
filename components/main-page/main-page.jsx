import React, {useState, useEffect, useReducer} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MainPageGodina } from '../main-page-godina/main-page-godina';
import { ScrollView } from 'react-native-gesture-handler';

export const MainPage = (props) => {
    const [firstYearData, setFirstYearData] = useState([]);
    const [secondYearData, setSecondYearData] = useState([]);
    const [thirdYearData, setThirdYearData] = useState([]);
    const [fourthYearData, setFourthYearData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [phdData, setPhdData] = useState([]);
    const [postGraduateData, setPostGraduateData] = useState([]);
    const [graduationTheses, setGraduationTheses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const numberOfOglasi = 3;
            let response = await fetch("https://efee.etf.unibl.org:8443/api/public/oglasne-ploce/all");
            let array = await response.json();
            setFirstYearData(array.filter(elem => elem.oglasnaPloca.id === 1).splice(0, numberOfOglasi));
            setSecondYearData(array.filter(elem => elem.oglasnaPloca.id === 2).splice(0, numberOfOglasi));
            setThirdYearData(array.filter(elem => elem.oglasnaPloca.id === 3).splice(0, numberOfOglasi));
            setFourthYearData(array.filter(elem => elem.oglasnaPloca.id === 4).splice(0, numberOfOglasi));
            setMasterData(array.filter(elem => elem.oglasnaPloca.id === 20).splice(0, numberOfOglasi));
            setPhdData(array.filter(elem => elem.oglasnaPloca.id === 30).splice(0, numberOfOglasi));
            setPostGraduateData(array.filter(elem => elem.oglasnaPloca.id === 102).splice(0, numberOfOglasi));
            setGraduationTheses(array.filter(elem => elem.oglasnaPloca.id === 21).splice(0, numberOfOglasi));
        }
        fetchData();
    }, [])
    const screenHeight = Dimensions.get('window').height
    return (
        <ScrollView style={{ height: "auto", maxHeight: screenHeight}} style={styles.scrollContainer}>
            {firstYearData.length==0?null:(<Text style={styles.godinaHeading}>Prva godina</Text>)}
            <MainPageGodina key={1} godina={"Prva godina"} data={firstYearData} navigation={props.navigation}/>
            {secondYearData.length==0?null:(<Text style={styles.godinaHeading}>Druga godina</Text>)}
            <MainPageGodina key={2} godina={"Druga godina"} data={secondYearData} navigation={props.navigation}/>
            {thirdYearData.length==0?null:(<Text style={styles.godinaHeading}>Treća godina</Text>)}
            <MainPageGodina key={3} godina={"Treća godina"} data={thirdYearData} navigation={props.navigation}/>
            {fourthYearData.length==0?null:(<Text style={styles.godinaHeading}>Četvrta godina</Text>)}
            <MainPageGodina key={4} godina={"Četvrta godina"} data={fourthYearData} navigation={props.navigation}/>
            {masterData.length==0?null:(<Text style={styles.godinaHeading}>Drugi ciklus</Text>)}
            <MainPageGodina key={5} godina={"Drugi ciklus"} data={masterData} navigation={props.navigation}/>
            {phdData.length==0?null:(<Text style={styles.godinaHeading}>Treći ciklus</Text>)}
            <MainPageGodina key={6} godina={"Treći ciklus"} data={phdData} navigation={props.navigation}/>
            {postGraduateData.length==0?null:(<Text style={styles.godinaHeading}>Postdiplomski studij</Text>)}
            <MainPageGodina key={7} godina={"Postdiplomski studij"} data={postGraduateData} navigation={props.navigation}/>
            {graduationTheses.length==0?null:(<Text style={styles.godinaHeading}>Odbrane završnih radova</Text>)}
            <MainPageGodina key={8} godina={"Odbrane završnih radova"} data={graduationTheses} navigation={props.navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
    },
    godinaHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 15,
        marginTop: 25,
    },
})
