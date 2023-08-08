import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResearchCard from "../components/ResearchCard";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";


const IDEASDAOConferences = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.ideasDaoConferences}>
      <Image
        style={styles.ideasDaoConferencesChild}
        contentFit="cover"
        source={require("../assets/rectangle-701.png")}
      />
      <Text style={styles.hello}>Hello</Text>
      <Pressable
        style={[styles.login, styles.menuPosition]}
        onPress={() => navigation.navigate("IDEASDAOLogin")}
      >
        <Text style={styles.login1}>Login</Text>
      </Pressable>
      <Text style={[styles.upcoming, styles.eventsTypo]}>Upcoming</Text>
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
        articleThumbnailSize={require("../assets/rectangle-781.png")}
        articleTitle="OpenAI CEO Touts Risks and Opportunity at Tech Summit"
        articleImageUrl={require("../assets/rectangle-791.png")}
        newsTitle="OpenAI CEO Touts Risks and Opportunity at Tech Summit"
        thumbnailSize={require("../assets/rectangle-801.png")}
        propWidth={234}
        onGenerativeAIPress={() => navigation.navigate("IDEASDAOArticle")}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.newsParent, styles.newsParentPosition]}>
          <Pressable
            style={[styles.news, styles.newsPosition]}
            onPress={() => navigation.navigate("IDEASDAONews")}
          >
            <Text style={[styles.news1, styles.news1Typo]}>News</Text>
          </Pressable>
          <Pressable
            style={[styles.research, styles.newsPosition]}
            onPress={() => navigation.navigate("IDEASDAOInvestment")}
          >
            <Text style={[styles.news1, styles.news1Typo]}>Investment</Text>
          </Pressable>
          <View style={[styles.conference, styles.newsParentPosition]}>
            <Text style={[styles.events, styles.newsPosition]}>{`Events
`}</Text>
            <Image
              style={styles.conferenceChild}
              contentFit="cover"
              source={require("../assets/vector-2871.png")}
            />
          </View>
          <Pressable
            style={[styles.ideas, styles.newsPosition]}
            onPress={() => navigation.navigate("IDEASDAO")}
          >
            <Text style={[styles.ideas1, styles.news1Typo]}>IDEAS</Text>
          </Pressable>
          <Pressable
            style={styles.portfolio}
            onPress={() => navigation.navigate("IDEASDAOPortfolio")}
          >
            <Text style={[styles.ideas1, styles.news1Typo]}>Portfolio</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.share}
        onPress={() => Linking.openURL("mailto:join@ideas")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/share1.png")}
        />
      </Pressable>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  menuPosition: {
    left: "50%",
    position: "absolute",
  },
  eventsTypo: {
    height: 24,
    fontSize: FontSize.size_lg,
    color: Color.black,
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
  newsParentPosition: {
    height: 25,
    top: 0,
    position: "absolute",
  },
  newsPosition: {
    top: 0,
    position: "absolute",
  },
  news1Typo: {
    color: Color.darkgray_100,
    height: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  ideasDaoConferencesChild: {
    marginLeft: -176,
    top: 25,
    borderRadius: Border.br_lgi,
    height: 59,
    width: 61,
    left: "50%",
    position: "absolute",
  },
  hello: {
    marginLeft: -112,
    fontSize: FontSize.size_sm,
    color: Color.gray_100,
    width: 63,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 40,
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
  },
  upcoming: {
    marginLeft: -164,
    top: 199,
    width: 97,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  },
  news: {
    left: 0,
  },
  research: {
    left: 109,
  },
  events: {
    width: 126,
    left: 0,
    height: 24,
    fontSize: FontSize.size_lg,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  conferenceChild: {
    top: 22,
    left: 11,
    width: 105,
    height: 6,
    position: "absolute",
  },
  conference: {
    left: 241,
    width: 126,
  },
  ideas1: {
    width: 107,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  ideas: {
    left: 367,
  },
  portfolio: {
    left: 459,
    top: 1,
    position: "absolute",
  },
  newsParent: {
    width: 566,
    left: 0,
  },
  menu: {
    marginLeft: -198,
    top: 104,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 394,
    height: 28,
  },
  icon: {
    marginLeft: 148,
    height: "100%",
    width: "100%",
  },
  share: {
    width: 27,
    height: 22,
    top: 40,
    left: "50%",
    position: "absolute",
  },
  ideasDaoConferences: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IDEASDAOConferences;
