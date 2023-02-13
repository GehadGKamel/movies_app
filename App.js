import Movies from "./components/moviesApp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Movie from "./components/movie";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Movies page */}
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{
            headerStyle: {
              backgroundColor: "#71717a",
            },
            headerTintColor: "#e4e4e7",
            headerTitleAlign: "center",
          }}
        />
        {/* movie card page */}
        <Stack.Screen
          name="Movie Details"
          component={Movie}
          options={{
            headerStyle: {
              backgroundColor: "#71717a",
            },
            headerTintColor: "#e4e4e7",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}