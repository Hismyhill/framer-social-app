import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Input from "../components/Input";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import { hp, wp } from "../helper/common";

// type Props = {};

const Signup = () => {
  const router = useRouter();
  const nameRef = useRef<string>("");
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  async function handleSubmit() {
    setError(null);
    if (!emailRef.current) {
      setError("Email is required");
      return;
    } else if (!passwordRef.current) {
      setError("Password is required");
      return;
    }
  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <ButtonIcon
          name="keyboard-arrow-left"
          size={26}
          color={theme.colors.text}
          onPress={() => router.back()}
          style={styles.backButton}
        />

        <View>
          <Text style={styles.welcomeText}>Let&apos;s</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        <View style={{ gap: 25 }}>
          <Text
            style={{
              fontSize: hp(1.5),
              color: theme.colors.text,
            }}
          >
            Please register to use the app
          </Text>

          <Input
            placeholder="Enter your name"
            onChangeText={(value: string) => (nameRef.current = value)}
            icon={
              <MaterialIcons
                name="person-outline"
                size={26}
                color={theme.colors.textLight}
              />
            }
          />

          <Input
            placeholder="Enter your email"
            onChangeText={(value: string) => (emailRef.current = value)}
            icon={
              <MaterialIcons
                name="mail-outline"
                size={26}
                color={theme.colors.textLight}
              />
            }
          />

          <Input
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value: string) => (passwordRef.current = value)}
            icon={
              <MaterialIcons
                name="lock-outline"
                size={26}
                color={theme.colors.textLight}
              />
            }
          />

          {error ? (
            <Text
              style={{ color: "#ff4141ff", marginTop: -15, marginBottom: -10 }}
            >
              {error}
            </Text>
          ) : (
            <Text style={{ marginTop: -15, marginBottom: -10 }}> </Text>
          )}

          <Button title="Signup" isLoading={isLoading} onPress={handleSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },

  backButton: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0, 0, 0, 0.07)",
  },

  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },

  form: {
    gap: 25,
  },

  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
