import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../components/Button";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import { hp, wp } from "../helper/common";

const WelcomeScreen = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../../assets/images/welcome.png")}
        />

        {/* Title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Framer</Text>
          <Text style={styles.punchLine}>
            Where every taught finds a home and every image tells a story
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => {}}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable>
              <Text
                style={[
                  styles.loginText,
                  { color: colors.primaryDark, fontWeight: fonts.semibold },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;

const { colors, fonts } = theme;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },

  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },

  title: {
    color: colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: fonts.extrabold,
  },

  punchLine: {
    color: colors.text,
    fontSize: hp(1.7),
    fontWeight: fonts.medium,
    textAlign: "center",
    paddingHorizontal: wp(10),
  },

  footer: {
    width: wp(100),
    gap: 30,
  },

  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  loginText: {
    textAlign: "center",
    color: colors.text,
    fontSize: hp(1.6),
  },
});
