import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const RewardClaim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rewardCard}>
          <Text style={styles.text}>
            Hello Maanas, today you have <Text style={styles.coins}>900</Text>
            coins
          </Text>
        </View>
      </View>

      <View style={styles.result}>
        <Image source={require("./assets/reward.png")} style={styles.image} />
        <Text style={styles.text}>
          Yay! Your ticket to free participation in Green-People Meet is here!
        </Text>
        {/* <Text style={styles.text}>""</Text> */}
        <Text style={[styles.text, styles.code]}>
          Use Code: <Text style={styles.coins}>3FEFD676</Text> for entry.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#395B50",
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  coins: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFD700",
  },
  result: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#E3655B",
    borderRadius: 8,
    width: 310,
    height: 350,
    padding: 50,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    // marginTop: 20,
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 600,
  },
  code: {
    marginTop: 10,
    marginBottom: 20,
  },
  rewardCard: {
    width: 235,
    height: 100,
    fontSize: 20,
    backgroundColor: "#D5A021",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
  },
});

export default RewardClaim;
