import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splashscreen from "./splashscreen";
import Rewards from "./Rewards";
import BillUpload from "./BillUpload";
import Navbar from "./Navbar";
import ImagePickerButton from "./imagePickerButton";
import Profile from "./Profile";
import Login from "./login";
import RegistrationForm from "./register";
import OCRScreen from "./ocr";
import Results from "./results";
import { SafeAreaView } from "react-native-safe-area-context";
import RewardClaim from "./rewardClaim";
import RewardCard from "./rewardCard";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown="false">
        <Stack.Screen
          name="Splash"
          component={Splashscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GreenMoves" component={Navbar} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BillUpload"
          component={BillUpload}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rewards"
          component={Rewards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ImagePickerButton"
          component={ImagePickerButton}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RewardCard"
          component={RewardCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RewardClaim"
          component={RewardClaim}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E46211",
    alignItems: "center",
    justifyContent: "center",
  },
});
