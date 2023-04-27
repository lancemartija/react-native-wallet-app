import { FlatList } from "react-native-gesture-handler";
import React, { FC } from "react";

// components
import CardItem from "./CardItem";

// types
import { CardSectionProps } from "./types";

const CardSection: FC<CardSectionProps> = ({ data }) => {
  return (
    <FlatList
      className="w-full flex-1 pb-[15px] pl-[25px] pr-[50px]"
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center" }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
