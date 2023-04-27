import { View } from "react-native";
import React, { FC } from "react";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";

// types
import { TransactionProps } from "./types";

const TransactionItem: FC<TransactionProps> = ({
  art,
  title,
  subtitle,
  amount,
  date,
}) => {
  return (
    <View className="mb-[25px] w-full flex-row items-center justify-between">
      <View className="h-full flex-[2] flex-row items-center justify-start">
        <TransactionAvi background={art.background} icon={art.icon} />
        <View className="ml-[10px]">
          <RegularText textStyles="text-secondary text-left mb-[5px]">
            {title}
          </RegularText>
          <SmallText textStyles="text-left text-graydark">{subtitle}</SmallText>
        </View>
      </View>
      <View className="flex-1">
        <RegularText textStyles="text-secondary text-right mb-[5px]">
          {amount}
        </RegularText>
        <SmallText textStyles="text-right text-graydark">{date}</SmallText>
      </View>
    </View>
  );
};

export default TransactionItem;
