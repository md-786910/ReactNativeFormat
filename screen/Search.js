import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ActivityIndicator, ScrollView, Image } from 'react-native'



const api2 = "4898630f183f4b9e90de2ebbdc18063d";
const api3 = "bbd54ff2d2c147d5ab352a0d6a0675f7";
const api = "290cdf1c8a5e4390b568d79522792078";


const News = () => {
    const [searchText, setSearchText] = useState("")
    const [isSpin, setSpin] = useState(false);
    const [news, setNews] = useState([]);

    async function fetchData(valueSearch) {

        try {
            // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}&pageSize=100&page=1`;

            let url = `https://newsapi.org/v2/everything?q=${valueSearch}&apiKey=${api}&pageSize=100`

            let res = await fetch(url, {
                method: 'GET',
                "Content-Type": "application/json"
            })

            let data = await res.json();
            setSpin(false);
            setNews(data.articles)
        } catch (error) {
            console.warn(error)
        }
    }

    const onChangeText = (e) => {
        setSearchText(e)
    }

    const sendNews = () => {
        setSpin(true)
        fetchData(searchText)
    }
    return (
        <View>
            <Text style={{ fontSize: 30, paddingTop: 5, textAlign: "center" }}>
                Serach Now
            </Text>

            <View style={styles.textInput}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="news search"
                />
            </View>

            <View style={styles.btn}>
                <Button title="search" color="#694fad" onPress={sendNews} />
            </View>

            {/* seperator */}
            <View style={styles.seperator}>
            </View>

            <ScrollView>

                <View style={styles.card}>
                    {
                        isSpin ? <ActivityIndicator color="#694fad" size={30} /> : <Text> </Text>
                    }

                    {
                        news.map((elem, index) => {
                            return (
                                <TouchableOpacity style={styles.smallCard} onPress={() => Linking.openURL(elem.url)}>
                                    <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 25, color: "#b312e4" }}>
                                        {elem.title}
                                    </Text>

                                    <Image source={{ uri: `${elem.urlToImage}` }} style={{ width: "100%", height: 100 }} />

                                    <Text numberOfLines={2} style={{ marginVertical: 5, fontSize: 18 }}>
                                        {elem.description}
                                    </Text>
                                    <Text style={{ fontSize: 23 }}>
                                        {elem.source.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        fontSize: 20,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
    textInput: {
        marginTop: "0%",
    },
    btn: {
        padding: 10,
    },
    card: {
        backgroundColor: "white",
        padding: 10
    }
    , smallCard: {
        padding: 2,
        borderRadius: 10,
        backgroundColor: "rgb(234, 238, 238)",
        elevation: 10,
        marginTop: 10
    },
    seperator: {
        padding: .4,
        backgroundColor: 'black',
        height: 1
    }
})

export default News
