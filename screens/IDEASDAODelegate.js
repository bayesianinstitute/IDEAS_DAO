import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import IdeasDaoContainer from "../components/IdeasDaoContainer";
import DelegateCard from "../components/DelegateCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IDEASDAODelegate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoDelegate}>
      <View style={styles.menuDao}>
        <Pressable
          style={[styles.proposals, styles.aboutPosition]}
          onPress={() => navigation.navigate("IDEASDAO")}
        >
          <Text style={[styles.proposals1, styles.aboutTypo]}>Proposals</Text>
        </Pressable>
        <Pressable
          style={[styles.proposals, styles.aboutPosition]}
          onPress={() => navigation.navigate("IDEASDAONewProposal")}
        >
          <Text style={[styles.create1, styles.aboutTypo]}>Create</Text>
        </Pressable>
        <Text style={[styles.about, styles.aboutTypo]}>About</Text>
        <View style={styles.vectorParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-3161.png")}
          />
          <Text style={styles.delegate}>Delegate</Text>
        </View>
      </View>
      <IdeasDaoContainer />
      <Pressable
        style={[styles.arrowAltLeft, styles.aboutPosition]}
        onPress={() => navigation.navigate("IDEASDAOConferences")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-alt-left.png")}
        />
      </Pressable>
      <DelegateCard />
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
      <Text style={[styles.topDelegates, styles.searchByPosition]}>
        Top delegates
      </Text>
      <Text style={[styles.searchBy, styles.searchByPosition]}>Search By</Text>
      <TextInput
        style={[styles.ideasDaoDelegateChild, styles.join1Position]}
        placeholder="Address or ENS name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutPosition: {
    left: "50%",
    position: "absolute",
  },
  aboutTypo: {
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
  join1Position: {
    height: 24,
    left: "50%",
    position: "absolute",
  },
  searchByPosition: {
    textAlign: "left",
    marginLeft: -157,
    color: Color.black,
    left: "50%",
    position: "absolute",
  },
  proposals1: {
    marginLeft: -157.5,
    textAlign: "center",
  },
  proposals: {
    top: 0,
  },
  create1: {
    marginLeft: -50.5,
    textAlign: "center",
  },
  about: {
    marginLeft: 116.5,
    textAlign: "center",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    top: 22,
    height: 3,
    marginLeft: -30,
    width: 60,
    left: "50%",
    position: "absolute",
  },
  delegate: {
    color: Color.black,
    marginLeft: -30,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    marginLeft: 34.5,
    width: 60,
    top: 0,
    height: 23,
    left: "50%",
    position: "absolute",
  },
  menuDao: {
    marginLeft: -158,
    top: 226,
    width: 315,
    height: 23,
    left: "50%",
    position: "absolute",
  },
  icon: {
    marginLeft: -180,
    height: "100%",
    width: "100%",
  },
  arrowAltLeft: {
    top: 12,
    width: 41,
    height: 41,
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
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 105,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  join: {
    marginLeft: -62,
    top: 176,
  },
  topDelegates: {
    top: 318,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    marginLeft: -157,
    fontSize: FontSize.size_sm,
  },
  searchBy: {
    top: 261,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginLeft: -157,
  },
  ideasDaoDelegateChild: {
    marginLeft: -134,
    top: 283,
    borderRadius: Border.br_8xl,
    backgroundColor: Color.gainsboro,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 228,
  },
  ideasDaoDelegate: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IDEASDAODelegate;
