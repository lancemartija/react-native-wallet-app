import React, { FC } from "react";
import { ImageBackground, View, Image } from "react-native";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// images
import card_bg from "./../../assets/bgs/background_transparent.png";

// types
import { BalanceCardProps } from "./types";

const BalanceCard: FC<BalanceCardProps> = (props) => {
  return (
    <ImageBackground
      source={card_bg}
      resizeMode="cover"
      className="h-[75%] w-full overflow-hidden rounded-[25px] bg-accent"
    >
      <View className="flex-1 items-center justify-between p-[30px]">
        <View className="w-full flex-row items-center justify-between">
          <RegularText textStyles="text-white">
            ****** {props?.accountNo?.slice(6, 10)}
          </RegularText>
        </View>
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-[3]">
            <SmallText textStyles="mb-[5px] text-white">
              Total Balance
            </SmallText>
            <RegularText textStyles="text-[19px]">
              ${props?.balance}
            </RegularText>
          </View>
          <Image
            source={props?.logo}
            resizeMode="contain"
            className="h-full w-full flex-1"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default BalanceCard;
