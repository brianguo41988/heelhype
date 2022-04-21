import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function EventScreen({navigation})
{
    return(
        <View style={styles.app}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={txt_style.app}>Event Screen</Text>
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