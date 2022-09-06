import * as React from "react";
import { View, Text, Image } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text
        onPress={() => alert("This is the Home screen.")}
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#1a8cff",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: 36,
          top: 109,
          left: 132,
        }}
      >
        Freelancer
      </Text>
    </View>
  );
}
