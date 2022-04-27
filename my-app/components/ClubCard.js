import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ClubCard = (props) => {
    return (
            <View style = {styles.container}>
                    <View style = {[styles.space, {height:10}]}/>
                    <Text style = {styles.cTitle}>{props.title}</Text>
                    <Text style = {styles.cDes}>Contact: {props.contact}</Text>
                    <Text style = {styles.cDes}>Phone: {props.other}</Text>
                    <Text style = {styles.cDes}>Location: {props.location}</Text>
                    <Text style = {styles.p}>{props.fullDes}</Text>
                    <Button title ="Request to Join" onPress={() => { props.calendarPressed();}}></Button>
                    <Button title ="Back" onPress={() => { props.backPressed();}}></Button>
                    <View style = {[styles.space, {height:10}]}/>
                    <View style = {[styles.spaceBottom, {height:10}]}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, width: 410, paddingTop: 25},
    space: { borderBottomColor: 'black', borderBottomWidth: 1},
    spaceBottom: { paddingBottom: 100},
    card: { backgroundColor: '#ADDBE6', height: 170, padding: 10},
    cTitle: {
        padding:5,
        color: "black",
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Regular'
    },
    cDes: { fontStyle: 'italic', padding: 10, fontWeight: 'bold',},
    p: { padding: 5,}
    
});

export default ClubCard;