import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
const Youtube = () => {
    return (
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri: 'https://www.youtube.com/' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default Youtube
