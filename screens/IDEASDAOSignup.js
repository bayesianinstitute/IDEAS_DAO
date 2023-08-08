import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IDEASDAOSignup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoSignup}>
      <Text style={[styles.helloSignUp, styles.textLayout]}>
        Hello! Sign up to get started
      </Text>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("IDEASDAOLogin")}
      >
        <Text style={[styles.text, styles.textLayout]}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={styles.loginNow}>Login Now</Text>
        </Text>
      </Pressable>
      <RNPTextInput
        style={[styles.confirmPassword, styles.passwordSpaceBlock]}
        placeholder="Confirm Password"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <RNPTextInput
        style={[styles.password, styles.passwordSpaceBlock]}
        placeholder="Password"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <RNPTextInput
        style={[styles.email, styles.passwordSpaceBlock]}
        placeholder="Email"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <RNPTextInput
        style={[styles.username, styles.passwordSpaceBlock]}
        placeholder="Username"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <View style={[styles.signup, styles.signupLayout]}>
        <Pressable
          style={[styles.signupChild, styles.signupLayout]}
          onPress={() => navigation.navigate("IDEASDAOPortfolio")}
        />
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("IDEASDAOPortfolio")}
        >
          <Text style={styles.signUp1}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 333,
    textAlign: "center",
  },
  passwordSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 0,
    height: 50,
    width: 252,
    backgroundColor: Color.gray_200,
    marginLeft: -134,
    borderRadius: Border.br_sm,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  signupLayout: {
    height: 35,
    width: 188,
    position: "absolute",
  },
  helloSignUp: {
    top: 78,
    left: 28,
    fontSize: FontSize.size_14xl,
    height: 99,
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 333,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.gray_100,
  },
  loginNow: {
    color: Color.royalblue_100,
  },
  text: {
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  alreadyHaveAnContainer: {
    left: 22,
    top: 788,
    position: "absolute",
  },
  confirmPassword: {
    top: 511,
  },
  password: {
    top: 422,
  },
  email: {
    top: 333,
  },
  username: {
    top: 244,
  },
  signupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.fuchsia,
    borderRadius: Border.br_sm,
    height: 35,
    width: 188,
  },
  signUp1: {
    fontSize: FontSize.size_lg,
    width: 131,
    height: 24,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  signUp: {
    left: 29,
    top: 6,
    position: "absolute",
  },
  signup: {
    marginLeft: -94,
    top: 619,
    height: 35,
    width: 188,
    left: "50%",
  },
  ideasDaoSignup: {
    backgroundColor: Color.black,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IDEASDAOSignup;
