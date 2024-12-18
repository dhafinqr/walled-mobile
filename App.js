import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Button from "./component/Button";
import Input from "./component/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />

      {/* <TextInput
        style={styles.input}
        placeholder="Nomor HP"
        keyboardType="number-pad"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      /> */}

      <Button text="Login" bgColor="#19918F" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 233,
    height: 57,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    fontWeight: "bold",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
});
