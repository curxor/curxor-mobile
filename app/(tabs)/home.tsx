import HistoryItem from "@/components/history/item";
import Balance from "@/components/statictis/balance";
import Total from "@/components/statictis/total";
import { useGetProfile } from "@/hooks/auth.hook";
import { useGetTransactions } from "@/hooks/transaction.hook";
import React, { Fragment } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

const HomeScreen: React.FC = () => {
  const { data, isLoading } = useGetTransactions({
    limit: 10,
    page: 1,
    search: "",
  });
  console.log(data);
  const { data: dataUser, isLoading: isLoadingUser } = useGetProfile();
  return (
    <ScrollView className="bg-white">
      <SafeAreaView>
        <View className="bg-white p-4">
          <Text className="font-semibold text-xl">Overview</Text>
        </View>
        {!isLoadingUser && <Balance balance={dataUser.balance}></Balance>}
        <View className="flex-row justify-center">
          {!isLoadingUser && (
            <Fragment>
              <Total
                icon="smile"
                name="Total income this month"
                value={dataUser.income}
              ></Total>
              <Total
                icon="alert-circle"
                name="Total expense this month"
                value={dataUser.expense}
              ></Total>
            </Fragment>
          )}
        </View>
        <View className="bg-white p-2 rounded-xl ">
          <Text className="font-semibold">Latest Entries</Text>
          {!isLoading &&
            data.data.transactions.map((item: any) => (
              <HistoryItem
                key={item._id}
                _id={item._id}
                amount={item.amount}
                createdAt={item.createdAt}
                type={item.category.name}
                description={item.description}
                icon={item.category.icon}
              ></HistoryItem>
            ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
