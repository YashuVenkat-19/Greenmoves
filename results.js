import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Results = () => {
  const [coins, setCoins] = useState("");

  useEffect(() => {
    const getres = async () => {
      console.log("getting coins");
      try {
        const response = await fetch("http://172.20.10.9:5000/get_coins");
        const data = await response.text();
        const parsedData = JSON.parse(data);
        setCoins(parsedData.coins);
        console.log(parsedData.coins);
      } catch (error) {
        console.error("Failed to get coins from backend:", error);
      }
    };
    getres();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.rewardCard}>
        <Text style={styles.text}>
          Hello Maanas, today you have <Text style={styles.coins}>{coins}</Text>
          coins
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
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
    color: "#000",
  },
  coins: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#FFD700",
  },
});

export default Results;
