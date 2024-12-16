import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import Button from "../component/Button";
import { z } from "zod";
import { useState } from "react";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export default function App() {
  const [form, setForm] = useState({});
  const [errorMsg, setErrors] = useState({});

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      LoginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" })); 
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message })); 
    }
  };

  const handleSubmit = () => {
    try {
      LoginSchema.parse(form);
    } catch (err) {
      const errors = {};
      err.errors.forEach((item) => {
        const key = item.path[0];
        errors[key] = item.message;
      });
      setErrors(errors);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("email", text)}
      />
       {errorMsg.email ? <Text style={styles.errorMsg}>{errorMsg.email}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
      />
      {errorMsg.password ? <Text style={styles.errorMsg}>{errorMsg.password}</Text> : null}

      <Button handlePress={handleSubmit} text="Login" bgColor="#19918F" />

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
  errorMsg: {
    color: "red",
    fontSize: 12,
    width: "100%",
    textAlign: "left",
    marginBottom: 10
  },
});
