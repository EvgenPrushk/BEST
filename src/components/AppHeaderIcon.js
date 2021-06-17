import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import {} from 'react-native'
export const AppHeaderIcon = (props) => (
  <HeaderButton    
    iconSize={24}
    IconComponent={Ionicons}
    color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
    {...props}
  />
);