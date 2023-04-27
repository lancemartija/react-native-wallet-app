import { View } from "react-native";
import React, { FC } from "react";

// components
import BalanceCard from "./BalanceCard";

// types
import { BalanceCardProps } from "./types";

const BalanceCardSection: FC<BalanceCardProps> = (props) => {
  return (
    <View className="w-full flex-[2] items-center">
      <BalanceCard {...props} />
    </View>
  );
};

export default BalanceCardSection;
