import { Text } from "react-native";
import React, { FC } from "react";
import { TextProps } from "./types";

const SmallText: FC<TextProps> = ({ textStyles, children }) => {
  return (
    <Text
      style={{ fontFamily: "Lato-Regular" }}
      className={`text-left text-[13px] text-gray ${textStyles}`}
    >
      {children}
    </Text>
  );
};

export default SmallText;
