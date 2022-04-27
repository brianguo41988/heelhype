import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, Picker} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ClubDetail from '../../components/ClubDetail';
import ClubCard from '../../components/ClubCard';

function OrganizationScreen({navigation})
{
    const orgs = [
        {key: '0', title: "A Novel Idea", contact:"lauren48@live.unc.edu laureliz@email.unc.edu", other: "704-677-8768", location:"Greenlaw 423", tag: ["Academic"], desc: "The purpose of A Novel Idea is to encourage reading for fun in order to instill a lifelong love of reading across the disciplines, as well as in the community. This club will give UNC students the chance to foster . . . ",
         fullDes:"The purpose of A Novel Idea is to encourage reading for fun in order to instill a lifelong love of reading across the disciplines, as well as in the community. This club will give UNC students the chance to foster this passion for reading in children by giving back to the community through volunteer organizations such as Book Harvest. Here, club members will have the unmatched opportunity to donate books, hosts book drives, sort books, and more."},
        {key: '1', title: "Academic Advising", contact:"advising@unc.edu", other: "919 966-5116", location:"214 East Cameron Avenue", tag: ["Academic", "Others"], desc: "Our mission is to create a supportive environment in which we partner with undergraduates as they explore personal goals, develop educational plans, and thrive at Carolina. ", 
         fullDes:"Our mission is to create a supportive environment in which we partner with undergraduates as they explore personal goals, develop educational plans, and thrive at Carolina."},
        {key: '2', title: "Academic Team at UNC-CH", contact:"vincent.duyuan@gmail.com", other: "N/A", location:"N/A", tag: ["Academic"], desc: "A buzzer-based competition that tests knowledge of a variety of different academic subjects in a competitive, team-based enviroment. Think Jeopardy. But academic, and with teams. And rivalries . . .",
         fullDes:"A buzzer-based competition that tests knowledge of a variety of different academic subjects in a competitive, team-based enviroment. Think Jeopardy. But academic, and with teams. And rivalries. And villians."},
        {key: '3', title: "Ackland Art Museum", contact:"ackland@email.unc.edu", other: "919-966-5736", location:"101 South Columbia Street", tag: ["Academic"], tag: ["Arts"], desc: "The Ackland Art Museum, located on S. Columbia Street near Franklin St., features a permanent collection of over 19,000 works of art. Rotating special exhibitions feature a wide range of art . . .",
         fullDes:"The Ackland Art Museum, located on S. Columbia Street near Franklin St., features a permanent collection of over 19,000 works of art. Rotating special exhibitions feature a wide range of art: from sound and video installations to early modern prints and photographs, from 19th century French paintings to contemporary Japanese ceramics. Ackland Upstairs is the Museum’s second floor gallery where they display art selected by UNC-Chapel Hill faculty members to complement the courses they teach. It’s likely you will have a class at the Ackland during your time at Carolina! The Ackland also offers a vibrant year-round schedule of free and low-cost public programs featuring live music, ﬁlms, hands-on art making classes, gallery tours, and evening and weekend activities. Their ART & community space is food & beverage friendly and makes a great study spot. The Ackland offers a variety of opportunities for students to engage with Museum, including the Ackland Student Guide program and internships. In addition, student memberships to the Museum are free for UNC undergraduate and graduate students and offer benefits including 10% off at the Museum Store. To stay connected, follow the Ackland on social media and sign up for their e-news!"},
        {key: '4', title: "Blue Lightning Stomp & Shake", contact:"lasharya@live.unc.edu", other: "704-390-3508", location:"CHAPEL HILL, NC 27514-2038", tag: ["Arts", "Sports/Active"], desc: "Blue Lightning Stomp & Shake was established to provide students at UNC-Chapel Hill with the unique opportunity to participate in school spirit building and cheerleading without the . . .",
         fullDes:"Blue Lightning Stomp & Shake was established to provide students at UNC-Chapel Hill with the unique opportunity to participate in school spirit building and cheerleading without the traditional tumble and stunt requirements necessary to participate on the Varsity and Intramural Cheerleading teams. This organization will give students an avenue to participate in a different style of cheerleading, formally known as Stomp ‘n’ Shake. This organization will also provide an outlet for students to display their unique talents while encouraging others to increase their school spirit. Finally, the ultimate goal of Blue Lighting Stomp & Shake is to educate our campus and the surrounding communities about Stomp ‘n’ Shake style cheerleading through our cheer performances, community service, and local outreach."},
        {key: '5', title: "Carolina Beach Volleyball Club", contact:"uncbvb@gmail.com", other: "919-843-4768", location:"101 Student Recreation Center", tag: ["Sports/Active"], desc: "UNC Club Beach Volleyball is a competitive Men's and Women's club that consists of 20-24 members. We play doubles (2v2) beach volleyball and compete in a tournament series held by NCSVA . . . ",
         fullDes:"UNC Club Beach Volleyball is a competitive Men's and Women's club that consists of 20-24 members. We play doubles (2v2) beach volleyball and compete in a tournament series held by NCSVA (National Collegiate Sand Volleyball Association) as well as other Open adult tournaments along the East Coast. Through the NCSVA, we compete in a Club v Club series in the Fall and individuals tournament style in the Spring. We are currently the reigning Men's and Women's Regional Champions! Generally, the club participates in 2-3 tournaments in each semester, in addition to other tournaments throughout the year that are optional to players in the club. While beach volleyball is a relatively new club to UNC, the club is very competitive and requires commitment from all players. Practices and tournaments are mandatory. Practices are three times per week. Our mission is to grow the sport of beach volleyball at UNC and throughout the state/country!  "},
        {key: '6', title: "Carolina Cars", contact:"harrington.shaw@unc.edu", other: "N/A", location:"N/A", tag: ["Sports/Active"], desc: "We are a couple car obsessed students at UNC Chapel Hill who went looking for a place to share our passion for cars and came up empty. Instead of giving up, we decided to create Carolina . . . ",
         fullDes:"We are a couple car obsessed students at UNC Chapel Hill who went looking for a place to share our passion for cars and came up empty. Instead of giving up, we decided to create Carolina Cars to give automotive enthusiasts a home on campus. We know that a lot of students drive amazing cars, and we want to bring a bit of the culture to campus. Carolina Cars serves as a home away from home for us, and we hope it will for you too. In order to be a member, you can join our vast and growing group chat, where we discuss all of our events, meetings, news, progress on builds, etc. "},
        {key: '7', title: "United Solar Initiative", contact:"info@unitedsolarinitiative.org", other: "N/A", location:"Chapel Hill, NC", tag: ["Others"], desc: "United Solar Initiative (USI) is a 501c3 non-profit organization, based in Chapel Hill, NC, working to facilitate solar energy solutions to address energy and water poverty in underdeveloped communities . . .",
         fullDes:"United Solar Initiative (USI) is a 501c3 non-profit organization, based in Chapel Hill, NC, working to facilitate solar energy solutions to address energy and water poverty in underdeveloped communities around the world.  USI works internationally with World Vision to mechanize clean water pumps throughout countries in Africa in our joint effort to address the global issue of water poverty. USI also works domestically to facilitate solar installations on schools and community centers local to contributing for-profit and non-profit companies in the solar industry."}
         
    ];
    const filter = ["None", "Academic", "Arts", "Sports/Active", "Others"];
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
        console.log(tempOrg);
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
                data={orgData}
                renderItem={({ item }) => {
                    return <ClubDetail title = {item.title} desc = {item.desc} morePressed={() => morePressed(item.title)}/>
                }
                }/>
            <FlatList 
                data={orgCardData}
                renderItem={({ item }) => {
                    return <ClubCard title = {item.title} contact = {item.contact} other = {item.other} location = {item.location} fullDes = {item.fullDes} backPressed={() => backPressed()} calendarPressed={() => calendarPressed()}/>
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