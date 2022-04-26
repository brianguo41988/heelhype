import * as React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Button} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Component } from 'react/cjs/react.production.min';
import eventData from '../../Data/eventListData';
import { useNavigation } from '@react-navigation/native';

//Finds the window height and width for styling
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Populates the FlatList with Items (listings)
class FlatListItem extends Component{

    render(){
        return( 
            <View style={style.mainContainer}>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate(screenSelector(this.props.item.title))}}>
                        <View style={style.rows}>
                            <Image
                                source={{uri: this.props.item.img}}
                                style={style.row_img}
                            ></Image>
                                <View style={style.column_txt}>
                                    <Text style={style.flastListItem_eName}>{this.props.item.title}</Text>
                                    <Text style={style.flastListItem}>{this.props.item.org}</Text>
                                    <Text style={style.flatListItem_sub}>{this.props.item.time}</Text>
                                    <Text style={style.flatListItem_sub}>{this.props.item.location}</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                <View style={{
                    height: 0,
                    backgroundColor: '#73AFD7',
                }}>
                </View>
            </View>  
        );
    }
}

//Creates the homeScreen
function HomeScreen({navigation})
{
    let tod_date = getCurrentDate();
    return(
        <View style={style.app}>
            <Text style={style.header}>{tod_date}</Text>
            <FlatList 
                data={eventData}
                renderItem={({item, index}) => {
                    return (
                        <FlatListItem navigation={navigation} item={item} index={index}></FlatListItem>
                    );
                }}
                >
            </FlatList>
        </View>
        
    );
}

//Returns the name of the selected screen based on item.title value
function screenSelector(title){
    let e = title.toString().substring(0,3).toLowerCase();
    if(e === 'lun') {return 'LunchScreen';}
    else if(e === 'tie') {return 'TieScreen';}
    else if(e === 'spi') {return 'SpikeScreen';}
    else if(e === 'bat') {return 'BattleScreen';}
    else if(e === 'sha') {return 'ShabScreen';}
    else if(e === 'hum') {return 'HumanScreen';}
    else if(e === 'xal') {return 'XalScreen';}
    else if(e === 'ful') {return 'FullMoonScreen';}
    else if(e === 'car') {return 'MentalScreen';}
    else if(e === 'mov') {return 'MovieScreen';}

}


//Style Sheet
const style = StyleSheet.create({
    app: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: 'white'
    },
    txt: {
        color: "black",
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular'
    },
    header: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Bold",
        padding: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },

    flastListItem: {
        padding: 2,
        fontSize: 16,
        alignContent: 'center',
        width: windowWidth,
        fontFamily: "AppleSDGothicNeo-Regular",
    },

    flastListItem_eName: {
        padding: 2,
        fontSize: 18,
        alignContent: 'center',
        fontWeight: 'bold',
        width: windowWidth,
        fontFamily: "AppleSDGothicNeo-Regular",
    },

    flatListItem_sub: {
        padding: 2,
        fontSize: 12,
        alignContent: 'center',
        width: windowWidth,
        fontFamily: "AppleSDGothicNeo-Regular",
    },

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        borderColor: '#73AFD7',
        borderWidth: 2,
        width: windowWidth,
    },

    rows: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white', 
        width: windowWidth,
        height: 100,
    },

    row_img: {
        width:100,
        margin: 5,
    },

    column_txt: {
        flex: 1,
        flexDirection: 'column'
    },

});


//Function to get current date with message
const getCurrentDate=()=>{
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    var prnDt = (new Date().toLocaleTimeString('en-us', options)).toString();

    //Roundabout way to remove extra info
    var f = prnDt.indexOf(",");
    var s = prnDt.indexOf(",", f + 1);
    var t = prnDt.indexOf(",", s + 1);
    var date = prnDt.substring(0, t);
    return "What is Going On Today...\n" + date;

}

export default HomeScreen;