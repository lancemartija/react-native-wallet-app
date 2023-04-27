import React, { FC } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

// components
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

// data
import { cardsData } from "./data/cardsData";
import { transactionData } from "./data/transactionData";
import { sendMoneyData } from "./data/sendMoneyData";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FC<Props> = () => {
  return (
    <View className="w-full flex-1 bg-graylight">
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </View>
  );
};

export default Home;
