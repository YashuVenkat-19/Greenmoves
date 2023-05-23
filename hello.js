import Tesseract from "tesseract.js";
import axios from "axios";
import { View, Button, Text } from "native-base";
import React, { useState } from "react";

const Hello = () => {
  const [response, setResponse] = useState(null);

  const sendWordToFlask = async (word) => {
    try {
      const response = await axios.post(
        "http://172.20.10.13:5000/process_image",
        {
          word: word,
        }
      );
      console.log("Word sent to Flask server successfully!");
      console.log(response.data);
      setResponse(response.data); // Update state with response from server
    } catch (error) {
      console.error("Failed to send word to Flask server:", error);
      setResponse(null); // Reset state to indicate error
    }
  };

  const recognizeText = async (imageUri) => {
    const {
      data: { text },
    } = await Tesseract.recognize(imageUri, "eng");
    console.log(text);
  };

  return (
    <View>
      <Button onPress={() => sendWordToFlask("Hello")}>
        <Text>Send "Hello" to Flask</Text>
      </Button>
      {response && <Text>{JSON.stringify(response)}</Text>}

      <Button
        onPress={() => recognizeText("greenjuice/assets/electricity.jpeg")}
      >
        <Text>Recognize Text</Text>
      </Button>
    </View>
  );
};

export default Hello;
