import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import TextRecognition from "react-native-text-recognition";

const TestScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scannedText, setScannedText] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const text = await TextRecognition.recognize(result.assets[0].uri);
        setScannedText(text.join(" "));
      }
    } catch (error) {
      console.error("Error recognizing text:", error);
      Alert.alert("Error", "Failed to recognize text from the image.");
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={handlePickImage} />
      {scannedText && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{scannedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default TestScreen;
