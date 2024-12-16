import { StatusBar } from "expo-status-bar";
import { Link, router } from 'expo-router';
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import Button from "../component/Button";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(3, { message: "Must be 3 or more characters long" }),
});

export default function App() {
  const [form, setForm] = useState({});
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("")

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      LoginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" })); 
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message })); 
    }
  };

  const handleSubmit = async () => {
    try {
      LoginSchema.parse(form);

     const res = await axios.post(
      "http://192.168.30.231:8080/api/auth/login",form);
      await AsyncStorage.setItem("accessToken", res.data.accessToken);
      router.replace("/(home)")
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setServerError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setServerError("Network error. Please try again later.");
          console.error("Network Error:", err.request);
        } else {
          setServerError("An unexpected error occurred.");
          console.error("Request Setup Error:", err.message);
        }
      } else if (err?.errors) {
        const errors = {};
        err.errors.forEach((item) => {
          const key = item.path[0];
          errors[key] = item.message;
        });
        setErrors(errors);
      } else {
        setServerError("An unknown error occurred.");
        console.error("Unhandled Error:", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      {serverError && <Text>{serverError}</Text>}
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        style={[styles.input, errorMsg.email && styles.inputError]}
        placeholder="Email"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />
       {errorMsg.email ? <Text style={styles.errorMsg}>{errorMsg.email}</Text> : null}
      <TextInput
        style={[styles.input, errorMsg.password && styles.inputError]}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      {errorMsg.password ? <Text style={styles.errorMsg}>{errorMsg.password}</Text> : null}

      <Button handlePress={handleSubmit} text="Login" bgColor="#19918F" />

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <Link href="/register" style={styles.registerLink}>Register Here</Link>
      </View>
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
