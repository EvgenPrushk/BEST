import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import  { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../../src/store/actions/post";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };
  // create dispatch
  const dispatch = useDispatch()

  // return { } for dispatch and dispatch loadPosts
  useEffect(() => {
   dispatch(loadPosts())
  }, [dispatch])

// we get acces to the state = 
  const allPosts = useSelector(state => state.post.allPosts)
  const loading = useSelector(state => state.post.loading)

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    )
  }

  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "My blog",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take phone"
        iconName="ios-camera"
        onPress={() => navigation.push("Create")}
      />
    </HeaderButtons>
  ),
  headerLeft:  (
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})