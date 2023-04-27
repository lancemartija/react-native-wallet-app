import { View, Image } from "react-native";
import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";

// background image
import background from "./../assets/bgs/background_v1.png";

// components
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import RegularButton from "../components/Buttons/RegularButton";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FC<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <View className="h-full w-full justify-between bg-secondary">
        <View className="max-h-[55%] w-full flex-1">
          <Image
            source={background}
            resizeMode="stretch"
            className="h-full w-full"
          />
        </View>
        <View className="w-full flex-1 justify-end p-[25px]">
          <BigText textStyles="mb-[25px] w-[70%]">
            Best way to track your money
          </BigText>
          <SmallText textStyles="mb-[25px] w-[70%]">
            Best payment method, connects your money to your friends and family.
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Get Started
          </RegularButton>
        </View>
      </View>
    </>
  );
};

export default Welcome;
