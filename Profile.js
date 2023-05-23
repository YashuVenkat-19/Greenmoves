import React from "react";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Results from "./results";

const Profile = ({ navigation }) => {
  const goToRewards = () => {
    navigation.navigate("Rewards");
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/me.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Maanas</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileInfoText}>
            Email: coolmaanas@gmail.com
          </Text>
          <Text style={styles.profileInfoText}>Phone: +91 98233 54765</Text>
        </View>
        <Results />
        <Button
          onPress={goToRewards}
          title="See Rewards"
          buttonStyle={{
            backgroundColor: "#000",
            borderWidth: 2,
            borderColor: "#395B50",
            borderRadius: 30,
            padding: 15,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            paddingTop: 50,
            marginVertical: 10,
          }}
        />
        <Button
          onPress={goToRegister}
          title="Register"
          buttonStyle={{
            backgroundColor: "#000",
            borderWidth: 2,
            borderColor: "#395B50",
            borderRadius: 30,
            padding: 15,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="Log In"
          onPress={goToLogin}
          buttonStyle={{
            backgroundColor: "#000",
            borderWidth: 2,
            borderColor: "#395B50",
            borderRadius: 30,
            padding: 15,
          }}
          containerStyle={{
            width: 200,
            paddingBottom: 150,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#395B50",
    alignItems: "center",
    paddingTop: 120,
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileInfoContainer: {
    margin: 20,
    marginBottom: 20,
    paddingBottom: 20,
  },
  profileInfoText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Profile;
