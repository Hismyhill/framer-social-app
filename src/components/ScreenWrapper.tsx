import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenWrapperProps = {
  children: React.ReactNode;
  bg: string;
};

function ScreenWrapper({ children, bg }: ScreenWrapperProps) {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View style={{ paddingTop, backgroundColor: bg, flex: 1 }}>{children}</View>
  );
}

export default ScreenWrapper;
