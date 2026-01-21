import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function MyCard({ children }: Props) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 4,
  },
});
