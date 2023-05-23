import React from "react";
import { View, StyleSheet, Text } from "react-native";
const UploadOptionCard = (prop) => {
  const name = prop.name;
  const tag = prop.tag;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {/* <Text style={styles.title}>{tag}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    color: "#FFFFFF",
    width: 300,
    height: 150,
    justifyContent: "center",
    borderRadius: 10,
    margin: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default UploadOptionCard;
