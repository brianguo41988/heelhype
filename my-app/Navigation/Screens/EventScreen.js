import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, Picker} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import EventDetail from '../../components/EventDetail';

function EventScreen({navigation})
{
    const orgs = [
        {key: '0', title: "General Meeting", time:"7PM - 8PM Virtual", RSVPInfo: "None", RSVP: false, tValue: 3,  tag: ["Academic", "Arts"], desc: "Public health leadership and student association" },
        {key: '1', title: "Global Leadership Workshop", time:"12PM - 1PM Beard 200 & Karpen 102", RSVPInfo: "Required", RSVP: true, tValue: 0, tag: ["Academic"], desc: "Phi Lambda Sigma Global Engagement Organization" },
        {key: '2', title: "Hha! Interest Meet & Greet", time:"6:30PM - 8:00PM 1119 SASB North (Upendo)", RSVPInfo: "None",  RSVP: false, tValue: 2, tag: ["Academic"], desc: "Public health leadership and student association" },
        {key: '3', title: "Sit & Spill", time:"3:00PM - 4:30PM Manning 14", RSVPInfo: "Required", RSVP: true, tag: ["Arts"], tValue: 1, desc: "Hha!" }
    ];

    const filter = ["None", "Alphabetical", "Chronological", "RSVP", "Non-RSVP"];

    const [orgData, setOrgData] = useState(orgs);
    const [searchData, setsearchData] = useState('');

    const searchFilter = (text) => {
        setOrgData(orgs);
        setsearchData(text);
        const tempOrg = [];

        for (var i = 0; i < orgs.length; i++){
            if (orgs[i].title.toLowerCase().includes(text.toLowerCase())){
                tempOrg.push(orgs[i]);
            }
        }

        setOrgData(tempOrg);

        if (text == ''){
            setOrgData(orgs);
        }
    }

    const selectedFilter = (selectedItem) => {
        console.log(selectedItem);
        const tempOrg = [];
        if (selectedItem == "Alphabetical" || selectedItem == "None") {
            for (var i = 0; i < orgs.length; i++){
                tempOrg.push(orgs[i]);
            }
        } else if (selectedItem == "Chronological"){
            for (var i = 0; i < orgs.length; i++){
                for (var j = 0; j < orgs.length; j ++){
                    if (orgs[j].tValue == i){
                        tempOrg.push(orgs[j]);
                    }
                }
            }
        } else if (selectedItem == "RSVP") {
            for (var i = 0; i < orgs.length; i++){
                if (orgs[i].RSVP){
                    tempOrg.push(orgs[i]);
                }
            }
        } else if (selectedItem == "Non-RSVP") {
            for (var i = 0; i < orgs.length; i++){
                if (!orgs[i].RSVP){
                    tempOrg.push(orgs[i]);
                }
            }
        }

        setOrgData(tempOrg);

    }
    return(
        <View style={styles.app}>

            <Text
                onPress={() => navigation.navigate('Home')}
                style={txt_style.app}>Events Screen
            </Text>
            <TextInput style={styles.textInputStyle} value={searchData} placeholder="Search" onChangeText={(text) => searchFilter(text)}/>
            <SelectDropdown
                data={filter}
                onSelect={(selectedItem, index) => {
                    selectedFilter(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            <FlatList 
                data={orgData}
                renderItem={({ item }) => {
                    return <EventDetail title = {item.title} desc = {item.desc} time = {item.time} RSVPInfo = {item.RSVPInfo}/>
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
        height: 50,
        width: 400,
        borderWidth: 1,
        paddingLeft: 5,
        margin: 5,
        borderColor: '#ADDBE6',
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

export default EventScreen;