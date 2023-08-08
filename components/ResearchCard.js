import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ResearchCard = ({
  articleThumbnailSize,
  articleTitle,
  articleImageUrl,
  newsTitle,
  thumbnailSize,
  propWidth,
  onGenerativeAIPress,
}) => {
  const launchpadXYZPositioningItseStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.conferences}>
      <Pressable
        style={[styles.generativeAi, styles.web3Layout]}
        onPress={onGenerativeAIPress}
      >
        <Image
          style={[styles.generativeAiChild, styles.uscPosition]}
          contentFit="cover"
          source={articleThumbnailSize}
        />
        <Text style={[styles.isRndrAbout, styles.openaiTypo]}>
          {articleTitle}
        </Text>
        <Text style={[styles.ai, styles.textTypo]}>A.I.</Text>
        <Text style={[styles.text, styles.textLayout]}>7/14</Text>
        <Image
          style={[styles.generativeAiItem, styles.itemChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-127.png")}
        />
      </Pressable>
      <View style={[styles.usc, styles.uscPosition]}>
        <Image
          style={[styles.generativeAiChild, styles.uscPosition]}
          contentFit="cover"
          source={articleImageUrl}
        />
        <Text
          style={[
            styles.launchpadxyzPositioningItse,
            styles.openaiTypo,
            launchpadXYZPositioningItseStyle,
          ]}
        >
          {newsTitle}
        </Text>
        <Text style={[styles.ai1, styles.ai1Typo]}>A.I.</Text>
        <Text style={[styles.text1, styles.ai1Typo]}>7/15</Text>
        <Image
          style={[styles.uscItem, styles.itemChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-127.png")}
        />
      </View>
      <View style={[styles.ucla, styles.uscPosition]}>
        <Text style={[styles.openaiCeoTouts, styles.openaiTypo]}>
          OpenAI CEO Touts Risks and Opportunity at Tech Summit
        </Text>
        <Text style={[styles.ai2, styles.ai2Typo]}>A.I.</Text>
        <Text style={[styles.text2, styles.ai2Typo]}>8/1</Text>
        <Image
          style={[styles.uclaChild, styles.itemChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-127.png")}
        />
        <Image
          style={[styles.generativeAiChild, styles.uscPosition]}
          contentFit="cover"
          source={thumbnailSize}
        />
      </View>
      <View style={[styles.web3, styles.web3Layout]}>
        <Text style={[styles.openaiCeoTouts1, styles.openaiTypo]}>
          OpenAI CEO Touts Risks and Opportunity at Tech Summit
        </Text>
        <Text style={[styles.ai3, styles.textTypo]}>A.I.</Text>
        <Text style={[styles.text3, styles.textTypo]}>8/10</Text>
        <Image
          style={[styles.web3Child, styles.itemChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-127.png")}
        />
        <Image
          style={[styles.generativeAiChild, styles.uscPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-81.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  web3Layout: {
    height: 270,
    left: 0,
    width: 324,
    position: "absolute",
  },
  uscPosition: {
    left: 0,
    width: 324,
    position: "absolute",
  },
  openaiTypo: {
    height: 53,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo: {
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 252,
    position: "absolute",
  },
  textLayout: {
    width: 49,
    color: Color.gray_100,
    left: 87,
  },
  itemChildLayout: {
    height: 3,
    width: 3,
    position: "absolute",
  },
  ai1Typo: {
    top: 251,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  ai2Typo: {
    top: 241,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  generativeAiChild: {
    borderRadius: Border.br_7xs,
    height: 185,
    top: 0,
  },
  isRndrAbout: {
    width: 234,
    height: 53,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 47,
    top: 206,
  },
  ai: {
    width: 37,
    color: Color.black,
    left: 42,
  },
  text: {
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 252,
    position: "absolute",
  },
  generativeAiItem: {
    left: 91,
    width: 3,
    top: 259,
  },
  generativeAi: {
    top: 0,
  },
  launchpadxyzPositioningItse: {
    top: 205,
    width: 261,
    height: 53,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 47,
  },
  ai1: {
    width: 37,
    color: Color.black,
    left: 42,
  },
  text1: {
    width: 49,
    color: Color.gray_100,
    left: 87,
  },
  uscItem: {
    top: 258,
    left: 91,
    width: 3,
  },
  usc: {
    top: 291,
    height: 269,
  },
  openaiCeoTouts: {
    top: 195,
    width: 234,
    height: 53,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: 47,
  },
  ai2: {
    width: 37,
    color: Color.black,
    left: 42,
  },
  text2: {
    width: 44,
    color: Color.gray_100,
    left: 87,
    top: 241,
  },
  uclaChild: {
    top: 817,
    left: 91,
    width: 3,
  },
  ucla: {
    top: 569,
    height: 259,
  },
  openaiCeoTouts1: {
    left: 52,
    width: 234,
    height: 53,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    top: 206,
  },
  ai3: {
    width: 37,
    color: Color.black,
    left: 47,
  },
  text3: {
    left: 92,
    width: 48,
    color: Color.gray_100,
  },
  web3Child: {
    left: 96,
    top: 259,
  },
  web3: {
    top: 838,
  },
  conferences: {
    marginLeft: -162,
    top: 244,
    left: "50%",
    height: 600,
    width: 324,
    position: "absolute",
  },
});

export default ResearchCard;
