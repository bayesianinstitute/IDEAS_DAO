import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import IdeasDaoContainer from "../components/IdeasDaoContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IDEASDAONewProposal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoNewProposal}>
      <View style={[styles.menuDao, styles.aboutPosition]}>
        <Pressable
          style={[styles.proposals, styles.aboutPosition]}
          onPress={() => navigation.navigate("IDEASDAO")}
        >
          <Text style={[styles.proposals1, styles.aboutTypo]}>Proposals</Text>
        </Pressable>
        <View style={[styles.newProposal, styles.newPosition]}>
          <Image
            style={[styles.newProposalChild, styles.newPosition]}
            contentFit="cover"
            source={require("../assets/vector-316.png")}
          />
          <Text style={[styles.create, styles.textTypo]}>Create</Text>
        </View>
        <Text style={[styles.about, styles.aboutTypo]}>About</Text>
        <Pressable
          style={[styles.proposals, styles.aboutPosition]}
          onPress={() => navigation.navigate("IDEASDAODelegate")}
        >
          <Text style={[styles.delegate1, styles.aboutTypo]}>Delegate</Text>
        </Pressable>
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
      <View style={[styles.join2, styles.joinLayout]}>
        <LinearGradient
          style={[styles.joinChild, styles.joinLayout]}
          locations={[0.24, 1]}
          colors={["#f316d0", "#000"]}
        />
        <Text style={[styles.join1, styles.join1Position]}>Submit</Text>
      </View>
      <Text style={[styles.title, styles.textPosition]}>Title</Text>
      <TextInput
        style={[styles.titleForYourProposal, styles.inputTextBorder]}
        placeholder="Title for your proposal"
      />
      <View style={[styles.proposalDescription, styles.inputTextPosition]}>
        <Text style={[styles.description, styles.textPosition]}>
          Description
        </Text>
        <RNPTextInput
          style={[styles.inputText, styles.inputTextPosition]}
          placeholder="Type your proposal here"
          mode="flat"
          theme={{ colors: { background: "rgba(217, 217, 217, 0)" } }}
        />
        <Text style={[styles.text, styles.textPosition]}>0/20,000</Text>
      </View>
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
  newPosition: {
    width: 50,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  textPosition: {
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  inputTextBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.gainsboro,
  },
  inputTextPosition: {
    width: 337,
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
  newProposalChild: {
    marginLeft: -25,
    top: 22,
    height: 3,
  },
  create: {
    marginLeft: -23,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  newProposal: {
    marginLeft: -52.5,
    top: 0,
    height: 23,
  },
  about: {
    marginLeft: 116.5,
    textAlign: "center",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  delegate1: {
    marginLeft: 34.5,
    textAlign: "center",
  },
  menuDao: {
    marginLeft: -158,
    top: 226,
    width: 315,
    height: 23,
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
    top: 176,
    marginLeft: -62,
    width: 132,
  },
  join2: {
    top: 701,
    marginLeft: -62,
    width: 132,
  },
  title: {
    marginLeft: -157,
    top: 261,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  titleForYourProposal: {
    marginLeft: -134,
    top: 283,
    borderRadius: Border.br_8xl,
    width: 228,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  description: {
    marginLeft: -154.5,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.black,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  inputText: {
    marginLeft: -168.5,
    top: 27,
    borderRadius: Border.br_9xs,
    height: 332,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.gainsboro,
  },
  text: {
    marginLeft: 129.5,
    top: 10,
    fontSize: FontSize.size_5xs,
    color: Color.gray_100,
    width: 39,
    height: 18,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  proposalDescription: {
    marginLeft: -172,
    top: 322,
    height: 359,
  },
  ideasDaoNewProposal: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IDEASDAONewProposal;
