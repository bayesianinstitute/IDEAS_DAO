import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import MessageLight from "./MessageLight";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SendForm1 = () => {
  return (
    <View style={[styles.send, styles.sendPosition]}>
      <Image
        style={[styles.sendChild, styles.sendPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1381.png")}
      />
      <Text style={[styles.send1, styles.sendPosition]}>Send</Text>
      <MessageLight />
    </View>
  );
};

const styles = StyleSheet.create({
  sendPosition: {
    left: "50%",
    position: "absolute",
  },
  sendChild: {
    marginLeft: -29,
    top: 0,
    width: 58,
    height: 58,
  },
  send1: {
    marginLeft: -17,
    top: 64,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "center",
  },
  send: {
    marginLeft: -72,
    top: 464,
    width: 50,
    height: 81,
  },
});

export default SendForm1;
