import { View } from "react-native";
import React, { FC } from "react";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

type GreetingProps = {
  mainText: string;
  subText: string;
  mainTextStyles?: string;
  subTextStyles?: string;
};

const Greeting: FC<GreetingProps> = ({
  mainText,
  subText,
  mainTextStyles,
  subTextStyles,
}) => {
  return (
    <View className="flex-1 flex-col justify-center">
      <RegularText textStyles={`text-secondary text-[22px] ${mainTextStyles}`}>
        {mainText}
      </RegularText>
      <SmallText textStyles={`text-graydark ${subTextStyles}`}>
        {subText}
      </SmallText>
    </View>
  );
};

export default Greeting;
