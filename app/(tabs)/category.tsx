import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useRouter } from "expo-router";
import { useGetCategories } from "@/hooks/category.hook";
import Category from "@/components/category/item";
import { FlatGrid } from "react-native-super-grid";
const initialLayout = { width: Dimensions.get("window").width };
const numColumns = Math.floor(Dimensions.get("window").width / 150);

const CategoriesScreen = () => {
  const router = useRouter();
  const { data, isLoading } = useGetCategories();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "income", title: "Income" },
    { key: "expense", title: "Expense" },
  ]);

  const renderScene = ({ route }: { route: any }) => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    const filteredData =
      data?.data.filter((item: any) => item.type === route.key) || [];
    const dataWithAddButton = [...filteredData, { _id: "add-button" }];

    return (
      <View style={styles.tabContent}>
        <FlatGrid
          itemDimension={130}
          data={dataWithAddButton}
          renderItem={({ item }) =>
            item._id === "add-button" ? (
              <TouchableOpacity
                onPress={() => router.push("/(pages)/add-category")}
                className="rounded-full p-2 bg-gray-100 w-10 h-10 flex-row justify-center items-center"
              >
                <Text style={styles.addButton}>{"+"}</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.itemContainer}>
                <Category name={item.name} icon={item.icon} key={item._id} />
              </View>
            )
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            // labelStyle={styles.label}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContent: {
    backgroundColor: "white",
    padding: 10,
  },
  tabBar: {
    backgroundColor: "#00A6ED",
  },
  indicator: {
    backgroundColor: "#ffffff",
  },
  label: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    maxWidth: Dimensions.get("window").width / numColumns - 10, // Adjust width based on screen size and margin
  },
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 5,
    maxWidth: Dimensions.get("window").width / numColumns - 10, // Adjust width based on screen size and margin
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
  },
  addButton: {
    fontSize: 24,
    color: "#00A6ED",
  },
});

export default CategoriesScreen;
