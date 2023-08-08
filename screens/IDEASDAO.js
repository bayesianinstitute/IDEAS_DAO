import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import IdeasDaoContainer from "../components/IdeasDaoContainer";
import FormContainer1 from "../components/FormContainer1";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const IDEASDAO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDao}>
      <View style={[styles.menuDao, styles.menuDaoPosition]}>
        <View style={[styles.proposals, styles.menuDaoPosition]}>
          <Text style={[styles.proposals1, styles.aboutTypo]}>Proposals</Text>
          <Image
            style={[styles.proposalsChild, styles.proposalsPosition]}
            contentFit="cover"
            source={require("../assets/vector-3162.png")}
          />
        </View>
        <Pressable
          style={[styles.create, styles.proposalsPosition]}
          onPress={() => navigation.navigate("IDEASDAONewProposal")}
        >
          <Text style={[styles.create1, styles.aboutTypo]}>Create</Text>
        </Pressable>
        <Text style={[styles.about, styles.aboutTypo]}>About</Text>
        <Pressable
          style={[styles.create, styles.proposalsPosition]}
          onPress={() => navigation.navigate("IDEASDAODelegate")}
        >
          <Text style={[styles.delegate1, styles.aboutTypo]}>Delegate</Text>
        </Pressable>
      </View>
      <IdeasDaoContainer />
      <Pressable
        style={[styles.arrowAltLeft, styles.proposalsPosition]}
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
        <Text style={[styles.join1, styles.proposalsPosition]}>Join</Text>
      </Pressable>
      <View style={[styles.proposals2, styles.proposalsPosition]}>
        <FormContainer1 isActive="Active" />
        <FormContainer1
          isActive="Active"
          propTop={170}
          propBackgroundColor="rgba(34, 209, 30, 0.5)"
          propLeft={270}
        />
        <FormContainer1
          isActive="Active"
          propTop={341}
          propBackgroundColor="rgba(34, 209, 30, 0.5)"
          propLeft={270}
        />
        <FormContainer1
          isActive="Closed"
          propTop={509}
          propBackgroundColor="rgba(231, 25, 25, 0.8)"
          propLeft={267}
        />
        <FormContainer1
          isActive="Active"
          propTop={688}
          propBackgroundColor="rgba(231, 25, 25, 0.8)"
          propLeft={270}
        />
      </View>
      <View style={[styles.vectorParent, styles.vectorLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-76.png")}
        />
        <Text style={[styles.all, styles.allTypo]}>All</Text>
      </View>
      <View style={[styles.vectorGroup, styles.menuDaoPosition]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Text style={[styles.active, styles.allTypo]}>Active</Text>
        <View style={[styles.vectorContainer, styles.vectorLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-72.png")}
          />
          <Text style={[styles.closed, styles.allTypo]}>Closed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuDaoPosition: {
    height: 23,
    left: "50%",
    position: "absolute",
  },
  aboutTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  proposalsPosition: {
    left: "50%",
    position: "absolute",
  },
  joinLayout: {
    height: 35,
    width: 132,
    left: "50%",
    position: "absolute",
  },
  vectorLayout: {
    width: 66,
    height: 23,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    borderRadius: Border.br_9xs,
    width: 66,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  allTypo: {
    width: 61,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    height: 23,
    left: "50%",
    position: "absolute",
  },
  proposals1: {
    marginLeft: -33.75,
    color: Color.black,
    textAlign: "center",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  proposalsChild: {
    marginLeft: -33.25,
    top: 22,
    width: 67,
    height: 3,
  },
  proposals: {
    marginLeft: -157.5,
    width: 68,
    top: 0,
  },
  create1: {
    marginLeft: -50.5,
    color: Color.gray_200,
    textAlign: "center",
  },
  create: {
    top: 0,
  },
  about: {
    marginLeft: 116.5,
    color: Color.gray_200,
    textAlign: "center",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  delegate1: {
    marginLeft: 34.5,
    color: Color.gray_200,
    textAlign: "center",
  },
  menuDao: {
    marginLeft: -158,
    top: 226,
    width: 315,
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
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 105,
    height: 24,
    color: Color.white,
    textAlign: "center",
  },
  join: {
    marginLeft: -62,
    top: 176,
  },
  proposals2: {
    marginLeft: -162,
    top: 294,
    width: 326,
    height: 550,
  },
  groupChild: {
    marginLeft: -33,
  },
  all: {
    marginLeft: -31,
    color: Color.white,
  },
  vectorParent: {
    marginLeft: -160,
    top: 267,
  },
  groupItem: {
    marginLeft: -71.5,
  },
  active: {
    marginLeft: -69.5,
    color: Color.gray_200,
  },
  closed: {
    marginLeft: -30,
    color: Color.gray_200,
  },
  vectorContainer: {
    marginLeft: 5.5,
    top: 0,
  },
  vectorGroup: {
    marginLeft: -81,
    width: 143,
    top: 267,
  },
  ideasDao: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IDEASDAO;
