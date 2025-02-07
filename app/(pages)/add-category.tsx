import { ICategory } from "@/apis/category.api";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useCreateCategory } from "@/hooks/category.hook";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useRouter } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";
import Header from "@/components/header/header";

const AddCategory: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useCreateCategory();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ICategory>({
    name: "",
    description: "",
    icon: "",
    type: "",
  });
  const [type, setType] = useState<string>("");
  const [items, setItems] = useState([
    { label: "Income 📈", value: "income" },
    { label: "Expense 📉", value: "expense" },
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
    <View className="bg-[#FFFFFF]" style={styles.container}>
      <View className="max-w-[500px] w-full mx-auto">
        <Header title="Category"></Header>
        <Input
          title="Name"
          placeholder="Car, Food, etc"
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />
        <Input
          title="Description"
          placeholder="Expense for car, food, etc"
          value={data.description}
          onChangeText={(text) => setData({ ...data, description: text })}
        />
        <Input
          title="Icon"
          placeholder="Icon"
          value={data.icon}
          onChangeText={(text) => setData({ ...data, icon: text })}
        />
        <View className="my-2 z-10">
          <Text className="mb-2 font-semibold ">Category</Text>
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
        <Button
          isLoading={isPending}
          title="Create Category"
          onPress={handleCreateCategory}
        />
      </View>
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
