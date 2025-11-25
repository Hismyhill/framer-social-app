import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helper/common";

type ButtonProps = {
  buttonStyle?: object;
  textStyle?: object;
  title?: string;
  onPress: any;
  isLoading?: boolean;
  hasShadow?: boolean;
};

const Button = ({
  buttonStyle,
  textStyle,
  title,
  onPress = () => {},
  isLoading = false,
  hasShadow = true,
}: ButtonProps) => {
  const shadowStyle = {
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  if (isLoading) {
    return (
      <View style={[styles.button, buttonStyle, { background: "white" }]}>
        <LoadingSpinner />
      </View>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[textStyle, styles.text]}>{title}</Text>
    </Pressable>
  );
};

type LoadingSpinnerProps = {
  size: string;
  color: string;
};

const LoadingSpinner = ({
  size = "large",
  color = colors.primary,
}: LoadingSpinnerProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Button;

const { colors, fonts, radius } = theme;
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: radius.xl,
  },

  text: {
    fontSize: hp(2.5),
    color: "white",
    fontWeight: fonts.bold,
  },
});
