import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./Screens/HomeScreen";
import fonts from "./config/fonts";
import { useFonts } from "expo-font";
import ProductDetails from "./Screens/ProductDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [Fonts] = useFonts(fonts);

  if (!Fonts) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="Productdetails"
            component={ProductDetails}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
