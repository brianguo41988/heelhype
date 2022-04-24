// import * as React from 'react';
// import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
// import ClubDetail from '../../components/ClubDetail';

// function OrganizationScreen({navigation})
// {
//     return(
//         <View style={styles.app}>
//             <Text
//                 onPress={() => navigation.navigate('Home')}
//                 style={txt_style.app}>Organization Screen</Text>
//                 <ScrollView>
//                     <ClubDetail title="A Novel Idea"/>
//                     <ClubDetail title="Academic Advising"/>
//                     <ClubDetail title="Academic Team at UNC-CH"/>
//                     <ClubDetail title="Ackland Art Museum"/>
//                 </ScrollView>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     app: {
//         backgroundColor: 'white',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         textShadowColor: 'white'
//     },
// });

// const txt_style = StyleSheet.create({
//     app: {
//         color: "black",
//         fontSize: 26,
//         fontWeight: 'bold',
//         fontFamily: 'AppleSDGothicNeo-Regular'
//     }
// })

// export default OrganizationScreen;

import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput} from 'react-native';
import ClubDetail from '../../components/ClubDetail';

function OrganizationScreen({navigation})
{
    const [filter, setFilter] = useState([]);
    const [orgData, setOrgData] = useState([]);

    const orgs = [
        {key: '0', title: "A Novel Idea", desc: "The purpose of A Novel Idea is to encourage reading for fun in order to instill a lifelong love of reading across the disciplines, as well as in the community. This club will give UNC students the chance to foster . . . " },
        {key: '1', title: "Academic Advising",  desc: "Our mission is to create a supportive environment in which we partner with undergraduates as they explore personal goals, develop educational plans, and thrive at Carolina. " },
        {key: '2', title: "Academic Team at UNC-CH",  desc: "A buzzer-based competition that tests knowledge of a variety of different academic subjects in a competitive, team-based enviroment. Think Jeopardy. But academic, and with teams. And rivalries . . ." },
        {key: '3', title: "Ackland Art Museum", desc: "The Ackland Art Museum, located on S. Columbia Street near Franklin St., features a permanent collection of over 19,000 works of art. Rotating special exhibitions feature a wide range of art . . ." }
    ];
    return(
        <View style={styles.app}>

            <Text
                onPress={() => navigation.navigate('Home')}
                style={txt_style.app}>Organization Screen
            </Text>
            <TextInput style={styles.textInputStyle} value="Search Org"/>
            <FlatList 
                data={orgs}
                renderItem={({ item }) => {
                    return <ClubDetail title = {item.title} desc = {item.desc}/>
                }
                }/>
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: 'white'
    },
    textInputStyle: {
        height: 30,
        width: 150,
        borderWidth: 1,
        paddingLeft: 5,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'

    }
});

const txt_style = StyleSheet.create({
    app: {
        color: "black",
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular'
    }
})

export default OrganizationScreen;