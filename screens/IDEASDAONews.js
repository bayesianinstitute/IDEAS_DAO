import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerCard from "../components/ContainerCard";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const IDEASDAONews = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    console.warn("Login button pressed"); // Display a warning in the console
    navigation.navigate("IDEASDAOLogin");
  };

  return (
    <ScrollView>
    <View style={styles.ideasDaoNews}>
      <Image
        style={styles.ideasDaoNewsChild}
        contentFit="cover"
        source={require("../assets/rectangle-70.png")}
      />
      <Text style={styles.hello}>Hello</Text>
      <View style={styles.loginButtonContainer}>
        <Pressable
          style={[styles.loginButtonBackground]}
          onPress={handleLoginPress}
        >
          <Text style={styles.login1}>Login</Text>
        </Pressable>
      </View>
      <Text style={[styles.recent, styles.news1Typo]}>Recent</Text>
      <Text style={[styles.popularReads, styles.news1Typo]}>Popular Reads</Text>
      <View style={[styles.vectorParent, styles.vectorPosition]}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-77.png")}
        />
        <Text style={styles.generativeAi}>Generative A.I.</Text>
      </View>
      <View style={[styles.vectorGroup, styles.web3Position]}>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Text style={[styles.all, styles.aiPosition]}>All</Text>
      </View>
      <View style={[styles.web3, styles.web3Position]}>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Text style={[styles.web31, styles.aiPosition]}>Web3</Text>
      </View>
      <View style={[styles.vectorContainer, styles.vectorPosition]}>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-76.png")}
        />
        <Text style={[styles.ai, styles.aiPosition]}>A.I</Text>
      </View>
      <View style={[styles.vectorContainer, styles.vectorPosition]}>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-76.png")}
        />
        <Text style={[styles.ai, styles.aiPosition]}>A.I</Text>
      </View>
      <Pressable
        style={[styles.newsArticles, styles.menuPosition]}
        onPress={() => navigation.navigate("IDEASDAOArticle")}
      >
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IDEASDAOArticle")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-782.png")}
          />
        </Pressable>
        <Image
          style={[styles.newsArticlesChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-792.png")}
        />
      </Pressable>
      <View style={styles.aiArticles}>
        <ContainerCard
          articleTitle="OpenAI CEO Touts Risks and Opportunity at Tech Summit"
          articleImageUrl={require("../assets/rectangle-802.png")}
          articleDuration="4 mins"
        />
        <ContainerCard
          articleTitle="Meta AI Shows Off Voicebox’s Multilingual Speech Abilities"
          articleImageUrl={require("../assets/rectangle-803.png")}
          articleDuration="8 mins"
          propTop={99}
          propLeft={2}
          propWidth={237}
          propTop1={67}
        />
        <ContainerCard
          articleTitle={`Google Cloud Launches AI
Powered Anti-Money Product`}
          articleImageUrl={require("../assets/rectangle-804.png")}
          articleDuration="8 mins"
          propTop={198}
          propLeft={2}
          propWidth={237}
          propTop1={67}
        />
        <ContainerCard
          articleTitle="FEC says it doesn’t have authority to regulate AI content"
          articleImageUrl={require("../assets/rectangle-805.png")}
          articleDuration="8 mins"
          propTop={297}
          propLeft={2}
          propWidth={237}
          propTop1={67}
        />
        <ContainerCard
          articleTitle="OpenAI CEO Touts Risks and Opportunity at Tech Summit"
          articleImageUrl={require("../assets/rectangle-802.png")}
          articleDuration="4 mins"
          propTop={395}
          propLeft={0}
          propWidth={234}
          propTop1={462}
        />
        <ContainerCard
          articleTitle="Meta AI Shows Off Voicebox’s Multilingual Speech Abilities"
          articleImageUrl={require("../assets/rectangle-803.png")}
          articleDuration="8 mins"
          propTop={494}
          propLeft={0}
          propWidth={237}
          propTop1={67}
        />
        <ContainerCard
          articleTitle={`Google Cloud Launches AI
Powered Anti-Money Product`}
          articleImageUrl={require("../assets/rectangle-804.png")}
          articleDuration="8 mins"
          propTop={593}
          propLeft={0}
          propWidth={237}
          propTop1={67}
        />
        <ContainerCard
          articleTitle="FEC says it doesn’t have authority to regulate AI content"
          articleImageUrl={require("../assets/rectangle-805.png")}
          articleDuration="8 mins"
          propTop={692}
          propLeft={0}
          propWidth={237}
          propTop1={67}
        />
      </View>
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.menu1, styles.newsPosition]}>
          <View style={[styles.news, styles.newsPosition]}>
            <Text style={[styles.news1, styles.news1Typo]}>News</Text>
            <Image
              style={styles.newsChild}
              contentFit="cover"
              source={require("../assets/vector-2861.png")}
            />
          </View>
          <Pressable
            style={styles.events}
            onPress={() => navigation.navigate("IDEASDAOConferences")}
          >
            <Text style={[styles.events1, styles.ideas1Typo]}>Events</Text>
          </Pressable>
          <Pressable
            style={styles.ideas}
            onPress={() => navigation.navigate("IDEASDAO")}
          >
            <Text style={[styles.ideas1, styles.ideas1Typo]}>IDEAS</Text>
          </Pressable>
          <Pressable
            style={styles.portfolio}
            onPress={() => navigation.navigate("IDEASDAOPortfolio")}
          >
            <Text style={[styles.ideas1, styles.ideas1Typo]}>Portfolio</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.share}
        onPress={() => Linking.openURL("mailto:join@ideas")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/share.png")}
        />
      </Pressable>
      <Pressable
        style={styles.research}
        onPress={() => navigation.navigate("IDEASDAOInvestment")}
      >
        <Text style={[styles.investment, styles.ideas1Typo]}>Investment</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  news1Typo: {
    height: 24,
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },

  loginButtonBackground: {
    backgroundColor: "red", // Red background color for the Login button
    padding: 10, // Add padding to create a larger pressable area
    borderRadius: 8, // Add borderRadius for rounded corners
  },
  loginButtonContainer: {
    alignSelf: "center", // Center the button horizontally
    marginTop: 20, // Add top margin for spacing
  },



  vectorPosition: {
    top: 162,
    height: 20,
    left: "50%",
    position: "absolute",
  },
  framePosition: {
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    height: 20,
    position: "absolute",
  },
  web3Position: {
    width: 63,
    top: 162,
    height: 23,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  aiPosition: {
    width: 61,
    left: 2,
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  menuPosition: {
    width: 348,
    marginLeft: -153,
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 143,
    width: 251,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  newsPosition: {
    height: 28,
    top: 0,
    position: "absolute",
  },
  ideas1Typo: {
    color: Color.darkgray_100,
    height: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  ideasDaoNewsChild: {
    marginLeft: -156,
    top: 35,
    borderRadius: Border.br_lgi,
    width: 57,
    height: 59,
    left: "50%",
    position: "absolute",
  },
  hello: {
    marginLeft: -96,
    top: 50,
    fontSize: FontSize.size_sm,
    color: Color.gray_100,
    width: 60,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  login1: {
    marginLeft: -93,
    fontSize: FontSize.size_3xl,
    width: 75,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 23,
    textAlign: "center",
  },
  login: {
    top: 65,
    left: "50%",
    position: "absolute",

  },
  loginButtonBackground: {
    backgroundColor: "red", // Red background color for the Login button
  },


  recent: {
    marginLeft: -145,
    top: 209,
    width: 71,
    left: "50%",
  },
  popularReads: {
    marginLeft: -149,
    top: 405,
    width: 124,
    left: "50%",
  },
  frameChild: {
    width: 125,
  },
  generativeAi: {
    left: 4,
    width: 117,
    color: Color.gray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: 0,
    height: 20,
    textAlign: "center",
    position: "absolute",
  },
  vectorParent: {
    marginLeft: 71,
    width: 118,
    height: 20,
  },
  frameItem: {
    width: 66,
  },
  all: {
    color: Color.gray_200,
    height: 23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorGroup: {
    marginLeft: -153,
    width: 63,
  },
  web31: {
    color: Color.gray_200,
    fontFamily: FontFamily.interRegular,
    height: 23,
  },
  web3: {
    marginLeft: -76,
  },
  ai: {
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    height: 20,
  },
  vectorContainer: {
    marginLeft: 1,
    width: 62,
    height: 20,
    backgroundColor: Color.white,
  },
  icon: {
    borderRadius: Border.br_7xs,
  },
  wrapper: {
    top: 1,
    left: 0,
  },
  newsArticlesChild: {
    left: 266,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  newsArticles: {
    top: 237,
    height: 144,
  },
  aiArticles: {
    marginLeft: -162,
    top: 443,
    width: 338,
    height: 411,
    left: "50%",
    position: "absolute",
  },
  news1: {
    width: 126,
    left: 0,
    top: 0,
  },
  newsChild: {
    top: 26,
    left: 33,
    width: 65,
    height: 3,
    position: "absolute",
  },
  news: {
    width: 126,
    left: 0,
  },
  events1: {
    width: 126,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  events: {
    left: 210,
    top: 0,
    position: "absolute",
  },
  ideas1: {
    width: 107,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  ideas: {
    left: 350,
    top: 0,
    position: "absolute",
  },
  portfolio: {
    left: 440,
    top: 0,
    position: "absolute",
  },
  menu1: {
    left: -23,
    width: 547,
  },
  menu: {
    top: 114,
    height: 33,
    backgroundColor: Color.white,
  },
  icon1: {
    marginLeft: 141,
  },
  share: {
    top: 55,
    width: 26,
    height: 22,
    left: "50%",
    position: "absolute",
  },
  investment: {
    width: 119,
    marginLeft: -76,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.darkgray_100,
  },
  research: {
    top: 113,
    left: "50%",
    position: "absolute",
  },
  ideasDaoNews: {
    flex: 1,
    height: 864,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IDEASDAONews;
