import { Text } from "react-native";
import React, { FC } from "react";
import { TextProps } from "./types";

const RegularText: FC<TextProps> = ({ textStyles, children }) => {
  return (
    <Text
      style={{ fontFamily: "Lato-Bold" }}
      className={`text-left text-[15px] text-white ${textStyles}`}
    >
      {children}
    </Text>
  );
};

export default RegularText;
