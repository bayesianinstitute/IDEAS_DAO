import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer = ({ imageDimensions }) => {
  return (
    <View style={styles.trackCurrentBalance}>
      <View style={styles.currentPosition}>
        <LinearGradient
          style={[styles.currentBalanceChild, styles.currentPosition]}
          locations={[0, 1]}
          colors={["#f316d0", "#000"]}
        />
        <Text style={[styles.text, styles.textFlexBox]}>$111,000</Text>
        <Text style={[styles.currentBalance1, styles.trackingIconPosition]}>
          Current Balance
        </Text>
      </View>
      <Image
        style={[styles.trackingIcon, styles.trackingIconPosition]}
        contentFit="cover"
        source={imageDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  currentPosition: {
    height: 119,
    top: 0,
    marginLeft: -165.5,
    width: 331,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  trackingIconPosition: {
    marginLeft: -127.5,
    left: "50%",
    position: "absolute",
  },
  currentBalanceChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: "transparent",
  },
  text: {
    marginLeft: -146.5,
    top: 40,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 139,
    height: 41,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    color: Color.white,
  },
  currentBalance1: {
    top: 16,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 108,
    height: 24,
    textAlign: "center",
    color: Color.white,
  },
  trackingIcon: {
    top: 139,
    width: 262,
    height: 160,
  },
  trackCurrentBalance: {
    marginLeft: -169,
    top: 145,
    height: 299,
    width: 331,
    left: "50%",
    position: "absolute",
  },
});

export default FormContainer;
