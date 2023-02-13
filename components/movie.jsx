import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { Linking } from "react-native";

export default function Movie({ route }) {
    
//Create button to open IMDB website search
    const { movie } = route.params;
    const imdbLink = `https://www.imdb.com/find?ref_=nv_sr_fn&q=${movie.title}&s=all`;
    const openIMDB = () => {
        try {
            Linking.openURL(imdbLink);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
                style={styles.image}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
            <Button title="View ON IMDB" onPress={openIMDB} color="#facc15" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 16,
        backgroundColor:"#a1a1aa"
        
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: "contain",
        marginVertical: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    overview: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 20,
    },
});

