import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";
import { DB } from "../../db";
import FileSystem from "expo-file-system/src/ExponentFileSystemShim";

export const loadPosts = () => {
  return async (dispatch) => {
    // get post in database
    const post = DB.getPosts();
    // dispath data in App
    dispatch({
      type: LOAD_POSTS,
      payload: post,
    });
  };
};

export const toogleBooked = (id) => {
  return {
    type: TOGGLE_BOOKED,
    payload: id,
  };
};
export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

export const addPost = (post) => async (dispatch) => {
  // file name
  const fileName = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;
  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch (e) {
    console.log("Error", e);
  }

  const payload = { ...post, img: newPath };

  const id = await DB.createPost(payload);
  payload.id = id;

  dispatch({
    type: ADD_POST,
    payload,
  });
};
