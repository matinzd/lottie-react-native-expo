import React from "react";
import LottieView from "lottie-react-native";

export default function Animation() {
  return (
    <LottieView
      source={require("./assets/animation.json")}
      autoPlay={true}
      style={{ width: "100%", height: "100%" }}
      loop={true}
      speed={2.2}
    />
  );
}
