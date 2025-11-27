import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";

type Props = {
  name: any;
  size: number;
  color: string;
  onPress: any;
  style: object;
};

const ButtonIcon = ({ name, size, color, onPress, style }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name={name} size={size} color={color} style={style} />
    </Pressable>
  );
};

export default ButtonIcon;
