import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { useDispatch } from "react-redux";
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const imgRef = useRef();

  const dispatch = useDispatch();
  const saveHandler = () => {
    const post = {
      // add date in new post
      date: new Date().toJSON(),
      // add text
      text: text,
      // add photo for image
      img: imgRef.current,
      booked: false,
    };
    dispatch(addPost(post));
    //redirect Main screen
    navigation.navigate("Main");
  };
  const photoPickHandler = (uri) => {
    imgRef.current = uri;
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new post</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Enter post text"
            valuse={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Create post"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Create post",
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
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
