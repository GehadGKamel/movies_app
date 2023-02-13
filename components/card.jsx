import { Avatar } from "@react-native-material/core";
import { Text, View, StyleSheet } from "react-native";

export default function ImgCard(props) {
  return (
    <View style={styles.cardContainer}>
      <Avatar
        style={{ marginTop: 8 }}
        image={{
          uri: props.imgLink,
        }}
      ></Avatar>
      <Text style={styles.movieTitle}>{props.mvName} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#881337",
    alignItems: "center",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 9,
    
  },
  movieTitle: {
    fontWeight: "bold",
    marginTop: 8,
  },
});