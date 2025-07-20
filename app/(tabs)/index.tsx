import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  console.log("HomeScreen");

  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Zello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  }
});
