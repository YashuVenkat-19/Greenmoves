import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BillUpload from "./BillUpload";
import Profile from "./Profile";
import Rewards from "./Rewards";
const Tab = createMaterialTopTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="GreenJuice"
      screenOptions={{
        tabBarActiveTintColor: "#001011",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: "#CED4DA", height: 60, paddingTop: 7 },
        tabBarIndicatorStyle: {
          backgroundColor: "#001011",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tab.Screen
        name="BillUpload"
        component={BillUpload}
        options={{ tabBarLabel: "BillUpload" }}
      />
      <Tab.Screen
        name="Notifications"
        component={Rewards}
        options={{ tabBarLabel: "Rewards" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Navbar;
