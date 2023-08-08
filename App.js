const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IDEASDAONews from "./screens/IDEASDAONews";
import IDEASDAOAbout from "./components/IDEASDAOAbout";
import IDEASDAOSignup from "./screens/IDEASDAOSignup";
import IDEASDAOConferences from "./screens/IDEASDAOConferences";
import IDEASDAOArticle from "./screens/IDEASDAOArticle";
import IDEASDAOInvestment from "./screens/IDEASDAOInvestment";
import IDEASDAOPortfolio from "./screens/IDEASDAOPortfolio";
import IDEASDAO from "./screens/IDEASDAO";
import IDEASDAODelegate from "./screens/IDEASDAODelegate";
import IDEASDAONewProposal from "./screens/IDEASDAONewProposal";
import IDEASDAOBuy from "./screens/IDEASDAOBuy";
import IDEASDAOWelcome from "./screens/IDEASDAOWelcome";
import IDEASDAOLogin from "./screens/IDEASDAOLogin";
import IDEASDAOPassword from "./screens/IDEASDAOPassword";
import IDEASDAOVerification from "./screens/IDEASDAOVerification";
import Line from "./components/Line";
import EntryPoint from "./components/EntryPoint";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IDEASDAONews"
              component={IDEASDAONews}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOSignup"
              component={IDEASDAOSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOConferences"
              component={IDEASDAOConferences}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOArticle"
              component={IDEASDAOArticle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOInvestment"
              component={IDEASDAOInvestment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOPortfolio"
              component={IDEASDAOPortfolio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAO"
              component={IDEASDAO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAODelegate"
              component={IDEASDAODelegate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAONewProposal"
              component={IDEASDAONewProposal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOBuy"
              component={IDEASDAOBuy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOWelcome"
              component={IDEASDAOWelcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOLogin"
              component={IDEASDAOLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOPassword"
              component={IDEASDAOPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IDEASDAOVerification"
              component={IDEASDAOVerification}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
