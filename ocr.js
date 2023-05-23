import React from "react";
import { View, StyleSheet, Text } from "react-native";

const OCRScreen = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OCRScreen;

// import React, { useState } from "react";
// import { View, Button, Text } from "react-native";
// import { Reader } from "easyocr";

// const reader = new Reader();

// const OCRScreen = () => {
//   const [ocrText, setOCRText] = useState("");

//   const performOCR = async () => {
//     const imageUri = "file:///path/to/your/image.jpg"; // replace with the image URI
//     const languages = ["en"]; // replace with the languages you want to perform OCR on

//     try {
//       const results = await reader.read(imageUri, languages);
//       const extractedText = results.map((result) => result.text).join(" ");
//       setOCRText(extractedText);
//     } catch (error) {
//       console.error("OCR failed:", error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Perform OCR" onPress={performOCR} />
//       <Text>{ocrText}</Text>
//     </View>
//   );
// };

// export default OCRScreen;
