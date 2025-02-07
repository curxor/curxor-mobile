import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CategoryProps {
  name: string;
  icon: string;
}

const Category: React.FC<CategoryProps> = ({ name, icon }) => {
  return (
    <View style={styles.container}>
      <Text className="bg-gray-100" style={styles.icon}>
        {icon}
      </Text>
      <Text className="font-semibold">{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 8,
  },
  icon: {
    padding: 10,
    width: 40,
    height: 40,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginBottom: 5,
  },
});

export default Category;
