import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const IdeasDaoContainer = () => {
  return (
    <View style={[styles.ideasDao, styles.ideasPosition]}>
      <Image
        style={[styles.ideasDaoChild, styles.ideasPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-144.png")}
      />
      <Text style={[styles.ideasDao1, styles.kMembersTypo]}>IDEAS DAO</Text>
      <Text style={[styles.kMembers, styles.kMembersTypo]}>20K members</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ideasPosition: {
    left: "50%",
    position: "absolute",
  },
  kMembersTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
  },
  ideasDaoChild: {
    marginLeft: -37.5,
    top: 0,
    width: 70,
    height: 70,
  },
  ideasDao1: {
    marginLeft: -39.5,
    top: 76,
    fontSize: FontSize.size_mini,
    color: Color.black,
  },
  kMembers: {
    marginLeft: -36.5,
    top: 96,
    fontSize: FontSize.size_3xs,
    color: Color.gray_200,
  },
  ideasDao: {
    marginLeft: -37,
    top: 53,
    width: 79,
    height: 108,
  },
});

export default IdeasDaoContainer;
