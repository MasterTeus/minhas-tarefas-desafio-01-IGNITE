import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
          do
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#764edd",
  },
  header: {
    paddingBottom: 44,
    backgroundColor: "#764edd",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
});
