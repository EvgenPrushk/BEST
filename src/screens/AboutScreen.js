import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>It is best app for notes </Text>
      <Text >
        Version app <Text style={styles.version}>7.7.7</Text>{" "}
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "About the application",

  headerLeft: ()=> (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take phone"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  version: {
    fontFamily: "open-bold",
  },
});
