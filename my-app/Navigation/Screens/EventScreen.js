import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, Picker} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import EventDetail from '../../components/EventDetail';
import EventCard from '../../components/EventCard';

function EventScreen({navigation})
{
    const orgs = [
        {key: '0', title: "Group Fitness Classes", location:"Student Recreation Center", time:"January 18 2022 - April 27 2022 12:00 PM", RSVPInfo: "https://www.groupexpro.com/schedule/438/?view=calendar", RSVP: true, tValue: 0, org: "UNC-CH Campus Recreation", des: "Join the fun with UNC Group Fitness! All levels and abilities are welcome in our fitness classes. Each class is led by a certified Group Fitness Instructor who has experience offering modifications to help you work at an intensity appropriate for your fitness abilities and goals. " },
        {key: '1', title: "Candyland LDOC Carnival", location:"The Pit", time:"April 27 2022 11:00 AM - Wednesday, April 27 2022 3:00 PM", RSVPInfo: "None", RSVP: false, tValue: 1, org: "Carolina Union Activities Board", des: "Come celebrate LDOC with CUAB on April 27th from 11am-3pm in the Pit and Gift Plaza! Students can come enjoy free food, inflatable games, street-sign making, tie-dyeing, prizes, and much more!" },
        {key: '2', title: "LDOC S.N.A.C.K.S. Sleep Kits", location:"CUAB Front Desk (Down Hall from CUAB Office)", time:"Wednesday, April 27 2022 9:00 AM - Wednesday, April 27 2022 4:00 PM", RSVPInfo: "None",  RSVP: false, tValue: 2, org: "Student Wellness", des: "On LDOC (4/27), CUAB, hha! and Student Wellness are supplying Sleep Kits for pick-up at the CUAB Front Desk! Kits include: eye masks, earplugs, sleepytime tea bag, sanitizer, lavender wipes, stickers, and info on sleep hygiene inside a nifty pencil pouch. There is also a chance to enter a raffle for a JBL speaker if you fill out the survey to let us know your feedback. RSVP to secure yours or stop by the desk to pick one up. Available from 9a-4p, while supplies last. Email studentwellness@unc.edu for more information." },
        {key: '3', title: "Wilson Photo Day", location:"Wilson Special Collections Library", time:"Wednesday, April 27 2022 9:00 AM - Wednesday, April 27 2022 5:00 PM", RSVPInfo: "https://calendar.lib.unc.edu/reserve/spaces/wilson-photo-day", RSVP: true, tValue: 3, org: "University Libraries", des:"Graduating students: sign up for a photo shoot in Wilson Library with your friends before you graduate! Visit Wilson Library and take photos in the Fearrington Reading Room, one of the most iconic and beautiful spaces on campus. Time slots are 30 minutes each and you may bring up to four other people with you. A photographer will be set up with a tripod in one area of the Fearrington Reading Room for posed photos. You are welcome to take your own photos in other areas of the space and are allowed to bring your own photographer. Advance registration is required to hold your spot. Wilson Library is open to the public, but the Fearrington Reading Room will be open only to registered participants on Wilson Photo Day." },
        {key: '4', title: "General Body Meeting (4/27)", location:"Howell Hall 115", time:"Wednesday, April 27 2022 6:00 PM - Wednesday, April 27 2022 7:00 PM", RSVPInfo: "None", RSVP: false, tValue: 4, org: "Carolina Health Samaritan Society", des:"Our LAST in-person GBM will be this Wednesday, April 27th (LDOC!), from 6:00-7:00PM in Howell 115. This will be a short meeting, so please try to make it in-person as there will be food/refreshments for members that have paid dues. In addition, we will be commemorating our senior members at this meeting and will be announcing our new executive board! As always, we will have a Zoom option for members who absolutely cannot attend, so please fill out the form below if this applies to you. Remember, members are expected to attend 4/7 GBMs of the semester to remain active in the club -- and this is the LAST ONE!" },
        {key: '5', title: "Reading Day Donuts", location:"Ackland Art Museum", time:"Thursday, April 28 2022 at 10:00 AM - Thursday, April 28 2022 at 12:00 PM", RSVPInfo: "None", RSVP: false, tValue: 5, org: "Ackland Art Museum", des:"Sign up for your FREE Ackland Student Membership to attend Reading Day Donuts! Ackland Student members are invited to the Ackland Art Museum for a relaxing morning study break on the front terrace with free donuts and coffee! View works by UNC-Chapel Hill’s Class of 2022 Master of Fine Arts in Studio Art candidates: Raj Bunnag, Charlie Dupee, Hugo Ljungbäck, Phuong Duyen Nguyen, and Stella Rosen. Curated by Laura Ritchie ‘10 (BFA), Myth & Memory: Selected Works by the MFA Class of 2022, features a wide range of art from animation to embroidery. We have several spaces in the Museum reserved for all UNC students to study throughout the day including ART& (just left off the lobby) and the courtyard between the Ackland and Hanes Art Center. Sign up for your free Student Membership with the Ackland Art Museum to attend this event and discover new ways to experience art, right here on campus!" }
    ];

    const orgCard = [];

    const filter = ["None", "Chronological", "RSVP", "Non-RSVP"];

    const [orgData, setOrgData] = useState(orgs);
    const [searchData, setsearchData] = useState('');
    const [orgCardData, setOrgCardData] = useState(orgCard);

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

    const backPressed = () => {
        setOrgData(orgs);
        setOrgCardData([]);
    }

    const calendarPressed = () => {
        alert("Added to Calander");
    }

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
        if (selectedItem == "None") {
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
                    return <EventDetail title = {item.title} org = {item.org} location = {item.location} time = {item.time} RSVPInfo = {item.RSVPInfo} morePressed={() => morePressed(item.title)}/>
                }
                }/>

            <FlatList 
                data={orgCardData}
                renderItem={({ item }) => {
                    return <EventCard title = {item.title} location = {item.location} org = {item.org} time = {item.time} des = {item.des} RSVPInfo = {item.RSVPInfo} backPressed={() => backPressed()} calendarPressed={() => calendarPressed()}/>
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