import Category from "@/components/category/item";
import { useGetCategories } from "@/hooks/category.hook";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const AddButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/(pages)/add-category")}>
      <Text className="p-2 mt-2 w-10 h-10 text-center rounded-full bg-gray-100">
        {"+"}
      </Text>
    </TouchableOpacity>
  );
};

const CategoriesScreen = () => {
  const { data, isLoading } = useGetCategories();

  const FirstRoute = () => (
    <View style={styles.tabContent}>
      {!isLoading &&
        data.data.map((item: any) => {
          return (
            item.type === "income" && (
              <Category name={item.name} icon={item.icon} key={item._id} />
            )
          );
        })}
      <AddButton />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.tabContent}>
      {!isLoading &&
        data.data.map((item: any) => {
          return (
            item.type === "expense" && (
              <Category name={item.name} icon={item.icon} key={item._id} />
            )
          );
        })}
      <AddButton />
    </View>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "income", title: "Income" },
    { key: "expense", title: "Expense" },
  ]);

  const renderScene = SceneMap({
    income: FirstRoute,
    expense: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: "#00A6ED" }}
          style={{ backgroundColor: "#00A6ED" }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabContent: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default CategoriesScreen;
