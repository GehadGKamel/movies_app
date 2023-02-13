import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ImgCard from "./card";

//API URL
const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;


export default function Movies({ navigation }) {

  //get movies url

  const [movies, setMovies] = useState([]);
  getMovies(apiUrl);
  function getMovies(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardContainer}>
        {movies.map((e, i) => {
          return (
            //navigate to the movie details page
            <TouchableOpacity
              key={e.id}
              onPress={() => navigation.navigate("Movie Details", { movie: e })}
            >
              <ImgCard mvName={e.title} imgLink={imgPath + e.poster_path} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a1a1aa",
    justifyContent: "center",
    alignItems: "center",

  },
  cardContainer: {
    width: "100%",
  },
});
