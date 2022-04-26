import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const EventCard = (props) => {
    return (
            <View style = {styles.container}>
                    <View style = {[styles.space, {height:10}]}/>
                    <Text style = {styles.cTitle}>{props.title}</Text>
                    <Text style = {styles.cDes}>{props.org}</Text>
                    <Text style = {styles.cDes}>RSVP: {props.RSVPInfo}</Text>
                    <Text style = {styles.cDes}>{props.time}</Text>
                    <Text style = {styles.p}>{props.des}</Text>
                    <View style = {[styles.space, {height:10}]}/>
                    <Button title ="Add to Calendar" onPress={() => { props.calendarPressed();}}></Button>
                    <Button title ="Back" onPress={() => { props.backPressed();}}></Button>
            </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, width: 410, paddingTop: 25},
    space: { borderBottomColor: 'black', borderBottomWidth: 1},
    card: { backgroundColor: '#ADDBE6', height: 170, padding: 10},
    cTitle: {
        paddingTop:5,
        color: "black",
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular'
    },
    cDes: { fontStyle: 'italic', padding: 5, fontWeight: 'bold',},
    p: { padding: 5,}
    
});

export default EventCard;