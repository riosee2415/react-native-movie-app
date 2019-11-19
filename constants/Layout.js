import { Dimensions } from "react-native";

// 현재 스크린의 width와 height값을 얻어온다.
const { width, height } = Dimensions.get("screen");

export default {
  width,
  height
};
