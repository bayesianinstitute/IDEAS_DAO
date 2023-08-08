import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ResearchCard from "../components/ResearchCard";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const IDEASDAOInvestment = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.ideasDaoInvestment}>
      <Image
        style={styles.ideasDaoInvestmentChild}
        contentFit="cover"
        source={require("../assets/rectangle-701.png")}
      />
    <LinearGradient
      style={styles.ideasDaoInvestmentItem}
      locations={[0, 1]} // Adding a second location value
      colors={["#d8d8d8", "#ffffff"]} // Adding a second color
    />
      <Text style={styles.hello}>Hello</Text>
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("IDEASDAOLogin")}
      >
        <Text style={styles.login1}>Login</Text>
      </Pressable>
      <Image
        style={styles.bellFillIcon}
        contentFit="cover"
        source={require("../assets/bell-fill.png")}
      />
      <Text style={[styles.research, styles.researchTypo]}>Research</Text>
      <View style={[styles.vectorParent, styles.groupChildPosition]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-77.png")}
        />
        <Text style={styles.generativeAi}>Generative A.I.</Text>
      </View>
      <View style={[styles.vectorGroup, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Text style={[styles.all, styles.aiPosition]}>All</Text>
      </View>
      <View style={[styles.vectorContainer, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Text style={[styles.web3, styles.aiPosition]}>Web3</Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-76.png")}
        />
        <Text style={[styles.ai, styles.aiPosition]}>A.I</Text>
      </View>
      <ResearchCard
        articleThumbnailSize={require("../assets/rectangle-7811.png")}
        articleTitle="Is RNDR About To Unsurp The Existing Establishment"
        articleImageUrl={require("../assets/rectangle-79.png")}
        newsTitle="Launchpad.XYZ Positioning Itself to Gain Huge Market Share"
        thumbnailSize={require("../assets/rectangle-80.png")}
        onGenerativeAIPress={() => navigation.navigate("IDEASDAOArticle")}
      />
      <View style={[styles.menu, styles.parentLayout]}>
        <View style={[styles.newsParent, styles.parentLayout]}>
          <Pressable
            style={styles.news}
            onPress={() => navigation.navigate("IDEASDAONews")}
          >
            <Text style={[styles.news1, styles.news1Typo]}>News</Text>
          </Pressable>
          <View style={[styles.vectorParent1, styles.parentLayout]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector-287.png")}
            />
            <Pressable
              style={styles.news}
              onPress={() => navigation.navigate("IDEASDAONews")}
            >
              <Text style={[styles.investment, styles.researchTypo]}>
                Investment
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={styles.ideas}
            onPress={() => navigation.navigate("IDEASDAO")}
          >
            <Text style={[styles.ideas1, styles.news1Typo]}>IDEAS</Text>
          </Pressable>
          <Pressable
            style={[styles.portfolio, styles.eventsPosition]}
            onPress={() => navigation.navigate("IDEASDAOPortfolio")}
          >
            <Text style={[styles.ideas1, styles.news1Typo]}>Portfolio</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.events, styles.eventsPosition]}
          onPress={() => navigation.navigate("IDEASDAOConferences")}
        >
          <Text style={[styles.events1, styles.news1Typo]}>Events</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  researchTypo: {
    height: 24,
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  groupChildPosition: {
    width: 125,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_9xs,
    top: 0,
    height: 20,
  },
  groupPosition: {
    width: 66,
    left: "50%",
    position: "absolute",
  },
  aiPosition: {
    marginLeft: -31,
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "center",
    width: 61,
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 25,
    position: "absolute",
  },
  news1Typo: {
    color: Color.darkgray_100,
    height: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  eventsPosition: {
    top: 1,
    position: "absolute",
  },
  ideasDaoInvestmentChild: {
    marginLeft: -176,
    height: 59,
    width: 61,
    borderRadius: Border.br_lgi,
    left: "50%",
    top: 25,
    position: "absolute",
  },
  ideasDaoInvestmentItem: {
    marginLeft: 115,
    width: 57,
    height: 55,
    backgroundColor: "transparent",
    borderRadius: Border.br_lgi,
    top: 25,
    left: "50%",
    position: "absolute",
  },
  hello: {
    marginLeft: -112,
    top: 40,
    fontSize: FontSize.size_sm,
    color: Color.gray_100,
    width: 63,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  login1: {
    marginLeft: -109,
    fontSize: FontSize.size_3xl,
    width: 81,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 23,
    textAlign: "center",
  },
  login: {
    top: 55,
    left: "50%",
    position: "absolute",
  },
  bellFillIcon: {
    marginLeft: 126,
    top: 35,
    width: 36,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  research: {
    marginLeft: -164,
    top: 199,
    width: 97,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -62.5,
    width: 125,
    left: "50%",
    position: "absolute",
  },
  generativeAi: {
    marginLeft: -58.5,
    width: 117,
    color: Color.gray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: 0,
    height: 20,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    marginLeft: 64,
    height: 20,
    top: 152,
  },
  groupItem: {
    marginLeft: -33,
    borderRadius: Border.br_9xs,
    top: 0,
    height: 20,
  },
  all: {
    color: Color.gray_200,
    height: 23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorGroup: {
    marginLeft: -172,
    top: 152,
    height: 23,
  },
  web3: {
    color: Color.gray_200,
    fontFamily: FontFamily.interRegular,
    height: 23,
  },
  vectorContainer: {
    marginLeft: -91,
    top: 152,
    height: 23,
  },
  ai: {
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    height: 20,
  },
  groupView: {
    marginLeft: -10,
    height: 20,
    top: 152,
  },
  news1: {
    width: 126,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.darkgray_100,
  },
  news: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    top: 22,
    left: 18,
    width: 90,
    height: 3,
    position: "absolute",
  },
  investment: {
    width: 126,
  },
  vectorParent1: {
    left: 105,
    width: 126,
    top: 0,
  },
  ideas1: {
    width: 107,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  ideas: {
    left: 359,
    top: 0,
    position: "absolute",
  },
  portfolio: {
    left: 451,
  },
  newsParent: {
    left: -28,
    width: 558,
    top: 0,
  },
  events1: {
    width: 126,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  events: {
    left: 205,
  },
  menu: {
    top: 104,
    width: 369,
    marginLeft: -172,
    left: "50%",
  },
  ideasDaoInvestment: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IDEASDAOInvestment;
