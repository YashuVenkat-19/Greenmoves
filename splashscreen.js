import React from "react";
import { View, StyleSheet } from "react-native";
import { useEffect } from "react";
import { Image } from "react-native";
import { Text } from "react-native";

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GreenMoves");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/splash.png")} style={styles.image} />
      <Text>Green Juice!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#395B50",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Splashscreen;
