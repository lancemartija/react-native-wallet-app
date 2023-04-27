import { View } from "react-native";
import React, { FC } from "react";

// icons
import { Ionicons } from "@expo/vector-icons";

// components
import RegularButton from "../Buttons/RegularButton";

const ButtonSection: FC = () => {
  return (
    <View className="w-full flex-1 items-center">
      <RegularButton btnStyles="w-[50%]" onPress={() => {}}>
        Cancel <Ionicons size={17} name="card" color="#FFFFFF" />
      </RegularButton>
    </View>
  );
};

export default ButtonSection;
