import React, { FC } from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";

// types
type ProfileProp = {
  img: ImageSourcePropType;
  imgStyle?: string;
  imgContainerStyle?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const Profile: FC<ProfileProp> = ({
  img,
  imgStyle,
  imgContainerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-[45px] w-[45px] flex-col rounded-[15px] bg-tertiary ${imgContainerStyle}`}
    >
      <Image
        source={img}
        resizeMode="cover"
        className={`h-full w-full rounded-[15px] ${imgStyle}`}
      />
    </TouchableOpacity>
  );
};

export default Profile;
