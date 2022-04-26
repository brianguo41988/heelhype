/*
Includes data for clubs of example profile
*/
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ExpandableListView} from 'react-native-expandable-listview';

var ProfileData = [
    {
        id: '1',
        categoryName: 'My Events',       
        subCategory: [
            {
                customInnerItem: (
                    <View style={{
                        flexDirection: 'column', 
                        marginLeft: 15,
                        fontSize: 20,
                    }}>
                        <Text style={{
                            fontWeight: 'bold', 
                            padding: 10,
                            fontSize: 20,
                            }}>Lunch Climb</Text>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}>11 AM - 3 PM</Text>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingBottom: 5,
                        }}>Rams Head Climbing Wall</Text>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}>If you’ve ever wanted to try climbing, this is your chance!</Text>
                    </View>
                )
                
            },
        ]
    },
    {
        id: '2',
        categoryName: 'My Clubs',
        subCategory: [
            {
                customInnerItem: (
                    <View style={{
                        flexDirection: 'column', 
                        marginLeft: 15,
                        fontSize: 20,
                    }}>
                        <Text style={{
                            fontWeight: 'bold', 
                            padding: 10,
                            fontSize: 20,
                            }}>A Novel Idea</Text>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}>A Novel Idea is a club designed to encourage students to read as well as...</Text>

                        <View
                        style={{
                            borderBottomColor: '#73AFD7',
                            borderBottomWidth: 2,
                            padding: 2,
                        }}
                        />

                        <Text style={{
                            fontWeight: 'bold', 
                            padding: 10,
                            fontSize: 20,
                            }}>Alpha Epsilon Delta</Text>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}>Alpha Epsilon Delta (AED) is a national pre-professional pre-health honors society...</Text>
                    </View>
                ), 
                    }
        ]
    }
];

const styles = StyleSheet.create({
    whole: {
        flexDirection: 'column', 
        marginLeft: 15,
        fontSize: 18,
    }
})

module.exports = ProfileData;