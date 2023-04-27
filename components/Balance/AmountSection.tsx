import { View } from "react-native";
import React, { FC } from "react";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// types
import { AmountProps } from "./types";

const AmountSection: FC<AmountProps> = ({ balance }) => {
  return (
    <View className="w-full flex-1 items-center pt-[5px]">
      <SmallText textStyles="text-secondary mb-[15px]">Total Balance</SmallText>
      <RegularText textStyles="text-secondary text-[28px]">
        $ {balance}
      </RegularText>
    </View>
  );
};

export default AmountSection;
