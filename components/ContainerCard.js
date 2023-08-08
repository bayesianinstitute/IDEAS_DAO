import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerCard = ({
  articleTitle,
  articleImageUrl,
  articleDuration,
  propTop,
  propLeft,
  propWidth,
  propTop1,
}) => {
  const openAIStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const openAICEOToutsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const ellipseIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
    };
  }, [propTop1]);

  return (
    <View style={[styles.openAi, styles.openPosition, openAIStyle]}>
      <Text style={[styles.openaiCeoTouts, openAICEOToutsStyle]}>
        {articleTitle}
      </Text>
      <Image
        style={[styles.openAiChild, styles.openPosition]}
        contentFit="cover"
        source={articleImageUrl}
      />
      <Text style={[styles.ai, styles.aiTypo]}>A.I.</Text>
      <Text style={[styles.mins, styles.aiTypo]}>{articleDuration}</Text>
      <Image
        style={[styles.openAiItem, ellipseIconStyle]}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  openPosition: {
    height: 78,
    top: 0,
    position: "absolute",
  },
  aiTypo: {
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 60,
    position: "absolute",
  },
  openaiCeoTouts: {
    top: 14,
    left: 5,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    width: 234,
    height: 53,
    color: Color.black,
    position: "absolute",
  },
  openAiChild: {
    left: 243,
    borderRadius: Border.br_smi,
    width: 90,
  },
  ai: {
    left: 0,
    width: 37,
    color: Color.black,
  },
  mins: {
    left: 45,
    color: Color.gray_100,
    width: 63,
  },
  openAiItem: {
    top: 67,
    left: 49,
    width: 3,
    height: 3,
    position: "absolute",
  },
  openAi: {
    left: 2,
    width: 333,
  },
});

export default ContainerCard;
