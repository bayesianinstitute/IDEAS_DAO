import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import SendForm1 from "../components/SendForm1";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const IDEASDAOBuy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ideasDaoBuy}>
      <Image
        style={[styles.ideasDaoBuyChild, styles.ideasPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-701.png")}
      />
      <LinearGradient
        style={[styles.ideasDaoBuyItem, styles.ideasPosition]}
        locations={[0]}
        colors={["#d8d8d8"]}
      />
      <Text style={styles.hello}>Hello</Text>
      <Text style={styles.johnDoe}>John Doe</Text>
      <Image
        style={[styles.bellFillIcon, styles.bellFillIconLayout]}
        contentFit="cover"
        source={require("../assets/bell-fill.png")}
      />
      <View style={[styles.menu, styles.menuLayout]}>
        <View style={[styles.menu1, styles.menuLayout]}>
          <Pressable
            style={styles.newsletter}
            onPress={() => navigation.navigate("IDEASDAONews")}
          >
            <Text style={[styles.newsletter1, styles.ideas1Typo]}>
              Newsletter
            </Text>
          </Pressable>
          <Pressable
            style={styles.conferences}
            onPress={() => navigation.navigate("IDEASDAOConferences")}
          >
            <Text style={[styles.conferences1, styles.ideas1Typo]}>
              Conferences
            </Text>
          </Pressable>
          <Pressable
            style={styles.ideas}
            onPress={() => navigation.navigate("IDEASDAO")}
          >
            <Text style={[styles.ideas1, styles.ideas1Typo]}>IDEAS</Text>
          </Pressable>
          <View style={[styles.portfolio, styles.menuLayout]}>
            <Image
              style={styles.portfolioChild}
              contentFit="cover"
              source={require("../assets/vector-286.png")}
            />
            <Text style={[styles.portfolio1, styles.ideas1Typo]}>
              Portfolio
            </Text>
          </View>
        </View>
      </View>
      <FormContainer imageDimensions={require("../assets/tracking.png")} />
      <View style={[styles.buy, styles.buyPosition]}>
        <Image
          style={[styles.buyChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1381.png")}
        />
        <Text style={[styles.buy1, styles.buy1Typo]}>Buy</Text>
        <Image
          style={[styles.moneyLightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/money-light.png")}
        />
      </View>
      <SendForm1 />
      <View style={[styles.swap, styles.buyPosition]}>
        <Image
          style={[styles.buyChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1381.png")}
        />
        <Text style={[styles.swap1, styles.buy1Typo]}>Swap</Text>
        <Image
          style={[styles.moneyLightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/sort-arrow.png")}
        />
      </View>
      <View style={[styles.receive, styles.buyPosition]}>
        <Image
          style={[styles.receiveChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-1381.png")}
        />
        <Text style={[styles.receive1, styles.buy1Typo]}>Receive</Text>
        <Image
          style={[styles.reduceIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/reduce.png")}
        />
      </View>
      <View style={[styles.coins, styles.coinsLayout]}>
        <View style={[styles.coins1, styles.coinsLayout]}>
          <View style={[styles.eth, styles.coinsLayout]}>
            <Image
              style={styles.ethChild}
              contentFit="cover"
              source={require("../assets/ellipse-142.png")}
            />
            <Text style={[styles.ethereum, styles.textTypo3]}>Ethereum</Text>
            <Text style={[styles.text, styles.textTypo3]}>$1,240.20</Text>
            <Text style={[styles.text1, styles.textTypo2]}>+2.43%</Text>
            <Text style={[styles.eth1, styles.usdtClr]}>ETH</Text>
            <Image
              style={[styles.ethItem, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/vector-313.png")}
            />
          </View>
          <View style={[styles.tether, styles.coinsLayout]}>
            <Image
              style={styles.ethChild}
              contentFit="cover"
              source={require("../assets/ellipse-143.png")}
            />
            <Text style={[styles.tether1, styles.text2Typo]}>Tether</Text>
            <Text style={[styles.text2, styles.text2Typo]}>$1</Text>
            <Text style={[styles.text3, styles.textTypo2]}>+0.63%</Text>
            <Text style={[styles.usdt, styles.usdtClr]}>USDT</Text>
            <Image
              style={[styles.tetherItem, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/vector-314.png")}
            />
          </View>
          <View style={[styles.usdc, styles.usdcLayout]}>
            <Image
              style={styles.usdcChild}
              contentFit="cover"
              source={require("../assets/ellipse-1441.png")}
            />
            <Text style={[styles.usdCoin, styles.textTypo1]}>USD Coin</Text>
            <Text style={[styles.text4, styles.textTypo1]}>$0.99</Text>
            <Text style={[styles.text5, styles.textTypo]}>-0.33%</Text>
            <Text style={[styles.usdc1, styles.usdtClr]}>USDC</Text>
            <Image
              style={[styles.usdcItem, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/vector-314.png")}
            />
          </View>
          <View style={[styles.ideasCoin, styles.usdcLayout]}>
            <Image
              style={styles.usdcChild}
              contentFit="cover"
              source={require("../assets/ellipse-1442.png")}
            />
            <Text style={[styles.usdCoin, styles.textTypo1]}>IDEAS Coin</Text>
            <Text style={[styles.text6, styles.textTypo1]}>$3,045</Text>
            <Text style={[styles.text7, styles.textTypo]}>+320.34%</Text>
            <Text style={[styles.usdc1, styles.usdtClr]}>IDS</Text>
            <Image
              style={styles.ideasCoinItem}
              contentFit="cover"
              source={require("../assets/vector-314.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.ideasDaoBuyInner, styles.menuPosition]} />
      <View style={styles.rectangleView} />
      <View style={[styles.ideasDaoBuyChild1, styles.ideasChildLayout]} />
      <View style={[styles.ideasDaoBuyChild2, styles.ideasChildLayout]} />
      <Pressable
        style={styles.swap2}
        onPress={() => navigation.navigate("IDEASDAOPortfolio")}
      />
      <Image
        style={[styles.sortArrowIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sort-arrow.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1431.png")}
      />
      <Image
        style={[styles.ideasDaoBuyChild3, styles.bellFillIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1443.png")}
      />
      <Text style={[styles.tether2, styles.ids1Position]}>Tether</Text>
      <Text style={[styles.usdt1, styles.usdtClr]}>USDT</Text>
      <Text style={[styles.ids1, styles.ids1Position]}>IDS</Text>
      <Text style={[styles.ideasCoin2, styles.textTypo3]}>IDEAS Coin</Text>
      <Text style={[styles.text8, styles.textTypo3]}>3,302</Text>
      <Text style={[styles.swap3, styles.textTypo3]}>Swap</Text>
      <Text style={[styles.text9, styles.textTypo3]}>1</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IDEASDAOPortfolio")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-146.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ideasPosition: {
    borderRadius: Border.br_lgi,
    left: "50%",
    top: 25,
    position: "absolute",
  },
  bellFillIconLayout: {
    height: 36,
    width: 36,
    left: "50%",
    position: "absolute",
  },
  menuLayout: {
    height: 28,
    position: "absolute",
  },
  ideas1Typo: {
    height: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  buyPosition: {
    height: 81,
    top: 464,
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    height: 58,
    width: 58,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  buy1Typo: {
    top: 64,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  coinsLayout: {
    width: 339,
    position: "absolute",
  },
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_3xs,
    left: 289,
    color: Color.limegreen_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  usdtClr: {
    color: Color.gray_200,
    fontSize: FontSize.size_3xs,
  },
  itemLayout: {
    height: 1,
    width: 331,
    position: "absolute",
  },
  text2Typo: {
    top: 10,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.black,
    position: "absolute",
  },
  usdcLayout: {
    height: 67,
    width: 336,
    left: 3,
    position: "absolute",
  },
  textTypo1: {
    top: 7,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.black,
    position: "absolute",
  },
  textTypo: {
    top: 22,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  menuPosition: {
    width: 390,
    marginLeft: -195,
    left: "50%",
  },
  ideasChildLayout: {
    height: 56,
    width: 229,
    marginLeft: -121,
    borderRadius: Border.br_7xs,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  ids1Position: {
    marginLeft: -63,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
  },
  ideasDaoBuyChild: {
    marginLeft: -176,
    width: 61,
    height: 59,
  },
  ideasDaoBuyItem: {
    marginLeft: 115,
    width: 57,
    height: 55,
    backgroundColor: "transparent",
  },
  hello: {
    top: 40,
    color: Color.gray_100,
    width: 63,
    height: 23,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginLeft: -112,
    left: "50%",
    position: "absolute",
  },
  johnDoe: {
    marginLeft: -109,
    top: 55,
    fontSize: FontSize.size_3xl,
    width: 115,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 23,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  bellFillIcon: {
    marginLeft: 126,
    top: 35,
  },
  newsletter1: {
    width: 126,
    height: 24,
    color: Color.darkgray_100,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  newsletter: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  conferences1: {
    width: 126,
    height: 24,
    color: Color.darkgray_100,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  conferences: {
    left: 134,
    top: 0,
    position: "absolute",
  },
  ideas1: {
    width: 107,
    color: Color.darkgray_100,
    height: 24,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  ideas: {
    left: 260,
    top: 0,
    position: "absolute",
  },
  portfolioChild: {
    top: 26,
    left: 18,
    width: 71,
    height: 2,
    position: "absolute",
  },
  portfolio1: {
    width: 107,
    height: 24,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  portfolio: {
    left: 349,
    width: 107,
    top: 0,
  },
  menu1: {
    left: -120,
    width: 456,
    top: 0,
  },
  menu: {
    top: 104,
    width: 390,
    marginLeft: -195,
    left: "50%",
  },
  buyChild: {
    marginLeft: -29,
  },
  buy1: {
    marginLeft: -13,
  },
  moneyLightIcon: {
    marginLeft: -12,
    top: 13,
  },
  buy: {
    marginLeft: -162,
    width: 50,
    height: 81,
    top: 464,
  },
  swap1: {
    marginLeft: -19,
  },
  swap: {
    marginLeft: 108,
    width: 50,
    height: 81,
    top: 464,
  },
  receiveChild: {
    marginLeft: -28.5,
  },
  receive1: {
    marginLeft: -26.5,
  },
  reduceIcon: {
    marginLeft: -11.5,
    top: 12,
  },
  receive: {
    marginLeft: 16,
    width: 53,
    height: 81,
    top: 464,
  },
  ethChild: {
    width: 60,
    height: 60,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ethereum: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: 77,
    fontFamily: FontFamily.interRegular,
    top: 13,
  },
  text: {
    left: 269,
    fontSize: FontSize.size_xs,
    color: Color.black,
    top: 13,
  },
  text1: {
    top: 28,
    color: Color.limegreen_100,
  },
  eth1: {
    top: 30,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 77,
  },
  ethItem: {
    top: 72,
    left: 8,
    height: 1,
  },
  eth: {
    height: 73,
    left: 0,
    top: 0,
  },
  tether1: {
    left: 75,
  },
  text2: {
    left: 310,
  },
  text3: {
    color: Color.limegreen_100,
    top: 25,
    fontSize: FontSize.size_3xs,
    left: 289,
  },
  usdt: {
    top: 27,
    left: 80,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  tetherItem: {
    top: 70,
    left: 8,
    height: 1,
  },
  tether: {
    top: 86,
    height: 70,
    left: 0,
  },
  usdcChild: {
    width: 48,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  usdCoin: {
    left: 73,
  },
  text4: {
    left: 290,
  },
  text5: {
    color: Color.red_100,
    left: 290,
  },
  usdc1: {
    top: 24,
    left: 74,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  usdcItem: {
    top: 67,
    left: 5,
  },
  usdc: {
    top: 172,
  },
  text6: {
    left: 285,
  },
  text7: {
    left: 279,
    color: Color.limegreen_100,
  },
  ideasCoinItem: {
    top: 322,
    height: 0,
    width: 331,
    left: 8,
    position: "absolute",
  },
  ideasCoin: {
    top: 255,
  },
  coins1: {
    height: 322,
    left: 0,
    top: 0,
  },
  coins: {
    marginLeft: -171,
    top: 576,
    height: 268,
    left: "50%",
  },
  ideasDaoBuyInner: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    top: 0,
    position: "absolute",
    height: 844,
  },
  rectangleView: {
    marginLeft: -166,
    top: 226,
    borderRadius: 7,
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    width: 317,
    height: 323,
    left: "50%",
    position: "absolute",
  },
  ideasDaoBuyChild1: {
    top: 303,
  },
  ideasDaoBuyChild2: {
    top: 408,
  },
  swap2: {
    marginLeft: -52,
    top: 497,
    width: 93,
    borderRadius: Border.br_7xs,
    height: 23,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  sortArrowIcon1: {
    marginLeft: -18,
    top: 378,
  },
  ellipseIcon: {
    top: 309,
    width: 44,
    height: 44,
    marginLeft: -112,
    left: "50%",
    position: "absolute",
  },
  ideasDaoBuyChild3: {
    marginLeft: -108,
    top: 418,
  },
  tether2: {
    top: 316,
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  usdt1: {
    marginLeft: -58,
    top: 333,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: "50%",
  },
  ids1: {
    top: 438,
    color: Color.gray_200,
    fontSize: FontSize.size_3xs,
  },
  ideasCoin2: {
    marginLeft: -64,
    top: 421,
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: "50%",
  },
  text8: {
    marginLeft: 54,
    top: 321,
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: "50%",
  },
  swap3: {
    marginLeft: -22,
    top: 501,
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: "50%",
  },
  text9: {
    marginLeft: 69,
    top: 426,
    fontSize: FontSize.size_xs,
    color: Color.black,
    left: "50%",
  },
  icon: {
    marginLeft: -68,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 33,
    width: 100,
    height: 100,
    left: "50%",
    position: "absolute",
  },
  ideasDaoBuy: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IDEASDAOBuy;
