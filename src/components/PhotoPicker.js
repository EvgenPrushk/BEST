import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";


import { View, StyleSheet, Button, Image, Alert } from "react-native";

async function askForPermission() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.MEDIA_LIBRARY
  );
  if (status !== "granted") {
    Alert.alert("Error", "You have not give permissions for create photo");
    return false;  
  }
  return true;
}

// async function askForPermission() {
//   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(
// //     Camera,
   
// //   );
// //   if (status !== "granted") {
// //     Alert.alert("Error", "You have not give permissions for create photo");
// //     return false;
// //   }
// //   return true;
// // }
// ImagePicker.requestMediaLibraryPermissionsAsync();


export const PhotoPicker = ({ onPick }) => {
  //State for image
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermission();

    if (!hasPermissions) {
      return;
    }
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });
    setImage(img.uri);
    onPick(img.uri);
  };
  return (
    <View style={styles.wrapper}>
      <Button title="Create photo" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});
