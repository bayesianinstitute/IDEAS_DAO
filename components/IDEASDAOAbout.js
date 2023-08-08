import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import IdeasDaoContainer from "./IdeasDaoContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IDEASDAOAbout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoAbout}>
      <View style={[styles.menuDao, styles.join1Position]}>
        <Pressable
          style={[styles.create, styles.join1Position]}
          onPress={() => navigation.navigate("IDEASDAONewProposal")}
        >
          <Text style={[styles.create1, styles.create1Typo]}>Create</Text>
        </Pressable>
        <Pressable
          style={[styles.create, styles.join1Position]}
          onPress={() => navigation.navigate("IDEASDAODelegate")}
        >
          <Text style={[styles.delegate1, styles.create1Typo]}>Delegate</Text>
        </Pressable>
      </View>
      <IdeasDaoContainer />
      <Pressable
        style={styles.arrowAltLeft}
        onPress={() => navigation.navigate("IDEASDAOConferences")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-alt-left.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.join, styles.joinLayout]}
        onPress={() => navigation.navigate("IDEASDAOPortfolio")}
      >
        <LinearGradient
          style={[styles.joinChild, styles.joinLayout]}
          locations={[0.24, 1]}
          colors={["#f316d0", "#000"]}
        />
        <Text style={[styles.join1, styles.join1Position]}>Join</Text>
      </Pressable>
      <Image
        style={styles.ideasDaoAboutChild}
        contentFit="cover"
        source={require("../assets/rectangle-78.png")}
      />
      <Text style={[styles.ideasApp, styles.aboutPosition]}>
        Ideas App .............................
      </Text>
      <View style={[styles.proposals, styles.proposalsPosition]}>
        <Text style={[styles.about, styles.aboutPosition]}>About</Text>
        <Image
          style={[styles.proposalsChild, styles.proposalsPosition]}
          contentFit="cover"
          source={require("../assets/vector-3162.png")}
        />
      </View>
      <Pressable
        style={[styles.proposals1, styles.join1Position]}
        onPress={() => navigation.navigate("IDEASDAO")}
      >
        <Text style={[styles.proposals2, styles.create1Typo]}>Proposals</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  join1Position: {
    left: "50%",
    position: "absolute",
  },
  create1Typo: {
    color: Color.gray_200,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  joinLayout: {
    height: 35,
    width: 132,
    left: "50%",
    position: "absolute",
  },
  aboutPosition: {
    color: Color.black,
    left: "50%",
    position: "absolute",
  },
  proposalsPosition: {
    width: 67,
    left: "50%",
    position: "absolute",
  },
  create1: {
    marginLeft: -76.5,
    textAlign: "center",
  },
  create: {
    top: 0,
  },
  delegate1: {
    marginLeft: 16.5,
    textAlign: "center",
  },
  menuDao: {
    marginLeft: -59,
    width: 153,
    height: 17,
    top: 226,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowAltLeft: {
    left: 15,
    top: 12,
    width: 41,
    height: 41,
    position: "absolute",
  },
  joinChild: {
    marginLeft: -66,
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    top: 0,
  },
  join1: {
    marginLeft: -52.4,
    top: 6,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    width: 105,
    height: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  join: {
    marginLeft: -67,
    top: 176,
  },
  ideasDaoAboutChild: {
    width: "64.13%",
    top: 291,
    right: "27.55%",
    left: "8.31%",
    borderRadius: Border.br_7xs,
    maxWidth: "100%",
    height: 177,
    position: "absolute",
    overflow: "hidden",
  },
  ideasApp: {
    marginLeft: -157,
    top: 483,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    width: 323,
    height: 680,
    fontSize: FontSize.size_lg,
  },
  about: {
    marginLeft: -21,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.black,
    top: 0,
  },
  proposalsChild: {
    marginLeft: -33.5,
    top: 22,
    height: 3,
  },
  proposals: {
    marginLeft: 111.5,
    height: 23,
    top: 226,
  },
  proposals2: {
    marginLeft: -151,
    textAlign: "center",
  },
  proposals1: {
    top: 226,
  },
  ideasDaoAbout: {
    backgroundColor: Color.white,
    width: 390,
    height: 844,
    overflow: "hidden",
  },
});

export default IDEASDAOAbout;
