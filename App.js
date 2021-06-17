import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Provider } from "react-redux";

import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import store from "./src/store/index";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
