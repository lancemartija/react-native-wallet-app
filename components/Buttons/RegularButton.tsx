import { TouchableOpacity } from "react-native";
import React, { FC, ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

// components
import RegularText from "../Texts/RegularText";

// types
type ButtonProps = {
  btnStyles?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: string;
  children: ReactNode;
};

const RegularButton: FC<ButtonProps> = ({
  btnStyles,
  onPress,
  textStyles,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full items-center rounded-[20px] bg-primary p-5 ${btnStyles}`}
    >
      <RegularText textStyles={textStyles}>{children}</RegularText>
    </TouchableOpacity>
  );
};

export default RegularButton;
