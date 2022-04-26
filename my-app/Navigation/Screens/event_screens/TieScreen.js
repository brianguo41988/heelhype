import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native'
import eventData from '../../../Data/eventListData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TieScreen = ({route}) => {
    const e_data = eventData[1];
    return (
        <View style={styles.screen}>            
            <Image
                source={{uri: e_data.img}}
                style={styles.img}
            ></Image> 
            <Text style={styles.title}>{e_data.title}</Text>
            <Text style={styles.txt}>{e_data.org}</Text>
            <Text style={styles.txt}>{e_data.time}</Text>
            <Text style={styles.txt}>{e_data.location}</Text>
            <Text style={styles.desc}>{e_data.description}</Text>
            <Button title='Add to Calander' onPress={()=> {alert("Added to Calander")}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Bold",
        padding: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    
    txt: {
        color: "black",
        fontSize: 18,
        fontFamily: 'AppleSDGothicNeo-Regular'
    },
    desc: {
        color: "black",
        fontSize: 15,
        fontFamily: 'AppleSDGothicNeo-Regular',
        width: windowWidth - 30,
        paddingTop: 10,
        paddingLeft: 40,
        paddingRight: 5,
    },
    img:{
        width: windowWidth - 50,
        height: 250
    }
})


export default TieScreen