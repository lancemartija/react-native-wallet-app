import { ImageSourcePropType } from "react-native";

export interface SendMoneyProp {
  id: number;
  name: string;
  amount: string;
  background: string;
  image: ImageSourcePropType;
}

export interface SendMoneySectionProp {
  data: Array<SendMoneyProp>;
}
