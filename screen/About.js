import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'

const About = () => {

    const [isSpin, setSpin] = useState(true)

    return (
        <View style={styles.container}>

            <View style={styles.box}>

                <Image source={require("../assets/mine1.jpg")} style={{ height: 500, width: "100%" }} resizable="yes" />
                <Text style={{ fontSize: 30, color: "#694fad", textAlign: "center" }}>
                    Md Ashif Reza
                </Text>
                <Text style={{ color: "black", fontSize: 20, paddingLeft: 10 }}>

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, tempore.
                </Text>
                <Text style={{ color: "#694fad", fontSize: 35, paddingTop: 20 }}>
                    Android Developer
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        // marginTop: 10
    }
})

export default About
