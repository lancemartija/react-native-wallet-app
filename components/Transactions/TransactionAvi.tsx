import { View, Text } from "react-native";
import React, { FC } from "react";

// icons
import { Ionicons } from "@expo/vector-icons";

// types
import { TransactionAviProps } from "./types";

const TransactionAvi: FC<TransactionAviProps> = ({ background, icon }) => {
  return (
    <View
      style={{ backgroundColor: background }}
      className="h-[45px] w-[45px] items-center justify-center rounded-[10px]"
    >
      <Ionicons name={icon} size={25} color="#FFFFFF" />
    </View>
  );
};

export default TransactionAvi;
