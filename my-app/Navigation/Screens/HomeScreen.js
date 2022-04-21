import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function HomeScreen({navigation})
{
    return(
        <View style={styles.app}>
            <Text
                onPress={() => alert("This is the Home screen")}
                style={txt_style.app}>Home Screen</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: 'white',//'#73AFD7',
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

export default HomeScreen;