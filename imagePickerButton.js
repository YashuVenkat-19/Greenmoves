import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "@rneui/themed";
import ConfettiCannon from "react-native-confetti";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

const ImagePickerButton = ({ navigation, route }) => {
  const [result, setReult] = useState("");
  const [yes, setYes] = useState(true);

  const { tag } = route.params;
  console.log(tag);
  let message = "";
  if (tag === "1") {
    message = "Upload electricity bill image";
  } else if (tag === "2") {
    message = "Upload travel bill image";
  } else if (tag === "3") {
    message = "Upload nursery bill image";
  } else if (tag === "4") {
    message = "Upload grocery bill image";
  } else {
    message = "Select a bill type to upload";
  }
  const [image, setImage] = useState(null);

  // Request camera roll permissions and open image picker
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getres = async () => {
    console.log("analysing");
    try {
      const response = await fetch("http://172.20.10.9:5000/get_coins");
      const data = await response.text();
      console.log(data);
      setReult(data);
      setYes(false);
      // console.log(JSON.stringify(response));
    } catch (error) {
      console.error("Failed to from backend:", error);
    }
  };

  const goToDb = async (tag) => {
    console.log("i am here");
    try {
      await sendImageToBackend(image, tag);
      // navigation.navigate("Results");
    } catch (error) {
      console.error("Failed to send image to backend:", error);
    }
  };
  const sendImageToBackend = async (imageUri, tag) => {
    let name = "";
    if (tag === "1") {
      name = "electricbill";
    } else if (tag === "2") {
      name = "busticket";
    } else if (tag === "3") {
      name = "gardenbill";
    } else if (tag === "4") {
      name = "grocerybill";
    } else {
      console.log("this is tag" + tag);
    }
    console.log("this is tag" + name);
    // console.log("this is tag" + name);
    // console.log(tag);
    // console.log(imageUri);
    const formData = new FormData();
    formData.append("image", {
      uri: imageUri,
      type: "image/jpeg",
      name: name + ".png",
    });

    // console.log(formData);

    try {
      const response = await fetch("http://172.20.10.9:5000/get_coins", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      console.log("Image sent to backend successfully!");
      getres();
      // console.log(JSON.stringify(response));
    } catch (error) {
      console.error("Failed to send image to backend:", error);
    }
  };

  return (
    <View style={styles.container}>
      {result && (
        <View style={styles.targetComponent}>
          <Text style={styles.result}>{result}</Text>
        </View>
      )}
      {!result && yes && (
        <View style={styles.Ccontainer}>
          <Text style={styles.message}>{message}</Text>
          <Button
            onPress={pickImage}
            title="Upload bill"
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
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <Button
            onPress={() => goToDb(tag)}
            // onPress={() => getres()}
            disabled={!image}
            title="Submit"
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
        </View>
      )}
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
  },
  Ccontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#395B50",
    borderRadius: 10,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  result: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#E3655B",
    borderRadius: 8,
    width: 310,
    height: 350,
    // backgroundColor: "#407765",
    paddingTop: 70,
    padding: 20,
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
});

export default ImagePickerButton;
