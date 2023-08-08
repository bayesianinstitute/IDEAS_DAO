import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IDEASDAOArticle = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoArticle}>
      <View style={styles.openaiArticle}>
        <View style={styles.generativeAi}>
          <Image
            style={styles.generativeAiChild}
            contentFit="cover"
            source={require("../assets/rectangle-781.png")}
          />
          <Text style={[styles.openaiCeoTouts, styles.atTheRecentTypo]}>
            OpenAI CEO Touts Risks and Opportunity at Tech Summit
          </Text>
          <Text style={[styles.atTheRecent, styles.atTheRecentTypo]}>
            At the recent Bloomberg Technology Summit in San Francisco, AI was
            the central topic. OpenAI's CEO, Sam Altman, recognized AI's
            potential to eradicate poverty but also its capacity to threaten
            humanity. Stability AI's CEO Emad Mostaque showcased a new AI model
            for realistic images, and Qualcomm's CEO Cristiano Amon revealed the
            development of high-performance chips for AI in smartphones.
            Globally, SoftBank's founder, Masayoshi Son, declared his ambitions
            to dominate in AI. Ant Group, AMD, Amazon’s cloud unit, and Hewlett
            Packard Enterprise also announced investments and developments in
            AI. Nvidia surpassed Tesla in popularity among ESG investors, while
            AI-related stocks surged. Despite the hype, concerns over AI’s
            misuse persisted, with states implementing regulations and President
            Joe Biden seeking international cooperation for AI safeguards. In an
            intriguing application, historians are utilizing AI to decipher
            historical codes. Meanwhile, lawyers were fined $5,000 for
            fabricating a ChatGPT court brief.
          </Text>
          <Text style={[styles.ai, styles.aiTypo]}>A.I.</Text>
          <Text style={[styles.text, styles.aiTypo]}>7/14</Text>
          <Image
            style={styles.generativeAiItem}
            contentFit="cover"
            source={require("../assets/ellipse-127.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.arrowAltLeft, styles.sharePosition]}
        onPress={() => navigation.navigate("IDEASDAOConferences")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-alt-left.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.share, styles.sharePosition]}
        onPress={() => Linking.openURL("mailto:join@ideas")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/share1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  atTheRecentTypo: {
    width: 323,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.black,
    position: "absolute",
  },
  aiTypo: {
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 0,
    position: "absolute",
  },
  sharePosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  generativeAiChild: {
    top: 31,
    borderRadius: Border.br_7xs,
    width: 324,
    height: 185,
    left: 4,
    position: "absolute",
  },
  openaiCeoTouts: {
    top: 237,
    fontSize: 24,
    height: 53,
    left: 4,
  },
  atTheRecent: {
    top: 311,
    left: 5,
    fontSize: FontSize.size_lg,
    height: 680,
  },
  ai: {
    width: 37,
    color: Color.black,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: 0,
  },
  text: {
    left: 45,
    color: Color.gray_100,
    width: 49,
  },
  generativeAiItem: {
    top: 7,
    left: 49,
    width: 3,
    height: 3,
    position: "absolute",
  },
  generativeAi: {
    height: 991,
    left: 0,
    top: 0,
    width: 328,
    position: "absolute",
  },
  openaiArticle: {
    marginLeft: -166,
    top: 67,
    height: 761,
    width: 328,
    left: "50%",
    position: "absolute",
  },
  icon: {
    marginLeft: -180,
  },
  arrowAltLeft: {
    top: 12,
    width: 41,
    height: 41,
  },
  icon1: {
    marginLeft: 135,
  },
  share: {
    top: 21,
    width: 27,
    height: 22,
  },
  ideasDaoArticle: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IDEASDAOArticle;
