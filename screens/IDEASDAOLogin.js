import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IDEASDAOLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoLogin}>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("IDEASDAOSignup")}
      >
        <Text style={styles.text}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
          <Text style={styles.signUpNow}>Sign up Now</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("IDEASDAOPassword")}
      >
        <Text style={styles.forgotPassword1}>Forgot Password?</Text>
      </Pressable>
      <Text style={[styles.welcomeBackGlad, styles.logIn1Typo]}>{`Welcome back! 
Glad to see you!`}</Text>
      <RNPTextInput
        style={[styles.username, styles.usernameLayout]}
        placeholder="Username"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <RNPTextInput
        style={[styles.password, styles.usernameLayout]}
        placeholder="Password"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <View style={[styles.getStarted, styles.getLayout]}>
        <Pressable
          style={[styles.getStartedChild, styles.getLayout]}
          onPress={() => navigation.navigate("IDEASDAOPortfolio")}
        />
        <Pressable
          style={styles.logIn}
          onPress={() => navigation.navigate("IDEASDAOPortfolio")}
        >
          <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logIn1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.white,
    textAlign: "center",
  },
  usernameLayout: {
    height: 50,
    width: 252,
    backgroundColor: Color.gray_200,
    marginLeft: -132,
    borderRadius: Border.br_sm,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  getLayout: {
    height: 35,
    width: 188,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.gray_100,
  },
  signUpNow: {
    color: Color.royalblue_100,
  },
  text: {
    marginLeft: -166,
    width: 333,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
  },
  dontHaveAnContainer: {
    top: 788,
    left: "50%",
    position: "absolute",
  },
  forgotPassword1: {
    marginLeft: 17,
    width: 111,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
  },
  forgotPassword: {
    top: 374,
    left: "50%",
    position: "absolute",
  },
  welcomeBackGlad: {
    marginLeft: -167,
    top: 74,
    fontSize: FontSize.size_14xl,
    height: 99,
    width: 333,
    left: "50%",
    position: "absolute",
  },
  username: {
    top: 210,
  },
  password: {
    top: 292,
  },
  getStartedChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.fuchsia,
    borderRadius: Border.br_sm,
    height: 35,
    width: 188,
  },
  logIn1: {
    fontSize: FontSize.size_lg,
    width: 131,
    height: 24,
  },
  logIn: {
    left: 29,
    top: 6,
    position: "absolute",
  },
  getStarted: {
    marginLeft: -95,
    top: 406,
    left: "50%",
  },
  ideasDaoLogin: {
    backgroundColor: Color.black,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IDEASDAOLogin;
