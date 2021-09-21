import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, ScrollView, Image, Linking, StyleSheet, TouchableOpacity } from 'react-native'

const api2 = "4898630f183f4b9e90de2ebbdc18063d";
const api3 = "bbd54ff2d2c147d5ab352a0d6a0675f7";
const api = "290cdf1c8a5e4390b568d79522792078";

const value = "latest"
let url = ` https://newsapi.org/v2/everything?q=${value}&apiKey=${api}&pageSize=100&page=1`;

const Latest = () => {
    const [isSpin, setSpin] = useState(true);
    const [news, setNews] = useState([]);

    async function fetchData() {

        try {
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
    console.log(news)
    // call the function
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.card}>
                    {
                        isSpin ? <ActivityIndicator color="#b312e4" size={30} /> : <Text> </Text>
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
    container: {
        flex: 1,
        backgroundColor: "white"
    }
    , card: {
        backgroundColor: "white",
        padding: 10
    }
    , smallCard: {
        padding: 2,
        borderRadius: 10,
        backgroundColor: "rgb(234, 238, 238)",
        elevation: 10,
        marginTop: 10
    }
})

export default Latest


// "https://images.unsplash.com/photo-1484795819573-86ae049cb815?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYzMjIwNjI4OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"


