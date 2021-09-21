import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { WebView } from "react-native-webview"

const MapContact = () => {
    return (
        <WebView source={{ uri: "https://goo.gl/maps/4ey3jwp7PqtoXBzy5" }} />
    )
}


const More = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contactBox}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
                    Contact Us
                </Text>
            </View>

            <View style={{ height: 500, width: "100%" }}>
                <MapContact />
            </View>


            <View>
                <Text style={{ fontSize: 23, paddingTop: 5 }}>Mob : +91 574547455</Text>
            </View>
            <Text style={{ fontSize: 20, paddingTop: 5, textAlign: "center" }}>
                Follow Me
            </Text>
            <View style={styles.flexContact}>
                <Image style={{ marginTop: 5, marginHorizontal: 5, width: 50, height: 50, borderRadius: 50 }} source={require("../assets/git.png")} />
                <Image style={{ marginTop: 5, marginHorizontal: 5, width: 50, height: 50, borderRadius: 50 }} source={require("../assets/face.png")} />
                <Image style={{ marginTop: 5, marginHorizontal: 5, width: 50, height: 50, borderRadius: 50 }} source={require("../assets/ldn.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contactBox: {
        marginTop: 5
    },
    flexContact: {
        justifyContent: 'center',
        flexDirection: 'row'
    }
})

export default More
