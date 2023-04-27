import { View } from "react-native";
import React, { FC, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

// components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import SendMoneyItem from "./SendMoneyItem";

// types
import { SendMoneySectionProp } from "./types";

const SendMoneySection: FC<SendMoneySectionProp> = ({ data }) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["15%", "38%"], []);

  return (
    <BottomSheet ref={sheetRef} snapPoints={snapPoints} index={0}>
      <View className="w-full bg-white pt-[15px]">
        <View className="mb-[25px] w-full flex-row items-center justify-between px-[25px]">
          <RegularText textStyles="text-[19px] text-secondary">
            Send money to
          </RegularText>
          <TouchableOpacity onPress={() => alert("Add")}>
            <SmallText textStyles="font-bold text-tertiary">+Add</SmallText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          contentContainerStyle={{ alignItems: "flex-start" }}
          className="h-screen w-full flex-auto px-[25px]"
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </View>
    </BottomSheet>
  );
};

export default SendMoneySection;
