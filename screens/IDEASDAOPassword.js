import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IDEASDAOPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoPassword}>
      <Pressable
        style={[styles.rememberPasswordLoginContainer, styles.emailPosition]}
        onPress={() => navigation.navigate("IDEASDAOLogin")}
      >
        <Text style={styles.text} />
      </Pressable>
      <Text
        style={[styles.dontWorryIt, styles.dontWorryItPosition]}
      >{`Don’t worry! It occurs. Please enter the email address linked with your account. `}</Text>
      <Text style={[styles.forgotPassword, styles.dontWorryItPosition]}>
        Forgot Password?
      </Text>
      <RNPTextInput
        style={[styles.email, styles.emailPosition]}
        placeholder="Email"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Bold" } },
          colors: { text: "#fff" },
        }}
      />
      <Pressable
        style={[styles.getStarted, styles.emailPosition]}
        onPress={() => navigation.navigate("IDEASDAONews")}
      >
        <Button
          title="Send Code"
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(243, 22, 208, 0.74)"
          onPress={() => navigation.navigate("IDEASDAOVerification")}
          containerStyle={styles.rectangleButtonBtn}
          buttonStyle={styles.rectangleButtonBtn1}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    left: "50%",
    marginLeft: -94,
    top: 0,
    position: "absolute",
  },
  rectangleButtonBtn1: {
    borderRadius: 14,
    width: 188,
    height: 35,
  },
  emailPosition: {
    left: "50%",
    position: "absolute",
  },
  dontWorryItPosition: {
    width: 333,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -166,
  },
  rememberPasswordLoginContainer: {
    top: 788,
  },
  dontWorryIt: {
    marginLeft: -157,
    top: 122,
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkgray_200,
    textAlign: "left",
  },
  forgotPassword: {
    marginLeft: -167,
    top: 74,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
    height: 99,
  },
  email: {
    marginLeft: -127,
    top: 209,
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_200,
    width: 252,
    height: 50,
    overflow: "hidden",
  },
  getStarted: {
    marginLeft: -93,
    top: 295,
    width: 188,
    height: 35,
  },
  ideasDaoPassword: {
    backgroundColor: Color.black,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IDEASDAOPassword;
