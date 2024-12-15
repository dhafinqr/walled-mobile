import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const Amount = ({ text = "Amount", balance = 10000000 }) => (
  <View style={styles.container}>
    {/* Placeholder */}
    <Text style={styles.placeholder}>{text}</Text>

    {/* IDR and Input */}
    <View style={styles.inputContainer}>
      <Text style={styles.idr}>IDR</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="100.000"
        placeholderTextColor="#B3B3B3"
      />
    </View>

    {/* Divider Line */}
    <View style={styles.divider} />

    {/* Balance */}
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceLabel}>Balance</Text>
      <Text style={styles.balanceValue}>IDR {balance.toLocaleString("id-ID")}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  placeholder: {
    color: "#B3B3B3",
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  idr: {
    fontSize: 16,
    marginRight: 8,
    color: "#000000",
  },
  input: {
    flex: 1,
    fontSize: 36,
    color: "#000000",
  },
  divider: {
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#B3B3B3",
  },
  balanceValue: {
    fontSize: 14,
    color: "#19918F",
  },
});

export default Amount;
