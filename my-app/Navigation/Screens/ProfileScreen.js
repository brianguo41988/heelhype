import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Button} from 'react-native';
import {ExpandableListView} from 'react-native-expandable-listview';
import ProfileData from '../../Data/ProfileData';

//Finds the window height and width for styling
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function handleItemClick({index}) {
    console.log(index);
};

function handleInnerItemClick({innerIndex, item, itemIndex}){
    console.log(innerIndex);
}

function ProfileScreen({navigation})
{

    return(
        <View style={styles.app}>
            <ScrollView>
                <Text style={styles.title}>Profile</Text>
                <View style={styles.imgView}>
                <Image style={styles.img} source={{uri: "https://cpb-us-w2.wpmucdn.com/blogs.cofc.edu/dist/1/564/files/2019/02/Headshot-Helfgott-_-1y49l0x-2ix0c4g.jpg"}}/>
                </View>
                <Text style={styles.nme}>Stacey K.</Text>
                <Text style={styles.yr}>2022</Text>
                <Text style={styles.mj}>Computer Science</Text>

                <Button style={styles.btn} title="Edit Profile" onPress={()=> {alert("You have edited your profile")}}/>

                <ExpandableListView 
                    data={ProfileData}
                    style={styles.list}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "black",
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular',
        paddingLeft: windowWidth/2 - 60,
        paddingTop: 20,
    },
    app: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: 'white',
        fontFamily: 'AppleSDGothicNeo-Regular',
        width: windowWidth,
    },
    nme: {
        padding: 5,
        paddingLeft: 140,
        fontSize: 18,
    },
    yr: {
        padding: 5,
        paddingLeft: 155,
        fontSize: 18,
    },
    mj: {
        padding: 5,
        paddingLeft: 100,
        fontSize: 18,
    },
    img:{
        width: 150,
        height: 180,
        padding: 50,
        borderRadius: 15,
    },
    btn:{
        padding: 10,
    },
    list:{
        width: windowWidth,
    },
    imgView: {
        paddingLeft: windowWidth/2 - 95,
        paddingTop: 10,
        paddingBottom: 10,
    }
});


export default ProfileScreen;