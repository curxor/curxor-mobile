import { ICategory } from "@/apis/category.api";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useCreateCategory } from "@/hooks/category.hook";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useRouter } from "expo-router";
const AddCategory: React.FC = () => {
  const router = useRouter();
  const { mutate } = useCreateCategory();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ICategory>({
    name: "",
    description: "",
    icon: "",
    type: "",
  });
  const [type, setType] = useState<string>("");
  const [items, setItems] = useState([
    { name: "Expense", type: "expense" },
    { name: "Income", type: "income" },
  ]);

  const onSubmit = () => {
    mutate(
      { ...data, type },
      {
        onSuccess: () => {
          router.back();
        },
      }
    );
  };
  return (
    <View className="h-full bg-white">
      <Input
        title="Name"
        className="mx-2 "
        value={data.name}
        onChangeText={(value) => {
          setData((prevData) => ({
            ...prevData,
            name: value,
          }));
        }}
      ></Input>
      <Input
        title="Description"
        className="mx-2 "
        value={data.description}
        onChangeText={(value) => {
          setData((prevData) => ({
            ...prevData,
            description: value,
          }));
        }}
      ></Input>{" "}
      <Input
        length={100}
        title="Icon"
        className="mx-2 "
        value={data.icon}
        onChangeText={(value) => {
          setData((prevData) => ({
            ...prevData,
            icon: value,
          }));
        }}
      ></Input>
      <View className="mx-2 z-10">
        <Text className="mb-2">Category</Text>
        <DropDownPicker
          open={open}
          value={type}
          items={items.map((item) => ({
            label: item.name,
            value: item.type,
          }))}
          setOpen={setOpen}
          setValue={setType}
          setItems={setItems}
          searchable={true}
          placeholder="Select a category"
          searchPlaceholder="Search categories..."
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>
      <Button className="mt-2" title="Add" onPress={() => onSubmit()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  dropdown: {
    borderColor: "#aaa",
    borderRadius: 10,
  },
  dropdownContainer: {
    borderColor: "#aaa",
  },
});

export default AddCategory;
