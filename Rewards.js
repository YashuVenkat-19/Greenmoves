import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import RewardCard from "./rewardCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Results from "./results";
import { ScrollView } from "react-native-gesture-handler";

const Rewards = ({ route, navigation }) => {
  const image = route && route.params && route.params.image;
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Hey</Text> */}
          <Results />
        </View>

        <View style={styles.rewards}>
          <View style={styles.item}>
            <RewardCard
              title="30% off on sustainablity clothing"
              icon="trophy-outline"
              navigation={navigation}
            />
          </View>
          <View style={styles.item}>
            <RewardCard
              title="25% off on organic sprouts"
              icon="medal-outline"
              navigation={navigation}
            />
          </View>
          <View style={styles.item}>
            <RewardCard
              title="Green people free membership"
              icon="ribbon-outline"
              navigation={navigation}
            />
          </View>
          <View style={styles.item}>
            <RewardCard
              title="15% off on HorM"
              icon="star-outline"
              navigation={navigation}
            />
          </View>
          <View style={styles.item}>
            <RewardCard
              title="Gift from Zolly"
              icon="gift-outline"
              navigation={navigation}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#395B50",
    flex: 1,
    paddingTop: 40,
    paddingBottom: 150,
  },
  textContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  rewards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  item: {
    width: "35%",
    aspectRatio: 1,
    margin: 15,
    paddingBottom: 15,
  },
});

export default Rewards;
