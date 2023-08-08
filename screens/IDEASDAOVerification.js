import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IDEASDAOVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoVerification}>
      <Pressable
        style={styles.getStarted}
        onPress={() => navigation.navigate("IDEASDAONews")}
      >
        <View style={styles.getStartedChild} />
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </Pressable>
      <Pressable
        style={styles.getStarted}
        onPress={() => navigation.navigate("IDEASDAONews")}
      >
        <View style={styles.getStartedChild} />
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </Pressable>
      <TextInput style={[styles.v, styles.vLayout]} />
      <TextInput style={[styles.v1, styles.vLayout]} />
      <TextInput style={[styles.v2, styles.vLayout]} />
      <TextInput style={[styles.v3, styles.vLayout]} />
      <Text style={[styles.verification, styles.verificationPosition]}>
        Verification
      </Text>
      <Text style={[styles.enterTheNumber, styles.verificationPosition]}>
        Enter the number sent to your number
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  verifyTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  vLayout: {
    height: 50,
    width: 50,
    backgroundColor: Color.gray_200,
    top: 218,
    borderRadius: Border.br_sm,
    left: "50%",
    position: "absolute",
  },
  verificationPosition: {
    width: 333,
    left: "50%",
    position: "absolute",
  },
  getStartedChild: {
    marginLeft: -94,
    top: 0,
    backgroundColor: Color.fuchsia,
    borderRadius: Border.br_sm,
    height: 35,
    width: 188,
    left: "50%",
    position: "absolute",
  },
  verify: {
    marginLeft: -65,
    top: 6,
    fontSize: FontSize.size_lg,
    width: 131,
    height: 24,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  getStarted: {
    marginLeft: -95,
    top: 295,
    height: 35,
    width: 188,
    left: "50%",
    position: "absolute",
  },
  v: {
    marginLeft: -132,
  },
  v1: {
    marginLeft: -63,
  },
  v2: {
    marginLeft: 6,
  },
  v3: {
    marginLeft: 71,
  },
  verification: {
    marginLeft: -167,
    top: 74,
    fontSize: FontSize.size_14xl,
    height: 99,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  enterTheNumber: {
    marginLeft: -160,
    top: 124,
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkgray_200,
    textAlign: "left",
  },
  ideasDaoVerification: {
    backgroundColor: Color.black,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IDEASDAOVerification;
