import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
const Home = () => {
    return (
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri: 'https://www.cricbuzz.com/' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default Home
