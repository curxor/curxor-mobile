import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import DropDownPicker from "react-native-dropdown-picker";
import { useGetCategories } from "@/hooks/category.hook";
import Toast from "react-native-toast-message";
import { z } from "zod";
import {
  useEditTransaction,
  useTransactionDetails,
} from "@/hooks/transaction.hook";
import Header from "@/components/header/header";

const transactionSchema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z.number().refine((val: number) => !isNaN(val), {
    message: "Amount must be a valid number",
  }),
  category: z.string().nonempty("Category is required"),
});

interface ITransaction {
  amount: number;
  description: string;
  category: string;
}
interface ICategory {
  name: string;
  _id: string;
  type: string;
}

export default function Transactions() {
  const router = useRouter();
  const { _id } = useLocalSearchParams<{ _id: string }>();
  const { data: dataTransaction } = useTransactionDetails(_id);
  const { data: dataCategories, isLoading } = useGetCategories();
  const { mutate, isPending } = useEditTransaction();
  const [open, setOpen] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("");

  const [data, setData] = useState<ITransaction>({
    description: "",
    amount: 0,
    category: "",
  });
  const [category, setCategory] = useState<string>("");
  const [items, setItems] = useState<ICategory[]>([
    { _id: "", name: "", type: "" },
  ]);

  useEffect(() => {
    if (dataCategories && dataTransaction) {
      setItems(dataCategories.data);
      setData(dataTransaction.data);
      setCategory(dataTransaction.category);
    }
  }, [dataCategories, dataTransaction]);

  const onSubmit = () => {
    const validationResult = transactionSchema.safeParse({
      ...data,
      category,
    });

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(
        (err: any) => err.message
      );

      errorMessages.forEach((message: any) =>
        Toast.show({
          type: "error",
          text1: message,
          position: "top",
          visibilityTime: 3000,
        })
      );
      return;
    }
    const selectedItem = items.find((item) => item._id === category);
    if (selectedItem?.type === "expense" && data.amount > 0) {
      return Toast.show({
        type: "error",
        text1: "With expense, amount must be less than 0",
        position: "top",
        visibilityTime: 3000,
      });
    }
    if (selectedItem?.type === "income" && data.amount <= 0) {
      return Toast.show({
        type: "error",
        text1: "With income, amount must be greater than 0",
        position: "top",
        visibilityTime: 3000,
      });
    }
    mutate(
      { ...data, category, _id },
      {
        onError: (err: any) => {
          return Toast.show({
            type: "error",
            text1: err.response.data.message,
            position: "top",
            visibilityTime: 3000,
          });
        },
        onSuccess: (data: any) => {
          Toast.show({
            type: "error",
            text1: data.message,
            position: "top",
            visibilityTime: 3000,
          });
          router.back();
        },
      }
    );
  };

  return (
    <View className="bg-white h-full">
      <View className="max-w-[500px] w-full mx-auto">
        <Header title="Transaction"></Header>

        <View className="text-center mt-5 flex-row items-center bg-gray-100 text-8xl h-36 w-36 mx-auto rounded-full p-2">
          <Text className="text-6xl mx-auto">🔥</Text>
        </View>
        <View className="z-10">
          <Toast></Toast>
        </View>
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
        ></Input>
        <Input
          title="Amount"
          className="mx-2"
          value={String(data.amount)}
          onChangeText={(value) => {
            setData((prevData) => ({
              ...prevData,
              amount: value ? parseFloat(value) : 0,
            }));
          }}
          keyboardType={"numeric"}
        ></Input>
        <View className="mx-2 z-10">
          <Text className="mb-2 font-semibold mt-2">Category</Text>
          {!isLoading && (
            <DropDownPicker
              loading={isLoading}
              open={open}
              value={category}
              items={items.map((item) => ({
                label: item.name,
                value: item._id,
              }))}
              setOpen={setOpen}
              setValue={(value) => setCategory(value)}
              setItems={setItems}
              searchable={true}
              placeholder="Select a category"
              searchPlaceholder="Search categories..."
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
            />
          )}
          <Button
            isLoading={isPending}
            onPress={() => onSubmit()}
            className="mt-4 w-[80%] mx-auto"
            title="Save"
          />
        </View>
      </View>
    </View>
  );
}

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
