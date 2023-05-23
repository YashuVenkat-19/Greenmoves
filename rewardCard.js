import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const RewardCard = ({ title, icon, navigation }) => {
  const handlePress = () => {
    // make it go to claimed page
    navigation.navigate("RewardClaim");
    console.log(title);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={48} style={styles.icon} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 145,
    height: 150,
    backgroundColor: "#E3655B",
    borderRadius: 8,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    marginBottom: 1,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    color: "#000",
  },
});

export default RewardCard;
