import { ICategory } from "@/apis/category.api";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useCreateCategory } from "@/hooks/category.hook";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useRouter } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

const AddCategory: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
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
    { label: "Expense", value: "expense" },
    { label: "Income", value: "income" },
  ]);

  const handleCreateCategory = () => {
    mutate(data, {
      onSuccess: (newCategory) => {
        queryClient.setQueryData(["categories"], (oldData: any) => {
          return {
            ...oldData,
            data: [...oldData.data, newCategory.data],
          };
        });
        router.back();
      },
    });
  };

  return (
    <View className="bg-white" style={styles.container}>
      <Input
        placeholder="Name"
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
      />
      <Input
        placeholder="Description"
        value={data.description}
        onChangeText={(text) => setData({ ...data, description: text })}
      />
      <Input
        placeholder="Icon"
        value={data.icon}
        onChangeText={(text) => setData({ ...data, icon: text })}
      />
      <View className="my-2 z-10">
        <DropDownPicker
          open={open}
          value={type}
          items={items}
          setOpen={setOpen}
          setValue={setType}
          setItems={setItems}
          onChangeValue={(value) => {
            if (value !== null) {
              setData({ ...data, type: value });
            }
          }}
        />
      </View>
      <Button title="Create Category" onPress={handleCreateCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AddCategory;
