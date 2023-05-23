import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import UploadOptionCard from "./UploadOptionCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ImagePickerButton from "./imagePickerButton";
import { color } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

const BillUpload = ({ navigation }) => {
  const handleNext = (tag) => {
    console.log(tag);
    navigation.navigate("ImagePickerButton", { tag });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          title="ElectricityBill"
          onPress={() => handleNext("1")}
        >
          <UploadOptionCard name="Electricty Bills" tag="1" />
        </TouchableOpacity>
        <TouchableOpacity title="TravelBills" onPress={() => handleNext("2")}>
          <UploadOptionCard name="Travel Bills" tag="2" />
        </TouchableOpacity>
        <TouchableOpacity title="Nursery Bills" onPress={() => handleNext("3")}>
          <UploadOptionCard name="Nursery Bills" tag="3" />
        </TouchableOpacity>
        <TouchableOpacity title="Grocery Bills" onPress={() => handleNext("4")}>
          <UploadOptionCard name="Grocery Bills" tag="4" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#395B50",
  },
});

export default BillUpload;
