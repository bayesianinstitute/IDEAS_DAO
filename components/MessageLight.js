import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border } from "../GlobalStyles";

const MessageLight = () => {
  return (
    <View style={styles.messageLight}>
      <View style={[styles.messageLightChild, styles.messageLayout]} />
      <Image
        style={[styles.messageLightItem, styles.messageLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageLayout: {
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  messageLightChild: {
    height: "54.17%",
    width: "70.83%",
    top: "22.92%",
    right: "14.58%",
    bottom: "22.92%",
    left: "14.58%",
    borderStyle: "solid",
    borderColor: "#f2f2f2",
    borderWidth: 1,
  },
  messageLightItem: {
    height: "19.63%",
    width: "68.53%",
    top: "35.64%",
    right: "15.73%",
    bottom: "44.73%",
    left: "15.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  messageLight: {
    marginLeft: -12,
    top: 13,
    left: "50%",
    width: 24,
    height: 24,
    position: "absolute",
  },
});

export default MessageLight;
