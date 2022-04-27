import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const EventDetail = (props) => {
    return (
            <View style = {styles.container}>
                <View style = {[styles.space, {height:10}]}/>
                <View style = {styles.card}>
                    <Text style = {styles.cTitle}>{props.title}</Text>
                    <Text style = {styles.cDes}>Time: {props.time}</Text>
                    <Text style = {styles.cDes}>Location: {props.location}</Text>
                    <Text style = {styles.cDes}>Host: {props.org}</Text>
                    <Text style = {styles.cDes}>RSVP: {props.RSVPInfo}</Text>
                    <Button title ="More" onPress={() => { props.morePressed();}}></Button>
                </View>
                <View style = {styles.space}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, width: 410 },
    space: { borderBottomColor: 'black', borderBottomWidth: 1},
    card: { backgroundColor: '#ADDBE6', height: 230, padding: 10},
    cTitle: {
        color: "black",
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular'
    },
    cDes: { fontStyle: 'italic', padding: 5, fontWeight: 'bold'}
});

export default EventDetail;