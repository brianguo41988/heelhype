import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const EventDetail = (props) => {
    return (
            <View style = {styles.container}>
                <View style = {[styles.space, {height:10}]}/>
                <View style = {styles.card}>
                    <Text style = {styles.cTitle}>{props.title}</Text>
                    <Text style = {styles.cDes}>{props.org}</Text>
                    <Text style = {styles.cDes}>RSVP: {props.RSVPInfo}</Text>
                    <Text style = {styles.cDes}>{props.time}</Text>
                    <Button title ="More" onPress={() => { props.morePressed();}}></Button>
                </View>
                <View style = {styles.space}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, width: 410 },
    space: { borderBottomColor: 'black', borderBottomWidth: 1},
    card: { backgroundColor: '#ADDBE6', height: 170, padding: 10},
    cTitle: {
        color: "black",
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular'
    },
    cDes: { fontStyle: 'italic', padding: 5,}
});

export default EventDetail;