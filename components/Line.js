import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Line = ({
  itemCode,
  rectangleView,
  linePosition,
  lineTop,
  lineLeft,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
}) => {
  const lineStyle = useMemo(() => {
    return {
      ...getStyleValue("position", linePosition),
      ...getStyleValue("top", lineTop),
      ...getStyleValue("left", lineLeft),
    };
  }, [linePosition, lineTop, lineLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", vectorIconHeight),
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("top", vectorIconTop),
      ...getStyleValue("right", vectorIconRight),
      ...getStyleValue("bottom", vectorIconBottom),
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
  ]);

  return (
    <View style={[styles.line, lineStyle]}>
      {!rectangleView && <View style={[styles.lineChild, styles.lineLayout]} />}
      <View style={[styles.lineItem, styles.lineLayout]} />
      <Image
        style={[styles.lineInner, vectorIconStyle]}
        contentFit="cover"
        source={itemCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineLayout: {
    borderWidth: 2,
    borderColor: "#828282",
    borderStyle: "solid",
    borderBottomLeftRadius: Border.br_12xs,
    borderBottomRightRadius: Border.br_12xs,
    borderTopRightRadius: Border.br_12xs,
    width: "29.17%",
    height: "29.17%",
    position: "absolute",
    transform: [
      {
        rotate: "58deg",
      },
    ],
  },
  lineChild: {
    top: "58.33%",
    right: "37.5%",
    bottom: "12.5%",
    left: "33.33%",
    display: "none",
  },
  lineItem: {
    top: "45.83%",
    right: "4.17%",
    bottom: "25%",
    left: "66.67%",
  },
  lineInner: {
    height: "27.32%",
    width: "33.62%",
    top: "61.32%",
    right: "103.52%",
    bottom: "11.37%",
    left: "-37.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  line: {
    width: 24,
    height: 24,
    transform: [
      {
        rotate: "58deg",
      },
    ],
  },
});

export default Line;
