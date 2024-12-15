import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import Button from "../component/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

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

      <Button text="Login" bgColor="#19918F" />

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <Link href="/register" style={styles.registerLink}>Register Here</Link>
      </View>
      <Link href="/(home)" style={styles.registerLink}>Home Here</Link>
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
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row", // Agar teks dan link berada dalam satu baris
    alignItems: "center", // Vertikal rata tengah
    justifyContent: "flex-start", // Horizontal rata kiri
    width: "100%", // Mengambil lebar penuh dari layar
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: "#000",
  },
  registerLink: {
    fontSize: 14,
    color: "#19918F",
    marginLeft: 5, // Jarak antara teks "Don't have an account?" dan "Register Here"
  },
});
