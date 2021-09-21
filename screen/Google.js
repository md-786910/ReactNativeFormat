import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
const Google = () => {
    return (
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri: 'https://www.google.com/' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default Google
