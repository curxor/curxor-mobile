// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Button,
//   Image,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { launchImageLibrary } from "react-native-image-picker";
// import MLKit from "react-native-ml-kit";

// export default function TextRecognitionExample() {
//   const [imageUri, setImageUri] = useState(null);
//   const [recognizedText, setRecognizedText] = useState("");

//   const handlePickImage = () => {
//     launchImageLibrary({ mediaType: "photo" }, async (response) => {
//       if (response.assets && response.assets.length > 0) {
//         const image = response.assets[0];
//         setImageUri(image.uri);

//         try {
//           const result = await MLKit.textRecognition(image.uri);
//           const text = result?.text || "No text detected";
//           setRecognizedText(text);
//         } catch (error) {
//           console.error("Text recognition error:", error);
//           setRecognizedText("Failed to recognize text.");
//         }
//       }
//     });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Button title="Chọn ảnh từ thư viện" onPress={handlePickImage} />

//       {imageUri && (
//         <Image
//           source={{ uri: imageUri }}
//           style={styles.image}
//           resizeMode="contain"
//         />
//       )}

//       <Text style={styles.resultTitle}>Kết quả nhận diện văn bản:</Text>
//       <Text style={styles.resultText}>{recognizedText}</Text>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     marginVertical: 20,
//   },
//   resultTitle: {
//     fontWeight: "bold",
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   resultText: {
//     fontSize: 16,
//     color: "#333",
//   },
// });
