import React, { useState } from "react";
import { View, Text } from "react-native";

import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import MyCard from "../../components/MyCard";

export default function Index() {
  const [name, setName] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <MyCard>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Hello {name}
        </Text>

        <MyInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <MyButton
          title="Submit"
          onPress={() => alert(`Welcome ${name}`)}
        />
      </MyCard>
    </View>
  );
}
