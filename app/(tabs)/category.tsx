// import Category from "@/components/category/item";
// import { useGetCategories } from "@/hooks/category.hook";
// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import { TabView, SceneMap, TabBar } from "react-native-tab-view";

// const AddButton = () => {
//   const router = useRouter();
//   return (
//     <TouchableOpacity onPress={() => router.push("/(pages)/add-category")}>
//       <Text className="p-2 mt-2 w-10 h-10 text-center rounded-full bg-gray-100">
//         {"+"}
//       </Text>
//     </TouchableOpacity>
//   );
// };
// const initialLayout = { width: Dimensions.get("window").width };
// const CategoriesScreen = () => {
//   const { data, isLoading } = useGetCategories();

//   const FirstRoute = () => (
//     <View style={styles.tabContent}>
//       {!isLoading &&
//         data.data.map((item: any) => {
//           return (
//             item.type === "income" && (
//               <Category name={item.name} icon={item.icon} key={item._id} />
//             )
//           );
//         })}
//       <AddButton />
//     </View>
//   );

//   const SecondRoute = () => (
//     <View style={styles.tabContent}>
//       {!isLoading &&
//         data.data.map((item: any) => {
//           return (
//             item.type === "expense" && (
//               <Category name={item.name} icon={item.icon} key={item._id} />
//             )
//           );
//         })}
//       <AddButton />
//     </View>
//   );

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: "income", title: "Income" },
//     { key: "expense", title: "Expense" },
//   ]);

//   const renderScene = ({ route }: { route: any }) => {
//     if (isLoading) {
//       return <Text>Loading...</Text>;
//     }

//     return (
//       <View style={styles.tabContent}>
//         {data?.data
//           .filter((item: any) => item.type === route.key)
//           .map((item: any) => (
//             <Category name={item.name} icon={item.icon} key={item._id} />
//           ))}
//         <AddButton />
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={initialLayout}
//         renderTabBar={(props) => (
//           <TabBar
//             {...props}
//             indicatorStyle={{ backgroundColor: "#00A6ED" }}
//             style={{ backgroundColor: "#00A6ED" }}
//           />
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   tabContent: {
//     backgroundColor: "white",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     padding: 10,
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//   },
// });

// export default CategoriesScreen;
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useRouter } from "expo-router";
import { useGetCategories } from "@/hooks/category.hook";
import Category from "@/components/category/item";

const initialLayout = { width: Dimensions.get("window").width };

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

    const filteredData = data?.data.filter(
      (item: any) => item.type === route.key
    );

    return (
      <View style={styles.tabContent}>
        {filteredData.map((item: any) => (
          <Category name={item.name} icon={item.icon} key={item._id} />
        ))}
        <TouchableOpacity onPress={() => router.push("/(pages)/add-category")}>
          <Text style={styles.addButton}>{"+"}</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  addButton: {
    padding: 8,
    marginTop: 8,
    width: 40,
    height: 40,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    alignSelf: "center",
  },
});

export default CategoriesScreen;
