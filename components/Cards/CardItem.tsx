import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, TouchableHighlight, View, Image } from "react-native";

// screen width
import { ScreenWidth } from "../shared";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// images
import card_bg from "./../../assets/bgs/background_transparent.png";

// types
import { CardProps } from "./types";

// navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/Home";

const CardItem: FC<CardProps> = (props) => {
  // configuring navigation
  const navigation = useNavigation<HomeProps["navigation"]>();

  // move to balance page
  const handlePress = () => {
    navigation.navigate("Balance", { ...props });
  };

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={card_bg}
        resizeMode="cover"
        style={{ width: ScreenWidth * 0.67 }}
        className={`mr-[25px] h-[75%] overflow-hidden rounded-[25px] bg-accent`}
      >
        <TouchableHighlight
          underlayColor="#2C365A"
          onPress={handlePress}
          className="h-full rounded-[25px]"
        >
          <View className="flex-1 items-center justify-between p-[30px]">
            <View className="w-full flex-row items-center justify-between">
              <RegularText textStyles="text-white">
                ****** {props.accountNo.slice(6, 10)}
              </RegularText>
            </View>
            <View className="w-full flex-row items-center justify-between">
              <View className="flex-[3]">
                <SmallText textStyles="mb-[5px] text-white">
                  Total Balance
                </SmallText>
                <RegularText textStyles="text-[19px]">
                  ${props.balance}
                </RegularText>
              </View>
              <Image
                source={props.logo}
                resizeMode="contain"
                className="h-full w-full flex-1"
              />
            </View>
          </View>
        </TouchableHighlight>
      </ImageBackground>
    </>
  );
};

export default CardItem;
