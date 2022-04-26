import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, Picker} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ClubDetail from '../../components/ClubDetail';
import ClubCard from '../../components/ClubCard';

function OrganizationScreen({navigation})
{
    const orgs = [
        {key: '0', title: "A Novel Idea", tag: ["Academic", "Arts"], desc: "The purpose of A Novel Idea is to encourage reading for fun in order to instill a lifelong love of reading across the disciplines, as well as in the community. This club will give UNC students the chance to foster . . . ",
         fullDes:"The purpose of A Novel Idea is to encourage reading for fun in order to instill a lifelong love of reading across the disciplines, as well as in the community. This club will give UNC students the chance to foster this passion for reading in children by giving back to the community through volunteer organizations such as Book Harvest. Here, club members will have the unmatched opportunity to donate books, hosts book drives, sort books, and more."},
        {key: '1', title: "Academic Advising", tag: ["Academic"], desc: "Our mission is to create a supportive environment in which we partner with undergraduates as they explore personal goals, develop educational plans, and thrive at Carolina. ", 
         fullDes:"Our mission is to create a supportive environment in which we partner with undergraduates as they explore personal goals, develop educational plans, and thrive at Carolina."},
        {key: '2', title: "Academic Team at UNC-CH", tag: ["Academic"], desc: "A buzzer-based competition that tests knowledge of a variety of different academic subjects in a competitive, team-based enviroment. Think Jeopardy. But academic, and with teams. And rivalries . . .",
         fullDes:"A buzzer-based competition that tests knowledge of a variety of different academic subjects in a competitive, team-based enviroment. Think Jeopardy. But academic, and with teams. And rivalries. And villians."},
        {key: '3', title: "Ackland Art Museum", tag: ["Arts"], desc: "The Ackland Art Museum, located on S. Columbia Street near Franklin St., features a permanent collection of over 19,000 works of art. Rotating special exhibitions feature a wide range of art . . .",
         fullDes:"The Ackland Art Museum, located on S. Columbia Street near Franklin St., features a permanent collection of over 19,000 works of art. Rotating special exhibitions feature a wide range of art: from sound and video installations to early modern prints and photographs, from 19th century French paintings to contemporary Japanese ceramics. Ackland Upstairs is the Museum’s second floor gallery where they display art selected by UNC-Chapel Hill faculty members to complement the courses they teach. It’s likely you will have a class at the Ackland during your time at Carolina! The Ackland also offers a vibrant year-round schedule of free and low-cost public programs featuring live music, ﬁlms, hands-on art making classes, gallery tours, and evening and weekend activities. Their ART & community space is food & beverage friendly and makes a great study spot. The Ackland offers a variety of opportunities for students to engage with Museum, including the Ackland Student Guide program and internships. In addition, student memberships to the Museum are free for UNC undergraduate and graduate students and offer benefits including 10% off at the Museum Store. To stay connected, follow the Ackland on social media and sign up for their e-news!"}
    ];
    const filter = ["None", "Academic", "Arts", "Others", "Sports"];
    const orgCard = [];

    const [orgCardData, setOrgCardData] = useState(orgCard);
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

    const backPressed = () => {
        setOrgData(orgs);
        setOrgCardData([]);
    }

    const calendarPressed = () => {
        alert("Request Sent!");
    }

    const morePressed = (title) => {
        const tempOrg = [];

        for (var i = 0; i < orgs.length; i++){
            if (orgs[i].title == title) {
                tempOrg.push(orgs[i]);
            }
        }
        setOrgData([]);
        setOrgCardData(tempOrg);
    }

    const selectedFilter = (selectedItem) => {
        console.log(selectedItem);
        const tempOrg = [];
        if (selectedItem != "None"){
            for (var i = 0; i < orgs.length; i++){
                for (var j = 0; j < orgs[i].tag.length; j++){
                    if (orgs[i].tag[j] == selectedItem){
                        console.log(orgs[i].title);
                        tempOrg.push(orgs[i]);
                    }
                }
            }
            setOrgData(tempOrg);
        } else {
            setOrgData(orgs);
        }

    }
    return(
        <View style={styles.app}>

            <Text
                onPress={() => navigation.navigate('Home')}
                style={txt_style.app}>Organization Screen
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
                data={orgCardData}
                renderItem={({ item }) => {
                    return <ClubCard title = {item.title} fullDes = {item.fullDes} backPressed={() => backPressed()} calendarPressed={() => calendarPressed()}/>
                }
                }/>

            <FlatList 
                data={orgData}
                renderItem={({ item }) => {
                    return <ClubDetail title = {item.title} desc = {item.desc} morePressed={() => morePressed(item.title)}/>
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

export default OrganizationScreen;