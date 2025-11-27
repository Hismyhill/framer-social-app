import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helper/common";

type Props = {
  containerStyles?: object;
  icon?: any;
  inputRef?: any;
  placeholder?: string;
  onChangeText?: any;
  value?: any;
  secureTextEntry?: boolean;
};

const Input = ({ containerStyles, icon, inputRef, ...props }: Props) => {
  return (
    <View style={[styles.container, containerStyles && containerStyles]}>
      {icon && icon}
      <TextInput
        style={{
          flex: 1,
        }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef && inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius["2xl"],
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
