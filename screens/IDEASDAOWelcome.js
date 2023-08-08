import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IDEASDAOWelcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoWelcome}>
      <View style={styles.circles}>
        <Text style={[styles.ideasDao, styles.signUp1Typo]}>{`IDEAS 
DAO`}</Text>
        <Image
          style={[styles.circleDesignIcon, styles.signupChildPosition]}
          contentFit="cover"
          source={require("../assets/circle-design.png")}
        />
      </View>
      <View style={styles.termsOfService}>
        <Text style={styles.byContinuingIContainer}>
          <Text
            style={styles.byContinuingI}
          >{`By continuing, I agree to the `}</Text>
          <Text style={styles.termsOfService1}>{`Terms of Service `}</Text>
          <Text style={styles.byContinuingI}>and consent to the</Text>
          <Text style={styles.privacyPolicy}>{` Privacy Policy. `}</Text>
        </Text>
      </View>
      <View style={[styles.signup, styles.signupLayout]}>
        <Pressable
          style={[styles.signupChild, styles.signupLayout]}
          onPress={() => navigation.navigate("IDEASDAOSignup")}
        />
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("IDEASDAOPortfolio")}
        >
          <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={[styles.getStarted, styles.signupLayout]}>
        <Pressable
          style={[styles.signupChild, styles.signupLayout]}
          onPress={() => navigation.navigate("IDEASDAOLogin")}
        />
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("IDEASDAOPortfolio")}
        >
          <Text style={[styles.signUp1, styles.signUp1Typo]}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1Typo: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  signupChildPosition: {
    left: 0,
    top: 0,
  },
  signupLayout: {
    height: 35,
    width: 188,
    position: "absolute",
  },
  ideasDao: {
    top: 295,
    left: 103,
    fontSize: 60,
    width: 205,
    height: 114,
    textAlign: "center",
    position: "absolute",
  },
  circleDesignIcon: {
    width: 317,
    height: 280,
    position: "absolute",
  },
  circles: {
    marginLeft: -195,
    width: 234,
    height: 522,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  byContinuingI: {
    color: Color.gray_100,
  },
  termsOfService1: {
    color: "rgba(14, 92, 210, 0.86)",
  },
  privacyPolicy: {
    color: Color.royalblue_100,
  },
  byContinuingIContainer: {
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    flex: 1,
  },
  termsOfService: {
    marginLeft: -159,
    top: 779,
    width: 354,
    height: 32,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  signupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.fuchsia,
    left: 0,
    top: 0,
  },
  signUp1: {
    fontSize: FontSize.size_lg,
    width: 131,
    height: 24,
    textAlign: "center",
  },
  signUp: {
    left: 29,
    top: 6,
    position: "absolute",
  },
  signup: {
    marginLeft: -103,
    top: 700,
    left: "50%",
  },
  getStarted: {
    marginLeft: -102,
    top: 633,
    left: "50%",
  },
  ideasDaoWelcome: {
    backgroundColor: Color.black,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default IDEASDAOWelcome;
