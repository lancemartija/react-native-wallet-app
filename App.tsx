import { useLayoutEffect, useState } from "react";

// react navigation
import RootStack from "./navigators/RootStack";

// custom fonts
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();

      // load fonts
      await Font.loadAsync({
        "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
        "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
      });

      // wait a little bit to simulate a more realistic splash screen experience
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      await SplashScreen.hideAsync();
    }
  };

  useLayoutEffect(() => {
    loadResourcesAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }

  return <RootStack />;
}
