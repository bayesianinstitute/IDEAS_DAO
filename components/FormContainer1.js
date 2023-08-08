import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  isActive,
  propTop,
  propBackgroundColor,
  propLeft,
}) => {
  const proposal1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const activeStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.proposal1Position, proposal1Style]}>
      <View style={[styles.proposal1Child, styles.proposal1Position]} />
      <Text style={[styles.x034dj4de37, styles.activeTypo]}>
        0x034dj4...de37
      </Text>
      <Image
        style={styles.proposal1Item}
        contentFit="cover"
        source={require("../assets/ellipse-145.png")}
      />
      <View style={[styles.proposal1Inner, rectangleViewStyle]} />
      <Text style={[styles.active, styles.activeTypo, activeStyle]}>
        {isActive}
      </Text>
      <Text style={[styles.idp245ProposalTo, styles.idp245ProposalToLayout]}>
        IDP-245 “Proposal to establish an investment DAO within the IDEA DAO
        that will allow us to invest in crypto projects in a decentralized way
      </Text>
      <Text
        style={[
          styles.abstractDecentralizedInvest,
          styles.idp245ProposalToLayout,
        ]}
      >{`ABSTRACT: Decentralized investment DAOs are the future. They allow for more individuals to be part of the decision making process while allocating resources efficiently and effectively. `}</Text>
      <Text style={styles.endsIn2}>Ends in 2 days</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  proposal1Position: {
    height: 148,
    width: 326,
    left: 0,
    top: 0,
    position: "absolute",
  },
  activeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  idp245ProposalToLayout: {
    height: 38,
    width: 287,
    left: 18,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  proposal1Child: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gainsboro,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  x034dj4de37: {
    left: 31,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    top: 11,
  },
  proposal1Item: {
    top: 8,
    left: 7,
    width: 20,
    height: 20,
    position: "absolute",
  },
  proposal1Inner: {
    left: 263,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.limegreen_200,
    width: 42,
    height: 17,
    top: 11,
    position: "absolute",
  },
  active: {
    top: 13,
    left: 270,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  idp245ProposalTo: {
    top: 45,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    height: 38,
    width: 287,
  },
  abstractDecentralizedInvest: {
    top: 99,
    fontSize: FontSize.size_5xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  endsIn2: {
    top: 134,
    fontSize: FontSize.size_7xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_200,
    width: 48,
    height: 9,
    left: 18,
    textAlign: "left",
    position: "absolute",
  },
});

export default FormContainer1;
