import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const EntryPoint = () => {
  return <Text style={styles.entryPoint}>Entry Point</Text>;
};

const styles = StyleSheet.create({
  entryPoint: {
    fontSize: 48,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "center",
    width: 301,
    height: 70,
  },
});

export default EntryPoint;
