import { View } from "react-native";
import React, { FC } from "react";
import { FlatList } from "react-native-gesture-handler";

// icons
import { Ionicons } from "@expo/vector-icons";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// types
import { TransactionSectionProps } from "./types";
import TransactionItem from "./TransactionItem";

const TransactionSection: FC<TransactionSectionProps> = ({ data }) => {
  return (
    <View className="w-full flex-[2] px-[25px] pt-[5px]">
      <View className="mb-[25px] w-full flex-row items-center justify-between">
        <RegularText textStyles="text-secondary text-[19px]">
          Transaction
        </RegularText>
        <SmallText textStyles="text-secondary">
          Recent
          <Ionicons name="caret-down" size={13} color="#4B5563" />
        </SmallText>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
        keyExtractor={({ id }: any) => id.toString()}
        className="w-full pb-[25px]"
      ></FlatList>
    </View>
  );
};

export default TransactionSection;
